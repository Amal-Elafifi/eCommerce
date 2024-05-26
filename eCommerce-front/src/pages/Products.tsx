import { Container} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {actGetProductsbyCatPrefix, productsCleanup} from ".";
import { Product } from ".";
import { Loading } from "@components/feedback";
import { GridList} from ".";

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, records, error } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(actGetProductsbyCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);


  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Product {...record} />}/>
      </Loading>
    </Container>
  );
};

export default Products;
