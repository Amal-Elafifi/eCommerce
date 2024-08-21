import { Container } from "react-bootstrap";
import {Landing, About, NewArrivalSection, Sale, JoinApp} from "./index";

const Home = () => {
    return (
        <Container>
            <Landing/>
            <About/>
            <NewArrivalSection/>
            <Sale/>
            <JoinApp/>
        </Container>
    )
}

export default Home;