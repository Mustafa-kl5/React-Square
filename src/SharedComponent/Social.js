import React, { Component } from "react";
import "../SharedCompanptStyle/Footer.css";
class Social extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-box-social">
        <div className="Contact-Text">Social</div>
        <div className="wrap-box-A">
          <div className="instagram-Text"> {this.props.instagram}</div>
          <div className="facebook-Text">{this.props.facebook}</div>
        </div>
        <div className="wrap-box-B">
          <div className="linkedin-Text">{this.props.linkedin}</div>
          <div className="twitter-Text">{this.props.twitter}</div>
        </div>
      </div>
    );
  }
}

export default Social;
