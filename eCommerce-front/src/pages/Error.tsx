import "@styles/global.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="notFound">
      <h1>404</h1>
     <Link to="/" replace={true}>Looks like you have reached to non-existing page, <br/>
        how about going back to safety?
     </Link>
    </Container>
  )
}

export default Error ;