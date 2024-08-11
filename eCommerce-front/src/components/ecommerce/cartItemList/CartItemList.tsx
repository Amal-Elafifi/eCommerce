import { TProduct } from "@types";
import CartItem from "../cartItem/CartItem";

type TCartItemListProps = {
  products: TProduct[],
  changeQuantityHandler: (id: number, quantity: number) => void,
  removeItemHandler: (id: number) => void
}



const CartItemList = ({products, changeQuantityHandler, removeItemHandler}: TCartItemListProps) => {
  const renderedList= products.map(product => <CartItem key={product.id} {...product} changeQuantityHandler= {changeQuantityHandler} removeItemHandler={removeItemHandler}/>)
  
  return (
    <>
      {renderedList}
    </>
  )
}

export default CartItemList;