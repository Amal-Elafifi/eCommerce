import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {actGetProductsbyCatPrefix, productsCleanup } from "@store/products/productsSlice";
import { Product } from ".";
import { Loading } from "@components/feedback";


const Products = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const {loading, records, error} = useAppSelector(state => state.product);
  
    useEffect(() => {
      dispatch(actGetProductsbyCatPrefix(params.prefix as string))
      return () => {
        dispatch(productsCleanup())
      } 
    }, [dispatch, params]);

    const productsList = records.length > 0 ? records.map(record => (
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
            <Product {...record} />
        </Col>
    )) :"product not found ";

    
    return (
        <Container>
          <Loading status={loading} error={error}>
            <Row>
                {productsList}
            </Row>
          </Loading>
        </Container>
  );
}

export default Products;