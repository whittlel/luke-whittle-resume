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
        <div className="hero-image">
          <div className="hero-text">
            <h1>Hey, I'm Luke - <br />A Website Developer from Charleston, SC</h1>
            <h5>This website is under construction, come back to see what is updated!</h5>
            <br />
            <p>This app was created with React.js, using React-Bootstrap and React-Router-Dom</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
