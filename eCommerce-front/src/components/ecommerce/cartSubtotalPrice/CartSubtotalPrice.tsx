import { TProduct } from "@types";
import styles from "./style.module.css";


const {container} = styles;

type CartSubtotalProps = {
  products: TProduct[]
}

const CartSubtotalPrice = ({products}: CartSubtotalProps) => {
  const subtotal = products.reduce((accumulator, el) => {
      const itemPrice = el.price;
      const quantity = el.quantity;
      if(quantity && typeof quantity === "number"){
        return accumulator + itemPrice * quantity
      }else {return accumulator}

  }, 0)


  return (
    <div className={container}>
      <span>Subtotal Price: </span>
      <span>{subtotal.toFixed(2)}</span>
    </div>
  )
}

export default CartSubtotalPrice;