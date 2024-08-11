import { Navigate } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';
import { Heading } from '@components/common';
import { Input } from '@components/form/input';
import useLogin from "@hooks/useLogin";

const Login = () => { 
 const {
  accessToken,
  loading,
  error,
  formErrors,
  formSubmit,
  register,
  handleSubmit, 
} = useLogin();

  if(accessToken){
    <Navigate to="/" />
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
              error={formErrors?.email?.message as string}
              register={register}
            />       
            <Input 
              type="password"
              label="Password"
              name="password" 
              register={register} 
              error={formErrors?.password?.message as string}
            /> 
            {error && <p style={{color: "#DC3545", marginTop: "10px"}}>{error}</p>}

            <Button variant="info" type="submit" style={{color: "white"}}>
              {loading === "pending"? 
              <>
              <Spinner animation="border" size="sm"></Spinner> Loading...
              </> 
              : "Submit"
              
              }
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Login ;