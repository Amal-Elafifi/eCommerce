import { Container } from "react-bootstrap";
import styles from "./styles.module.css";


const {aboutHeading, aboutText} = styles;

const About = () => {
  return (
    <Container>
      <h2 className={aboutHeading}>About Us</h2>
        <p className={aboutText}>Our journey began with a simple idea:
          to bring quality and innovation to our customers. 
          Over the years,we have grown into a trusted destination for shoppers worldwide,
          offering an extensive range of products.
          We are committed to delivering a shopping experience that exceeds your expectations.
          From the moment you visit our site to the time your order arrives at your doorstep,
          we strive to make every interaction positive and memorable.
        </p>
    </Container>
  )
}

export default About;