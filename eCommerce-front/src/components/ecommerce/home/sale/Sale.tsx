import { Container, } from "react-bootstrap";
import {sale} from "../index";
import styles from "./styles.module.css";


const {salesContainer, salesHeading, imgsec} = styles;

const Sale = () => {
  return (
    <Container className={salesContainer}>
        <h2 className={salesHeading}>Meet our Big Sale</h2>
        <img src={sale} className={imgsec} alt="sale"/>

      </Container>
  )
}

export default Sale;