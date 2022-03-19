import React, { Component } from "react";
import "../SharedCompanptStyle/Footer.css";
class ContactNumEmail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-box">
        <div className="Contact-Text">Contact</div>
        <div className="Call-Text">Call <span style={{color:"gray"}}>{this.props.CallNum}</span></div>
        <div className="Email-Text">Call <span style={{color:"gray"}}>{this.props.Email}</span></div>
      </div>
    );
  }
}

export default ContactNumEmail;
