import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '@store/hooks';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';
import { Heading } from '@components/common';
import { signUpScheme, signupType } from '@validations/SignupScheme';
import { Input } from '@components/form/input';
import useEmailAvailabilityChecking from '@hooks/useEmailAvailabilityChecking';
import { actAuthRegister } from '@store/auth/authSlice';


const Register = () => {
  const navigate= useNavigate();
  const dispatch = useAppDispatch();
  const {loading, error} = useAppSelector(state => state.auth)

  const {register,
    handleSubmit,
    formState: {errors},
    getFieldState,
    trigger
  } 
  = useForm<signupType>(
    {
      resolver: zodResolver(signUpScheme),
      mode: "onBlur"
    }
  );
  const {emailAvailability,
        enteredEmail,
        checkingEmailAvailability,
        resetEmailChecking} 
        = useEmailAvailabilityChecking();

  const formSubmit: SubmitHandler<signupType> = (data) => {
    const {firstName, lastName, email, password} = data;

    dispatch(actAuthRegister({firstName, lastName, email, password})).unwrap()
    .then(() => {
      navigate("/login?message=successfully_created");    
    })
  };

  const emailOnBlurHandler= async(e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const{isDirty, invalid} = getFieldState("email");

    if(isDirty && !invalid && enteredEmail !== value){
      checkingEmailAvailability(value)
    }
    if(isDirty && invalid && enteredEmail){
      resetEmailChecking(); 
    }

  }
  return (
    <>
    <Heading title="User Registeration"/>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form onSubmit={handleSubmit(formSubmit)}>

            <Input 
              label="First Name" 
              name="firstName" 
              register={register} 
              error={errors?.firstName?.message as string}
            />
            <Input 
              label="Last Name"
              name="lastName" 
              register={register} 
              error={errors?.lastName?.message as string}
            />  
            <Input 
              label="Email" 
              name="email" 
              register={register}
              error={errors?.email?.message? errors?.email?.message as string:
                    emailAvailability === "notAvailable"? "Email is used": emailAvailability === "failed"? "Eroor from The server": ""}
              onBlur={emailOnBlurHandler}
              formText={ emailAvailability === "checking"? "Checking email availability ...please wait": ""}
              success={emailAvailability === "available"? "Available to use" : ""}
              disabled={emailAvailability === "checking"? true: false}
            />
            <Input 
            type="password"
              label="Password"
              name="password"
              register={register}
              error={errors?.password?.message as string}
            />
            <Input 
              type="password"
              label="Confirm Password"
              name="confirmPassword" 
              register={register} 
              error={errors?.confirmPassword?.message as string} 
            />
            <Button 
              variant="info" 
              type="submit" 
              style={{color: "white"}}
              disabled={emailAvailability === "checking"? true: false || loading === "pending"}
            >
              {loading === "pending"? 
              <>
              <Spinner animation="border" size="sm">.</Spinner> Loading...
              </> 
              : "Submit"
              
              }
            </Button>
            {error && <p style={{color: "#DC3545", marginTop: "10px"}}>{error}</p>}
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;