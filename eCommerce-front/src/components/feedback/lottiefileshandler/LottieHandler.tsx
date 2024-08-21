import Lottie from "lottie-react";
import notfound from "@assets/lootiefiles/notfound.json";
import loading from "@assets/lootiefiles/loading.json";
import empty from "@assets/lootiefiles/empty.json";
import networkError from "@assets/lootiefiles/networkError.json";
import wishlist from "@assets/lootiefiles/wishlist.json";
import mainloader from "@assets/lootiefiles/mainloader.json";
import success from "@assets/lootiefiles/success.json";
import laplanding from "@assets/lootiefiles/laplanding.json"


const lottietypesMap = {
  notfound,
  loading,
  empty,
  networkError,
  wishlist,
  mainloader,
  success,
  laplanding
}

type LottieHandlerProps = {
  type: keyof typeof lottietypesMap,
  message?: string
}

const LottieHandler = ({type, message}: LottieHandlerProps) => {
  const lottie = lottietypesMap[type];
  return (
    <div className="d-flex flex-column align-items-center">
      <Lottie animationData={lottie}  style={{ width: "300px" } }/>
      <h3 style={{fontSize: "19px"}}>{message}</h3>
    </div>

  )
}

export default LottieHandler;