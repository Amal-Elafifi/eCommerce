import useCart from "@hooks/useCart.ts";
import { Heading } from "@components/common"
import {  CartItemList, CartSubtotalPrice, LottieHandler } from "./index.ts";
import { Loading } from "@components/feedback/index.ts";
import { Toaster } from "react-hot-toast";



const Cart = () => {
  const {
    loading,
    error,
    products,
    userAccessToken,
    placingOrderStatus,
    changeQuantityHandler,
    removeItemHandler
  } = useCart();
  return(
    <>
      <Heading title="your Cart" />
      <Toaster/>
      <Loading status={loading} error={error} type="cart">
        {products.length ? <>
            <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} 
            removeItemHandler= {removeItemHandler}/>
            <CartSubtotalPrice products= {products} userAccessToken={userAccessToken}/>
        </>: placingOrderStatus === "fulfilled"? <LottieHandler type="success" message="Your order successfully placed"/>
        : <LottieHandler type="empty" message="Your cart Is empty"/>}
        </Loading>
    </>
  )
}

export default Cart;