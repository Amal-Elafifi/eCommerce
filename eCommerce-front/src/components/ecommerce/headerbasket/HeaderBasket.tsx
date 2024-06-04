import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { Logo, cartItemsQuantitySelector } from ".";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } = styles;

const HeaderBasket = () => {
  const[isAnimated, setIsAnimated] = useState(false);
  const totalQuantitiy = useAppSelector(cartItemsQuantitySelector);
      <div className={basketQuantity}>{totalQuantitiy}</div>
  const quantityStyle =`${basketQuantity} ${isAnimated? pumpCartQuantity: "" }`

  useEffect(() => {
    if(!totalQuantitiy){
      return;
    }
    setIsAnimated(true);
    const debounced = setTimeout(()=>{
        setIsAnimated(false)
    }, 300)
    return () => clearTimeout(debounced)
  },[totalQuantitiy])

  return (
    <div className={basketContainer}>
      <div className={basketCart}>
        <Logo />
        <div className={quantityStyle}>{totalQuantitiy}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
