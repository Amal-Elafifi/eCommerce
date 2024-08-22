import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Footer, Header } from "@components/common";

import styles from "./styles.module.css";
const {container, wrapper} = styles;


const MainLayout = () => {

  return (
    <>
      <Container className={container}>
        <Header/>

        <div className={wrapper}>
          <Outlet/>
        </div>
        
      </Container>
        <Footer/>
    </>
  )
}

export default MainLayout;