import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, {Toaster} from "react-hot-toast";
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';
import { Heading } from '@components/common';
import { Input } from '@components/form/input';
import { signinScheme, signinType } from '@validations/SigninScheme';
import { actAuthLogin, resetUI } from '@store/auth/authSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate= useNavigate();
  const{loading, error} = useAppSelector(state=> state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const {register, handleSubmit, formState: {errors}} = useForm<signinType>({
      resolver: zodResolver(signinScheme),
      mode: "onBlur"
  });

  useEffect(()=>{
    const message = searchParams.get("message")
    if( message === "successfully_created"){
      toast.success("Your account successfully created. please login", {
        position: "top-center"
      })
      setSearchParams("")
    } 
    return () => {
      dispatch(resetUI())
    }
  },[searchParams, setSearchParams, dispatch])

  const formSubmit: SubmitHandler<signinType> = (data) => {
    console.log(data);
    dispatch(actAuthLogin(data)).unwrap().then(()=>{
      navigate("/")
    })

  }


  return (
    <>
    <Heading title="User Login"/>
      <Row>
        <Col md={{span: 6, offset: 3}}>
        <Toaster/>
          <Form onSubmit={handleSubmit(formSubmit)}>
            <Input 
              label="Email address"
              name="email" 
              error={errors?.email?.message as string}
              register={register}
            />       
            <Input 
              type="password"
              label="Password"
              name="password" 
              register={register} 
              error={errors?.password?.message as string}
            /> 
            {error && <p style={{color: "#DC3545", marginTop: "10px"}}>{error}</p>}

            <Button variant="info" type="submit" style={{color: "white"}}>
              {loading === "pending"? 
              <>
              <Spinner animation="border" size="sm"></Spinner> Loading...
              </> 
              : "Submit"
              
              }            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Login ;