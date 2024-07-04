import useCart from "@hooks/useCart.ts";
import { Heading } from "@components/common"
import {  CartItemList, CartSubtotalPrice } from "./index.ts";
import { Loading } from "@components/feedback/index.ts";



const Cart = () => {
  const {loading, error, products, changeQuantityHandler, removeItemHandler} = useCart();
  return(
    <>
      <Heading title="your Cart" />
      <Loading status={loading} error={error}>
        {products.length ? <>
            <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} 
            removeItemHamdler= {removeItemHandler}/>
            <CartSubtotalPrice products= {products}/>
        </>: "your cart is empty"}
        </Loading>
    </>
  )
}

export default Cart;