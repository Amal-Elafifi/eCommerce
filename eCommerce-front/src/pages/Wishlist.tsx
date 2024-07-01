import { Container} from "react-bootstrap";
import { Heading } from "@components/common"
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist, productsFullInfoCleanUp } from "@store/wishlist/WishlistSlice";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
import { GridList, Product} from "./index";


const Wishlist = () => {
  const dispatch= useAppDispatch();
  const { loading, error, productsFullInfo} = useAppSelector((state) => state.wishlist);
  const cartItems = useAppSelector(state => state.Cart.items);



  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp())
    }
  }, [dispatch])


  const records = productsFullInfo.map((ele) => (
    {
      ...ele,
      quantity: cartItems[ele.id] || 0,
      isLiked: true
    }
  ));


  return (
    <Container>
      <Heading >
        <span className="text-capitalize">your wishlist</span> 
      </Heading>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Product {...record}/>}/>
      </Loading>
    </Container>
  )
}


export default Wishlist;