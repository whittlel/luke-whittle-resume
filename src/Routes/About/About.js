import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import portfolioImage from "./PortfolioWebsites.png";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <Container fluid className="pt-5">
        <Row className="justify-content-md-left">
          <Col xs={6} className="pt-5">
            <h1 className="About-header">About me</h1>
            <br />
            <h2 style={{ textIndent: "40px" }}>
              Over the past two years I was a contracted lead developer for 65
              websites in the virtual event industry.
            </h2>
            <br />
            <h4 style={{ textIndent: "40px" }}>
              I have developed supporting systems to reach automation goals; I
              have built and integrated stand alone apps and backend systems to
              meet the features required for these websites.
            </h4>
            <br />
            <Card>
              <Card.Body>
                <Card.Header>Team Lead</Card.Header>
                <Card.Body>
                  I worked with one other developer, a designer and technical
                  support to create websites, make new features and to bugfix
                  and rework user interaction flows on virtual event websites.
                </Card.Body>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Header>
                  Prototyping and Delivering New Features
                </Card.Header>
                <Card.Body>
                  I rapidly prototyped client requests to let clients see
                  potential features that could be added to websites. I would
                  give estimated cost to complete and timeline of completion
                  while managing expectations of the application that would be
                  built.
                </Card.Body>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>Automation System</Card.Header>
                <Card.Body>
                  I helped develop a visual automation system on AWS using EC2
                  by installing a GUI that could be used through SSH. This
                  system ran a CRONJOB that would run python's pygui to export
                  and import site files automatically and email success and/or
                  failures.
                </Card.Body>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  Browser Based 3D Interactive Environemnt
                </Card.Header>
                <Card.Body>
                  I used a 3D scan of a building and cleaned and imported it to
                  Unity to create a virtual environment that you could move
                  around in and explore the scan.
                </Card.Body>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header>Skills</Card.Header>
              <ListGroup>
                <ListGroup.Item>Javascript</ListGroup.Item>
                <ListGroup.Item>AWS</ListGroup.Item>
                <ListGroup.Item>SQL</ListGroup.Item>
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>GitHub</ListGroup.Item>
                <ListGroup.Item>Wix</ListGroup.Item>
                <ListGroup.Item>Bootstrap</ListGroup.Item>
                <ListGroup.Item>Docker</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card>
              <Card.Header>Javascript</Card.Header>
              <ListGroup>
                <ListGroup.Item>React.js</ListGroup.Item>
                <ListGroup.Item>Node.js</ListGroup.Item>
                <ListGroup.Item>React-Router</ListGroup.Item>
                <ListGroup.Item>React-Bootstrap</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card>
              <Card.Header>AWS</Card.Header>
              <ListGroup>
                <ListGroup.Item>EC2</ListGroup.Item>
                <ListGroup.Item>Elastic Beanstalk</ListGroup.Item>
                <ListGroup.Item>Route53</ListGroup.Item>
                <ListGroup.Item>s3</ListGroup.Item>
                <ListGroup.Item>Lambda</ListGroup.Item>
                <ListGroup.Item>DynamoDB</ListGroup.Item>
                <ListGroup.Item>Amplify</ListGroup.Item>
                <ListGroup.Item>Cloudfront</ListGroup.Item>
                <ListGroup.Item>CodePipeline</ListGroup.Item>
              </ListGroup>
            </Card>
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
