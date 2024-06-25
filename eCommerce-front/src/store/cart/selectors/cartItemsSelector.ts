import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";



const cartItemsQuantitySelector = createSelector(
  (state: RootState) => state.Cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((current, accumulator)=>{
      return current + accumulator 
    }
    ,0)
    return totalQuantity;
  }
)





export {cartItemsQuantitySelector};