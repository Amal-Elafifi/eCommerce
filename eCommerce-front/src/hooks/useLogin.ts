import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signinScheme, signinType } from '@validations/SigninScheme';
import { actAuthLogin, resetUI } from '@store/auth/authSlice';




const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate= useNavigate();
  const{loading, error, accessToken} = useAppSelector(state=> state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const {register, handleSubmit, formState: {errors: formErrors}} = useForm<signinType>({
      resolver: zodResolver(signinScheme),
      mode: "onBlur"
  });

  const message = searchParams.get("message")
  useEffect(()=>{
    if( message === "successfully_created"){
      toast.success("Your account successfully created. please login")}
      if(message === "login_alert"){
        toast.error("You need to login to see this content")
      }
      setSearchParams("")
    
    return () => {
      dispatch(resetUI())
    }
  },[message, setSearchParams, dispatch])

  const formSubmit: SubmitHandler<signinType> = (data) => {
    dispatch(actAuthLogin(data)).unwrap().then(()=>{
      navigate("/")
    })
  }

  


  return {
    accessToken,
    loading,
    error,
    formErrors,
    formSubmit,
    register,
    handleSubmit, 
  }

}

export default useLogin;