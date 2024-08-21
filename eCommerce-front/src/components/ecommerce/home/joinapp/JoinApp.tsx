import { Container, Row, Col } from "react-bootstrap";
import {app, apple, appstore} from "../index"
import styles from "./styles.module.css";

const {
  joinAppWrapper,
  iconsStyle,
  iconWrapper,
  iconCol,
  joinAppHeading,
  joinsubHeading,
  jointext,
  appImg
} = styles;

const JoinApp = () => {
  return (
    <Container className={joinAppWrapper}>
      <h2 className={joinAppHeading}>Join Our App</h2>
      <Row>
        <Col md={{span: 12 }} lg={{span: 3, offset: 1}}  className={iconCol}>
          <h3 className={joinsubHeading}>
              Download the App & get the offer
          </h3>
          <p className={jointext}>
              Get 30% off for first transaction using rondovision mobile app for now.
          </p>
          <div className={iconsStyle}>
              <div className={iconWrapper}>
                <img src={apple} alt="apple" />
              </div>
              <div className={iconWrapper}>
                <img src={appstore} alt="appstore" />
              </div>
          </div>
        </Col>
        <Col md={{span: 11, offset: 1}} lg={{span: 7, offset: 1}}> 
            <img src={app} className={appImg}/>
        </Col>
      </Row>
    </Container>
  )
}

export default JoinApp;