import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { Logo } from ".";
import { cartItemsQuantitySelector } from "@store/cart/selectors/cartItemsSelector";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalQuantitiy = useAppSelector(cartItemsQuantitySelector);

  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>{totalQuantitiy}</div>
    </div>
  );
};

export default HeaderBasket;
