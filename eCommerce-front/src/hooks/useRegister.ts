import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import useEmailAvailabilityChecking from '@hooks/useEmailAvailabilityChecking';
import { actAuthRegister, resetUI } from '@store/auth/authSlice';
import { signUpScheme, signupType } from '@validations/SignupScheme';
import { useAppDispatch, useAppSelector} from '@store/hooks';


const useRegister= () => {
  const navigate= useNavigate();
  const dispatch = useAppDispatch();
  const {loading, error, accessToken} = useAppSelector(state => state.auth)

  const {register,
    handleSubmit,
    formState: {errors: formErrors},
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

  useEffect(()=>{
    return() => {
      dispatch(resetUI())
    }
  },[dispatch])


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


  return {
    accessToken,
    loading,
    error,
    formErrors ,
    emailAvailability,
    emailOnBlurHandler,
    formSubmit,
    register,
    handleSubmit,
  }
}

export default useRegister;