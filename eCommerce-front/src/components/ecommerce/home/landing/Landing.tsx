import { Row, Col, Container} from "react-bootstrap";
import Lottie from "lottie-react";
import {laplanding} from "../index";
import styles from "./styles.module.css";

const {
  landingRow,
  landingHeading,
  headinglistone,
  headingsecondlist,
  headingthirdlist,
  headinglastlist,
  lottie
} = styles;


const Landing = () => {
  return (
    <Container>
      <Row className={landingRow}>
        <Col  md={6} style={{}}>
          <ul className={landingHeading}>
            <li className={headinglistone}>
              Let`s
            </li>
            <li className={headingsecondlist}>
              explore
            </li>
            <li className={headingthirdlist}>
              unique
            </li>
            <li className={headinglastlist}>
              clothes
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6} >
          <Lottie className={lottie} animationData={laplanding}/>
        </Col>
      </Row>

    </Container>

  );
}

export default Landing;
