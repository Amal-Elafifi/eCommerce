import { TProduct } from "@customTypes/product";
import CartItem from "../cartItem/CartItem";

type TCartItemListProps = {
  products: TProduct[],
  changeQuantityHandler: (id: number, quantity: number) => void,
  removeItemHamdler: (id: number) => void
}



const CartItemList = ({products, changeQuantityHandler, removeItemHamdler}: TCartItemListProps) => {
  const renderedList= products.map(product => <CartItem key={product.id} {...product} changeQuantityHandler= {changeQuantityHandler} removeItemHamdler={removeItemHamdler}/>)
  
  return (
    <>
      {renderedList}
    </>
  )
}

export default CartItemList;