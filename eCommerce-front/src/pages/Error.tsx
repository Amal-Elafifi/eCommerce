import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";
import "@styles/global.css";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if(isRouteErrorResponse(error)){
    errorStatus= error.status;
    errorStatusText= error.statusText
  }else{
    errorStatus= 404;
    errorStatusText= "Page not found";
  }


  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
     <Link to="/" replace={true}><br/>
        how about going back to safety?
     </Link>
    </Container>
  )
}

export default Error ;