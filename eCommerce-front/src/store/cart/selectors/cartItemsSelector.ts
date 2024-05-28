import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const cartItemsQuantitySelector = createSelector(
  (state: RootState) => state.Cart.items,
  (items) => {
    const totalQuantitiy = Object.values(items).reduce((current, accumulator)=>{
      return current + accumulator 
    }
    ,0)
    return totalQuantitiy;
  }
)





export {cartItemsQuantitySelector};