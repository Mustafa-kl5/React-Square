import React, { Component } from "react";
import "../ComponentStyle/MainStart.css";
import pic from '../Image/Street.jpg'
class MainStart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-box">
        <div className="Left-Text">
          A CITY IS MADE OF <br /> 
          MONUMNETS AND BLOCK OF BULDINGS <br />
        STREET AND <span style={{color:"black"}}>SQUARE</span>S
        </div>
        <div className="Image-box"> <img className="image-size" src={pic}/></div>
        <div className="Right-Text">

            THE FINEST QUALITY <br/>
            OF ARTISTIC AND ARTISAN CULTURES OF<br/>
            <span style={{color:"black"}}>ARCHITECTURS</span> AND URBAN DESIGN
        </div>
      </div>
    );
  }
}

export default MainStart;
