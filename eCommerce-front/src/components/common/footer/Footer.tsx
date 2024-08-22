import { Row, Col, Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {
  logoimg,
  twitter,
  facebook,
  insta,
  youtube,
  behance,
  googleplus
} from "../index";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const {
  footerWrapper,
  ecomHeading,
  subscribe,
  eComtext,
  inputStyle,
  footerIcons,
  socialIcon,
  mobHeading,
  contact,
  linksWrapper,
  footerList
} = styles;

const Footer = () => {
  return (
    <div className={footerWrapper}>
        <Container>
          <Row>
            <Col sm={6} md={3}>
              <div className={ecomHeading}>
                <img src={logoimg} alt="logo" />
              </div>
                <div className={subscribe}>
                  <Form>
                    <Form.Control className={inputStyle} type="email" placeholder="Enter Your Email *"/>
                    <Button 
                      style={{
                        backgroundColor: "black", 
                        color: "rgba(255, 255, 255, 0.849)",
                        borderColor: "white",
                        padding: "10px 25px",
                        borderRadius: "20px" ,
                        fontWeight: "bold",
                      }}>
                      Subscribe
                    </Button>
                  </Form>
                </div>
              <p className={eComtext}>get monthly updates and free resources</p>
            </Col>
            <Col sm={6} md={3} style={{color: "rgba(255, 255, 255, 0.849)"}}>
                <h6 className={mobHeading}>Mobirise</h6>
                <div className={contact}>
                  <p>Phone: <span>+2{"(0)"}000 0000 001</span></p>
                  <p>Email: <span>OureCom@gmail.com</span></p>
                  <p>Fax: <span>+1-212-9876543</span></p>
                </div>
                <div className={footerIcons}>
                  <div className={socialIcon} >
                    <img src={twitter} alt="twitter"/>
                  </div>
                  <div className={socialIcon} >
                    <img src={facebook} alt="facebook"/>
                  </div>
                  <div className={socialIcon} >
                    <img src={insta} alt="insta"/>
                  </div>
                  <div className={socialIcon} >
                    <img src={youtube} alt="youtube"/>
                  </div>
                  <div className={socialIcon} >
                    <img src={googleplus} alt="googleplus"/>
                  </div>
                  <div className={socialIcon} >
                    <img src={behance} alt="behance"/>
                  </div>
                </div>
            </Col>
            <Col sm={6} md={3}>
              <h6 className={mobHeading}>recent news</h6>
              <div className={linksWrapper}>
                <Link to="/about-us" style={{textDecoration: "none",   color: "rgba(255, 255, 255, 0.61)", marginBottom: "5px"}}> Abou Us</Link>
                <Link to="/about-us" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.61)", marginBottom: "5px"} }>services</Link>
                <Link to="/" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.61)"}}>Get In Touch</Link>
              </div>

            </Col>
            <Col sm={6} md={3}>
                <h6 className={mobHeading}>links</h6>
                <div>
                  <ul className={footerList}>
                    <li>website builder</li>
                    <li>download for mac</li>
                    <li>download for windows</li>
                  </ul>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Footer;

 
{/* <div className={footerContainer}>
© 2024 Our eCom. All rights reserved.
</div> */}
