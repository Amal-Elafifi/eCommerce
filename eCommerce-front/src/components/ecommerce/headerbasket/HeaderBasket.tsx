import { Logo } from ".";
import styles from "./styles.module.css";

const {basketContainer, basketQuantity} = styles;


const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo/>
      <div className={basketQuantity}>0</div>
      
    </div>
  )
}

export default HeaderBasket;