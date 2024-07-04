import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist, wishlistProductsFullInfoCleanUp } from "@store/wishlist/WishlistSlice";

const useWishlist = () => {
  const dispatch= useAppDispatch();
  const { loading, error, productsFullInfo} = useAppSelector((state) => state.wishlist);
  const cartItems = useAppSelector(state => state.Cart.items);



  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(wishlistProductsFullInfoCleanUp())
    }
  }, [dispatch])


  const records = productsFullInfo.map((ele) => (
    {
      ...ele,
      quantity: cartItems[ele.id] || 0,
      isLiked: true
    }
  ));
  return {loading, error, records}
}

export default useWishlist;