import { Heading } from '@components/common';
import { Input } from '@components/form/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinScheme, signinType } from '@validations/SigninScheme';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<signinType>({
      resolver: zodResolver(signinScheme),
      mode: "onBlur"
  });
  const formSubmit: SubmitHandler<signinType> = (data) => {console.log(data)}

  return (
    <>
    <Heading title="User Login"/>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form onSubmit={handleSubmit(formSubmit)}>
            <Input 
              label="Email address"
              name="email" 
              error={errors?.email?.message as string}
              register={register}
            />       
            <Input 
              label="Password"
              name="password" 
              register={register} 
              error={errors?.password?.message as string}
            />          
            <Button variant="info" type="submit" style={{color: "white"}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Login ;