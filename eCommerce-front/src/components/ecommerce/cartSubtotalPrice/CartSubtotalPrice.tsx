import styles from "./style.module.css";


const {container} = styles;

const CartSubtotalPrice = () => {
  return (
    <div className={container}>
      <span>Subtotal Price: </span>
      <span>200.00</span>
    </div>
  )
}

export default CartSubtotalPrice;