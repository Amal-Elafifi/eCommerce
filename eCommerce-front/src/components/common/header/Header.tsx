import {HeaderBasket} from "./index";
import styles from "./styles.module.css";

import { Badge, Container, Nav, Navbar } from "react-bootstrap";


const {headerContainer, headerLogo} = styles;

const Header = () => {

  return(
    <header >
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">Ecom</Badge>
        </h1>
       <HeaderBasket/>
      </div>
      <Navbar 
          expand="lg"
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary" 
      >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>          
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>   
        </Navbar.Collapse> 
      </Container>
    </Navbar>
    </header>

  )
}

export default Header;