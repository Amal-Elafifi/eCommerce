import { Container} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {actGetProductsbyCatPrefix, productsCleanup} from "./index";
import { Product } from "./index";
import { Loading } from "@components/feedback";
import { GridList} from "./index";
import { Heading } from "@components/common";

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, records, error } = useAppSelector((state) => state.product);
  const cartItems = useAppSelector(state => state.Cart.items);
  const wishlistItemsId = useAppSelector(state=> state.wishlist.itemsId);

  const productFullInfo = records.map((ele) => (
    {
      ...ele,
      quantity: cartItems[ele.id] || 0,
      isLiked: wishlistItemsId.includes(ele.id)
    }
  ));

  useEffect(() => {
    dispatch(actGetProductsbyCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);


  return (
    <Container>
      <Heading >
        <span className="text-capitalize">{params.prefix}</span> Products
      </Heading>
      <Loading status={loading} error={error}>
        <GridList records={productFullInfo} renderItem={(record) => <Product {...record}/>}/>
      </Loading>
    </Container>
  );
};

export default Products;
