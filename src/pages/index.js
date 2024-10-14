import Footer from "./component/footer";
import Navbar from "./component/navbar";
import {Container, Row, Col} from 'react-bootstrap';


export default function Index() {
   return <>
    <Navbar/>
    <Container>
      <Row>
        <Col className="bg-primary">1 of 2</Col>
        <Col className="bg-primary-subtle">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-info">1 of 3</Col>
        <Col className="bg-info-subtle">2 of 3</Col>
        <Col className="bg-dark-subtle">3 of 3</Col>
      </Row>
    </Container>
    <Footer/>
   </>
}

