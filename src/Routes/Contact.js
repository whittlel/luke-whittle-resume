import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="hero-image">
        <div className="hero-text">
          <h1><b>Reach out to me at:</b></h1>
          <a href="mailto: lukewhittle1997@gmail.com" style={{ color: "white" }}>lukewhittle1997@gmail.com</a>
          <p>or <br />843.609.5170</p>
          <br />
          <a href="https://github.com/whittlel" style={{ color: "white" }}> https://github.com/whittlel</a>
        </div>
      </div >
    );
  }
}

export default Contact;
