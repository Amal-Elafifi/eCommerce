import useCart from "@hooks/useCart.ts";
import { Heading } from "@components/common"
import {  CartItemList, CartSubtotalPrice, LottieHandler } from "./index.ts";
import { Loading } from "@components/feedback/index.ts";



const Cart = () => {
  const {loading, error, products, changeQuantityHandler, removeItemHandler} = useCart();
  return(
    <>
      <Heading title="your Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? <>
            <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} 
            removeItemHamdler= {removeItemHandler}/>
            <CartSubtotalPrice products= {products}/>
        </>: <LottieHandler type="empty" message="Your cart Is empty"/>}
        </Loading>
    </>
  )
}

export default Cart;