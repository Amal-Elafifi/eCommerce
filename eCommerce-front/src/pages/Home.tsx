import { Container } from "react-bootstrap";
import {Landing, About, NewArrivalSection} from "./index";

const Home = () => {
    return (
        <Container>
            <Landing/>
            <About/>
            <NewArrivalSection/>
        </Container>
    )
}

export default Home;