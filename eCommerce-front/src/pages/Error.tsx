import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "@styles/global.css";
import{ LottieHandler} from "./index";

const Error = () => {

  return (
    <Container>
      <div className="d-flex flex-column align-items-center" style={{marginTop: "15%"}}>
        <LottieHandler type="notfound"/>
        <Link to="/" replace={true}><br/>
          how about going back to safety?
        </Link>
      </div>
    </Container>
  )
}

export default Error ;