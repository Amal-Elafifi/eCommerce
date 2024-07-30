import { Heading } from '@components/common';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpScheme, signupType } from '@validations/SignupScheme';
import { Input } from '@components/form/input';
import useEmailAvailabilityChecking from '@hooks/useEmailAvailabilityChecking';


const Register = () => {
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
  const {emailAvailability, enteredEmail, checkingEmailAvailability, resetEmailChecking} = useEmailAvailabilityChecking();

  const formSubmit: SubmitHandler<signupType> = (data) => {console.log(data)};

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
              disabled={emailAvailability === "checking"? true: false}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;