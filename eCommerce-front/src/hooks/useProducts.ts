import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {actGetProductsbyCatPrefix, productsRecordsCleanup} from "./index";



const useProducts = () => {
  const params = useParams();
  const productPrefix = params.prefix;
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector((state) => state.product);
  const cartItems = useAppSelector(state => state.Cart.items);
  const wishlistItemsId = useAppSelector(state=> state.wishlist.itemsId);
  const userAccessToken = useAppSelector(state => state.auth.accessToken);

  const productFullInfo = records.map((ele) => (
    {
      ...ele,
      quantity: cartItems[ele.id] || 0,
      isLiked: wishlistItemsId.includes(ele.id), 
      isAuthenticated: userAccessToken? true: false
    }
  ));

  useEffect(() => {
   const promise = dispatch(actGetProductsbyCatPrefix(productPrefix as string));
    return () => {
      dispatch(productsRecordsCleanup());
      promise.abort();
    };
  }, [dispatch, productPrefix]);



  return {loading, error, productFullInfo, productPrefix}
}

export default useProducts;