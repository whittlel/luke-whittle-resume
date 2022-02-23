import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import portfolioImage from "./PortfolioWebsites.png";

class About extends React.Component {
  render() {
    return (
      <Container fluid className="pt-5">
        <Row className="justify-content-md-left">
          <Col xs={9} className="pt-5">
            <h1>About me</h1>
            <br />
            <h2>
              Over the past two years I have been the lead developer on 65
              websites for the virtual event industry
            </h2>
            <br />
            <h3>
              I have developed supporting systems to reach automation goals and
              I have built and integrated stand alone apps and backend systems
              to meet the features required for these websites.
            </h3>
          </Col>
          <Col>
            <img className="img-fluid" src={portfolioImage} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
