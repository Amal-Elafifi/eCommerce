import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks.ts";
import { Heading } from "@components/common"
import {  CartItemList, CartSubtotalPrice } from "./index.ts";
import { actGetProductsByItems, cartItemsChangeQuantity, cartItemRemove } from "@store/cart/CartSlice.ts";
import { Loading } from "@components/feedback/index.ts";



const Cart = () => {
  const dispatch = useAppDispatch();
  const {items, loading, error, productsFullInfo} = useAppSelector(state=> state.Cart);

  useEffect(() => {
    dispatch(actGetProductsByItems())
  }, [dispatch])

  const products = productsFullInfo.map(product => ({
      ...product,
      quantity: items[product.id]
    })
  );

  const changeQuantityHandler =useCallback( (id: number, quantity: number) => {
    dispatch(cartItemsChangeQuantity({id, quantity}))
  }, [dispatch])

  const removeItemHandler = useCallback((id: number) => {
    dispatch(cartItemRemove(id))
  }, [dispatch])

  return(
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} removeItemHamdler= {removeItemHandler}/>
        <CartSubtotalPrice/>
      </Loading>
    </>
  )
}

export default Cart;