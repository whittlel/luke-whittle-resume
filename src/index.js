import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
//browserRouter can only have ONE CHILD COMPONENT
import AboutDCPV from "./Routes/AboutDCPV/AboutDCPV";
import AboutATI from "./Routes/AboutATI/AboutATI";
import Contact from "./Routes/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavigationHeader from "./Components/NavigationHeader";

ReactDOM.render(
  <HashRouter>
    <NavigationHeader />
    <div>
      <Routes>
        <Route exact path="/luke-whittle-resume/" element={<App />} />
        <Route exact path="AboutDCPV" element={<AboutDCPV />} />
        <Route exact path="AboutATI" element={<AboutATI />} />
        <Route exact path="Contact" element={<Contact />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </div>
  </HashRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
