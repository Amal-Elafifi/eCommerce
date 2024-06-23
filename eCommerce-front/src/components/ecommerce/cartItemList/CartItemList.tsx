import { TProduct } from "@customTypes/product";
import CartItem from "../cartItem/CartItem";

type TCartItemListProps = {
  products: TProduct[]
}

const CartItemList = ({products}: TCartItemListProps) => {
  const renderedList= products.map(product => <CartItem key={product.id} {...product}/>)
  
  return (
    <>
      {renderedList}
    </>
  )
}

export default CartItemList;