import { Heading } from "@components/common"
import { useAppDispatch } from "@store/hooks";
import { actGetWishlist } from "@store/wishlist/WishlistSlice";
import { useEffect } from "react";

const Wishlist = () => {
  const dispatch= useAppDispatch();

  useEffect(() => {
    dispatch(actGetWishlist);
  }, [dispatch])
  return(
    <>
      <Heading>Your Wishlist</Heading>
    </>
  )
}


export default Wishlist;