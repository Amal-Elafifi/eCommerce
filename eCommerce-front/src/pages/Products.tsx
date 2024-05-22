import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import actGetProductsbyCatPrefix from "@store/products/act/actGetProductsbyCatPrefix";
import { Product } from ".";

const Products = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const {loading, records, error} = useAppSelector(state => state.product);
  
    useEffect(() => {
      dispatch(actGetProductsbyCatPrefix(params.prefix as string))
    }, [dispatch, params]);

    const productsList = records.length > 0 ? records.map(record => (
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
            <Product {...record} />
        </Col>
    )) :"product not found ";

    
    return (
        <Container>
            <Row>
                {productsList}
            </Row>
        </Container>
  );
}

export default Products;