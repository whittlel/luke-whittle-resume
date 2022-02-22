import "./App.css";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import image from './liveOaks.jpg'
class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Container fluid className="pt-5">
          <Row className="justify-content-md-left" >
            <Col xs lg="4" className='pt-5'>
              <h1>Hey, I'm Luke - <br />A Website Developer from Charleston, SC</h1>
              <h5>This website is under construction, come back to see what is updated!</h5>
              <h2>I am a website developer looking to create websites for your company!</h2>
              <p>This app was created with React.js, using React-Bootstrap and React-Router-Dom</p>
            </Col>

            <Col>
              <img className="img-fluid" src={image} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default App;
