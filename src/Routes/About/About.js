import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import portfolioImage from "./PortfolioWebsites.png";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <body className="body-colored" style={{ color: "white" }}>
        <br />
        <Container md="auto">
          <Row xs={10} md={10} >
            <h1
              className="justify-content-md-center"
              style={{ display: "flex", textAlign: "center", marginBottom: "40px" }}
            >
              Over the past two years I was a contracted lead developer for 65
              websites in the virtual event industry.
            </h1>
            <br />
            <h3 style={{ display: "flex", textAlign: "center", borderBottom: "3px solid white", marginBottom: "-2rem" }}>During this time I developed websites and supporting systems to reach
              automation goals. This included building and integrating stand
              alone apps and backend systems to meet the features required for
              clients websites.</h3>
          </Row>
        </Container>
        <Container fluid>
          <Row className="justify-content-md-center" >
            <Col xs={5} className="pt-5" style={{ color: "black" }}>
              <Card>
                <Card.Header>Team Lead</Card.Header>
                <Card.Body>
                  I worked with one other developer, a designer and technical
                  support to create websites, make new features and to bugfix
                  and rework user interaction flows on virtual event websites.
                </Card.Body>
              </Card>
              <br />
              <Card>
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
              </Card>
              <br />
              <Card>
                <Card.Header>Automation System</Card.Header>
                <Card.Body>
                  I helped develop a visual automation system on AWS using EC2
                  by installing a GUI that could be used through SSH. This
                  system ran a CRONJOB that would run python's pygui to export
                  and import site files automatically and email success and/or
                  failures.
                </Card.Body>
              </Card>
              <br />
              <Card>
                <Card.Header>
                  Browser Based 3D Interactive Environemnt
                </Card.Header>
                <Card.Body>
                  I used a 3D scan of a building and cleaned and imported it to
                  Unity to create a virtual environment that you could move
                  around in and explore the scan.
                  <br />
                  <a href="http://3dvistascan.us-east-2.elasticbeanstalk.com/">
                    3d Scan Prototype
                  </a>
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
              <br />
              <Card>
                <Card.Header>Javascript</Card.Header>
                <ListGroup>
                  <ListGroup.Item>React.js</ListGroup.Item>
                  <ListGroup.Item>Node.js</ListGroup.Item>
                  <ListGroup.Item>React-Router</ListGroup.Item>
                  <ListGroup.Item>React-Bootstrap</ListGroup.Item>
                </ListGroup>
              </Card>
              <br />
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
            <Col xs="5">
              <img className="img-fluid" src={portfolioImage} alt="list of websites" style={{ marginTop: "48px", width: "100%", paddingLeft: "40px", paddingRight: "40px" }} />
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default About;
