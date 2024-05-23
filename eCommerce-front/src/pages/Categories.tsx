import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Category } from ".";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";

const Categories = () => {
    const dispatch = useAppDispatch();
    const {loading, error, records} = useAppSelector(state => state.categories);

    useEffect(() => {
      
      if(!records.length){
        dispatch(actGetCategories());
      }

    },[dispatch])

    const categoriesList = records.length > 0 ? records.map(record => (
      <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
      <Category {...record}/>
    </Col>
    )): "categories not found";


    return (
        <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  );
};

export default Categories;