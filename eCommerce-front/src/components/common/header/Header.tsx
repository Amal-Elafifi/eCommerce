import { NavLink } from "react-router-dom";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import HeaderLeftBar from "./headerLeftBar/HeaderLeftBar";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector} from "@store/hooks";
import { logOut } from "@store/auth/authSlice";
import { useEffect } from "react";
import { actGetWishlist } from "@store/wishlist/WishlistSlice";


const {headerContainer, headerLogo} = styles;

const Header = () => {
  const{accessToken, user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(accessToken){
      dispatch(actGetWishlist("productIds"))
    }
  }, [accessToken, dispatch])

  return(
    <header >
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">eCom</Badge>
        </h1>
       <HeaderLeftBar/>
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
              <Nav.Link as={NavLink} to= "/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
              <Nav.Link as={NavLink} to="about-us">About</Nav.Link>          
            </Nav>
            <Nav>
            {!accessToken?
            <>
              <Nav.Link as={NavLink} to="login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="register">Register</Nav.Link>
            </> :
            <>
              <NavDropdown title={`Welcome: ${user?.firstName} ${user?.lastName}`} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="profile" >Profile</NavDropdown.Item>
                <NavDropdown.Item >
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item 
                  as={NavLink} to="/"
                  onClick={()=> dispatch(logOut())}
                  >
                    Logout
                  </NavDropdown.Item>
                
            </NavDropdown>
            
            </>

            }
            </Nav>   
        </Navbar.Collapse> 
      </Container>
    </Navbar>
    </header>

  )
}

export default Header;