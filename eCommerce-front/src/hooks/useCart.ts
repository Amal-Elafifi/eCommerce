import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks.ts";
import {
  actGetProductsByItems,
  cartItemsChangeQuantity,
  cartItemRemove,
  cartCleanUp } from "@store/cart/CartSlice.ts";
import { resetOrderStatus } from "@store/orders/PlaceOrderSlice";


const useCart = () => {
  const dispatch = useAppDispatch();
  const {items, loading, error, productsFullInfo} = useAppSelector(state=> state.Cart);
  const userAccessToken= useAppSelector(state=> state.auth.accessToken);
  const placingOrderStatus = useAppSelector(state => state.orders.loading)

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());
    return () => {
      dispatch(cartCleanUp());
      dispatch(resetOrderStatus());
      promise.abort();
    }
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

  return {
    loading,
    error,
    products,
    userAccessToken,
    placingOrderStatus,
    changeQuantityHandler,
    removeItemHandler
  }
}

export default useCart;