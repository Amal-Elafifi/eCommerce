import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks.ts";
import {
  actGetProductsByItems,
  cartItemsChangeQuantity,
  cartItemRemove,
  cartCleanUp } from "@store/cart/CartSlice.ts";


const useCart = () => {
  const dispatch = useAppDispatch();
  const {items, loading, error, productsFullInfo} = useAppSelector(state=> state.Cart);

  useEffect(() => {
    dispatch(actGetProductsByItems())
    return () => {
      dispatch(cartCleanUp());
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

  return {loading, error, products, changeQuantityHandler, removeItemHandler}
}

export default useCart;