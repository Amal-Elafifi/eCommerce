import {Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { about1,
    about2,
    aboutCard1,
    aboutCard22,
    aboutCard33,
    styles 
} from "./index";


const {
    storyWrapper,
    storyImg,
    storyHeading,
    storyContent,
    ownerWrapper,
    ownerImg,
    companyName,
    companyOwner,
    storyFooter,
    ownerHeading,
    aboutOwner,
    offerHeading,
    cardTitle,
    cardText,
    cardsWrapper,
    extraDetail
}= styles;


const AboutUs = () => {
    return (
        <Container>
            <Row className={storyWrapper}>
            <Col  md={7}  lg={6}>
               <img src={about1} className={storyImg} alt="about"/>
            </Col>
            <Col xs={12}  md={5}  lg={6}>
                <div>
                    <h3 className={storyHeading}>Our Story</h3>
                    <p className={storyContent}>Welcome to &nbsp;
                        <span className={companyName}>
                            Our eCom
                        </span>,
                        &nbsp; where every product tells a story, and every purchase supports a dream.
                        Our journey began with a simple idea: to bring high-quality, thoughtfully curated items to people who appreciate the finer things in life,
                        without sacrificing affordability or style.
                        It all started in 2010 when <span className={companyOwner}>Haitham Salah</span> was inspired by a specific event, personal experience,
                        or insight. What began as a small venture quickly grew into something much bigger. 
                        <span className={extraDetail}>Fueled by passion and a commitment to exceptional service, we set out on a mission to create a shopping experience that is as delightful as the products we offer.
                        At Our eCom, we believe that every detail matters. From the carefully selected materials to the thoughtful design of each product, our goal is to ensure that every item we offer enhances your life in a meaningful way. We work closely with talented artisans and trusted suppliers who share our dedication to quality, sustainability, and innovation.
                        We are grateful for the opportunity to connect with you and are excited to be a part of your everyday moments. Your support allows us to continue doing what we love and to contribute to causes that matter.
                        Thank you for joining us on this journey.</span> 
                        </p>
                        <p className={storyFooter}>
                            With warmest regards,
                            <span className={companyOwner}>
                                Haitham Salah
                            </span>
                             Founder & CEO
                            <span className={companyName}>
                                Our Ecom
                            </span>
                        </p>

                </div>
            </Col>
            </Row>
            <Row className={ownerWrapper}>
                <h2 className={ownerHeading}>About The Owner</h2>
                <Col sm={6} md={5} lg={6}>
                    <p className={aboutOwner}>
                    <span className={companyOwner}>Haitham Salah: </span>
                    builds connection with customers by designing his About page to look like a long-form letter.
                    It tells his story in a personal and friendly tone before focusing on the reader with a section aptly titled 
                    “Which brings me to you.”<span className={companyName}>Our eCom</span> is not only website fot him it is longlife struggle 
                    for quality, truth and simplicity. Start at the beginning and end where your reader is introduced as a character in your personal story.
                    expresses the brand’s commitment to small businesses and community. It kicks off with an overview of the founders’ story, showcasing their 20 years of experience in web design and email,
                    building credibility and authority.
                    </p>
                </Col>
                <Col sm={6}  md={7} lg={6}>
                    <img src={about2} alt="owner" className={ownerImg}/>
                </Col>
            </Row>
            <Row className={cardsWrapper}>
                <h2 className={offerHeading} style={{marginBottom: "20px"}}>What We Offer</h2>
                <Col sm={10}  md={7} lg={4} >
                    <Card style={{ width: '20rem', height: "22rem", marginBottom: "20px" }}>
                        <Card.Img variant="top" src={aboutCard1} />
                        <Card.Body>
                            <Card.Title className={cardTitle}>Quality Products</Card.Title>
                            <Card.Text className={cardText}>
                                We handpick each item to ensure they meet our high standards.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={10} md={4} lg={4}>
                    <Card style={{ width: '20rem', height: "22rem", marginBottom: "20px"}}>
                        <Card.Img variant="top" src={aboutCard22} />
                        <Card.Body>
                            <Card.Title className={cardTitle}>Exceptional Service</Card.Title>
                            <Card.Text className={cardText}>
                                Our dedicated team is here to assist you every step of the way.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={10} md={5} lg={4}>
                    <Card style={{ width: '20rem', height: "22rem", marginBottom: "20px" }}>
                        <Card.Img variant="top" src={aboutCard33}  style={{maxHeight: "211px"}}/>
                        <Card.Body>
                            <Card.Title className={cardTitle}>Secure Shopping</Card.Title>
                            <Card.Text className={cardText}>
                                Your privacy and security are our top priorities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingBottom: "30px"}}>
                <h2 className={offerHeading} style={{marginTop: "10px"}}>FAQ</h2>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                        <Accordion.Header> What size should I order?</Accordion.Header>
                        <Accordion.Body>
                            To ensure the best fit, please refer to our size guide available on each product page.
                            Our size guide provides detailed measurements and fit information to help you choose the right size.
                            If you're between sizes or need further assistance,
                            don’t hesitate to contact our customer service team.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How can I track my order?</Accordion.Header>
                        <Accordion.Body>
                            Once your order has shipped, you will receive a confirmation email with a tracking number and a link to track your package.
                            You can also log into your account on our website and view your order history to track the status of your shipment.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>AWhat is your return policy?</Accordion.Header>
                        <Accordion.Body>
                            We offer a [1- 10 days] return policy for most items.
                            To be eligible for a return, the item must be in its original condition with tags attached.
                            Please visit our Returns & Exchanges page for detailed instructions on how to return or exchange an item.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How do I make a return or exchange?</Accordion.Header>
                        <Accordion.Body>
                            To return or exchange an item, please fill out our online return form or contact our customer service team for assistance.
                            You will receive instructions on how to send the item back to us.
                            Once we receive and inspect the returned item, we will process your refund or exchange promptly.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Can I cancel or modify my order after it has been placed?</Accordion.Header>
                        <Accordion.Body>
                            Once an order is placed, it is processed quickly to ensure prompt delivery.
                            If you need to cancel or modify your order, please contact our customer service team as soon as possible.
                            We will do our best to accommodate your request,
                            but please note that changes cannot be guaranteed once the order is in processing or has shipped.
                        </Accordion.Body>
                    </Accordion.Item>
                 </Accordion>

            </Row>
        </Container>
    )
}

export default AboutUs;