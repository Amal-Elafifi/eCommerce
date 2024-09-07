import { Navigate } from 'react-router-dom';
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';
import { Heading } from '@components/common';
import { Input } from '@components/form/input';
import useRegister from '@hooks/useRegister';


const Register = () => {
  const {
    accessToken,
    loading,
    error,
    formErrors,
    emailAvailability,
    formSubmit,
    emailOnBlurHandler,
    register,
    handleSubmit
  } = useRegister();

  if(accessToken){
    <Navigate to="/" />
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
              error={formErrors?.firstName?.message as string}
            />
            <Input 
              label="Last Name"
              name="lastName" 
              register={register} 
              error={formErrors?.lastName?.message as string}
            />  
            <Input 
              label="Email" 
              name="email" 
              register={register}
              error={formErrors?.email?.message? formErrors?.email?.message as string:
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
              error={formErrors?.password?.message as string}
            />
            <Input 
              type="password"
              label="Confirm Password"
              name="confirmPassword" 
              register={register} 
              error={formErrors?.confirmPassword?.message as string} 
              />
              {error && <p style={{color: "#DC3545", marginTop: "10px"}}>{error}</p>}
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
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;