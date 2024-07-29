import React from 'react';
import {Form} from 'react-bootstrap';
import {Path, FieldValues, UseFormRegister } from 'react-hook-form';

type InputProps <TfieldValue extends FieldValues>= {
  label: string,
  name: Path<TfieldValue>,
  type?: string,
  register: UseFormRegister<TfieldValue>,
  error: string,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Input =<TfieldValue extends FieldValues>({label, name, type="text", register, error, onBlur}:InputProps<TfieldValue>) => {
  const onBlurHandler=(e: React.FocusEvent<HTMLInputElement>) => {
    if(onBlur){
      onBlur(e);
      register(name).onBlur(e);
    }else{
      register(name).onBlur(e);
    }
  }
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type} 
        {...register(name)}
        isInvalid={error? true: false}
        onBlur={onBlurHandler} 
      />
      <Form.Control.Feedback  type="invalid">
        {error}
      </Form.Control.Feedback>
  </Form.Group>
  )
}

export default Input;