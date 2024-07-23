import { Heading } from '@components/common';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";

type TFormInputs= {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}

const Register = () => {
  const {register, handleSubmit} = useForm<TFormInputs>();
  const formSubmit: SubmitHandler<TFormInputs> = (data) => {console.log(data)}
  return (
    <>
    <Heading title="User Registeration"/>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form onSubmit={handleSubmit(formSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" {...register("firstName")}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"  {...register("lastName")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" {...register("email")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"{ ...register("Password")}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" />
            </Form.Group>
          
            <Button variant="info" type="submit" style={{color: "white"}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;