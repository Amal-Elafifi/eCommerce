import { Container, Row, Col, Button } from "react-bootstrap";
import {new1, new2, new3} from "../index";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const {rowcards, newHeading, imageWrapper, title} = styles;


const NewArrivalSection = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/categories")
  }
  return (
    <Container style={{marginTop: "20px"}}>
      <Row className={rowcards}> 
        <h2 className={newHeading}>New Arrivals</h2>
        <Col md={6} lg={4} >
          <div className={imageWrapper}>
            <img src={new2} />
          </div>  
          <div>
            <h5  className={title}>Hoodies & sweatshirt</h5>
            <Button onClick={handleButton} style={{marginBottom: "10px"}}>Explore Now</Button>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className={imageWrapper}>
           <img src={new1} />
          </div>
          <div>
            <h5  className={title}>Winter Dresses</h5>
            <Button onClick={handleButton} style={{marginBottom: "10px"}}>Explore Now</Button>
          </div>
        </Col>
        <Col md={3} lg={4}>
        <div className={imageWrapper}>
          <img src={new3} />
        </div>
        <div>
            <h5  className={title}>sports wear</h5>
            <Button onClick={handleButton} style={{marginBottom: "10px"}}>Explore Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NewArrivalSection;