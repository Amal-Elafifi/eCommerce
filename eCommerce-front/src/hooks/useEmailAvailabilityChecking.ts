import axios from "axios";
import { useState } from "react";

type TStatus ="idle" | "checking" | "available"| "notAvailable" | "failed";

const useEmailAvailabilityChecking = () => {
  const [emailAvailability, setEmailAvailability] = useState<TStatus>("idle");
  const [enteredEmail, setEnteredEmail] = useState<null|string>(null)

  const checkingEmailAvailability = async(email: string) => {
    setEnteredEmail(email);
    setEmailAvailability("checking")
    try {
      const response = await axios.get(`/Users?/email=${email}`);
  
      if(!response.data.length){
        setEmailAvailability("available")
      }else{
        setEmailAvailability("notAvailable")
      }
    } catch (error) {
      setEmailAvailability("failed")
    }
  }
  const resetEmailChecking = () => {
    setEmailAvailability("idle");
    setEnteredEmail(null);
  }

  return {emailAvailability, enteredEmail, checkingEmailAvailability, resetEmailChecking}
}

export default useEmailAvailabilityChecking;