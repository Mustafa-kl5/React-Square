import React, { Component } from "react";
import "../SharedCompanptStyle/Footer.css";
class CopyRight extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="copy-right">
        CopyRight &copy; {this.props.year}-SQUARE ARCHITECTURE
      </div>
    );
  }
}

export default CopyRight;
