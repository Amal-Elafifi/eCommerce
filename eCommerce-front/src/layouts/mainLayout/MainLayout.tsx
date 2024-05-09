import { Footer, Header } from "../../components/common";
import styles from "./styles.module.css";

import { Container } from "react-bootstrap";

const {container} = styles;

const MainLayout = () => {

  return (
    <Container className={container}>
        <Header/>
        <Footer/>
    </Container>
  )
}

export default MainLayout;