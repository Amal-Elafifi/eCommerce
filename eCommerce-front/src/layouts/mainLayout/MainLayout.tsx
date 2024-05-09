import { Container } from "react-bootstrap";
import Header from "../../components/common/header/Header";
import styles from "./styles.module.css";

const MainLayout = () => {
  const {container} = styles;

  return (
    <Container className={container}>
        <Header/>
    </Container>
  )
}

export default MainLayout;