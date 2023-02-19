import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutATI.css";

class AboutATI extends React.Component{
    render(){
        return(
             <div className="body-colored" style={{color: "white"}}>
                 
                <br />

                <Container md="auto">
                    <Row xs={10} md={10} >
                    <h1
              className="justify-content-md-center"
              style={{ display: "flex", textAlign: "center", marginBottom: "40px" }}
            >
                As a Developer II, I have researched and developed solutions for E2E testing, implemented database version control with CI/CD pipelines and assisted with application support.
                </h1>
                <br />
                <h3 style={{ display: "flex", textAlign: "center", borderBottom: "3px solid white", marginBottom: "-2rem" }}>
                    This included working with senior developers, project stakeholders, team leaders as well as 
                    customer success engineers from outside companies.
                </h3>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-content-md-center" >
                        <Col xs={8} className="pt-5" style={{color: "black", paddingBottom: "20px"}}>
                            <Card>
                                <Card.Header> Vue.ts
                                </Card.Header>
                                <Card.Body>
                                    The projects I worked on used Typescript and Vue as the language and framework. I provided code maintence and feature development for the 
                                    company's Vue 2 and 3 applications.
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Header> SQL </Card.Header>
                                <Card.Body> I helped maintain SQL stored procedures and tables under multiple databases. Supported and fixed issues and worked with team 
                                    members to fix bugs.
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Header> SQL Version Control</Card.Header>
                                <Card.Body>
                                    I worked with MSSql to provide a version control system that would integrate with the company's architecture. 
                                    This required researching both Flyway and Liquibase. Each software was configured and implemented into test scenarios. I was in charge
                                    of implementing the chosen software on the existing databases.
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Header> E2E Testing </Card.Header>
                                <Card.Body> 
                                I worked with the testing framework Cypress to set up and configure E2E testing. We used Cucumber as a preprocessor to create tests.
                                I also used Docker and GitLab pipelines to make the testing integrated into the company's pipeline.
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Header> Certified Scrum Developer (CSD) </Card.Header>
                                <Card.Body> I took a class to become a CSD taught by David Bernstein. I learned the essentials of how to become an
                                    effective scrum developer. I was certified on 12/11/2022.</Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Header> Render Atlanta 2022 </Card.Header>
                                <Card.Body> I was able to go to the technology conference: Render ATL which was an inclusivity conference that looked into Vue and Web3 applications. 
                                    Participated in the Vue track to further my knowledge in the framework.</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
             </div>
        )
    }
}


export default AboutATI;