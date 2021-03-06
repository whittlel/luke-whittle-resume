import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//browserRouter can only have ONE CHILD COMPONENT
import About from "./Routes/About/About";
import Contact from "./Routes/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavigationHeader from "./Components/NavigationHeader";

ReactDOM.render(
  <BrowserRouter>
    <NavigationHeader />
    <div>
      <Routes>
        <Route path="/luke-whittle-resume/" element={<App />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
