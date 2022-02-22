import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavigationHeader from '../Components/NavigationHeader';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationHeader />
      </div>
    );
  }
}

export default App;
