import React, { Component } from "react";
import "../SharedCompanptStyle/Footer.css";
class Address extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-box">
        <div className="Contact-Text">Address</div>
        <div className="Address-Text"> <span style={{color:"gray"}}>{this.props.Address}</span></div>
      </div>
    );
  }
}

export default Address
