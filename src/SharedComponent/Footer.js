import React, { Component } from "react";
import "../SharedCompanptStyle/Footer.css";
import ContactNumEmail from "./ContactNumEmail";
import Address from "./Address";
import Social from "./Social";
import CopyRight from "./CopyRight";
class Footer extends Component {
  render() {
    return (
      <div className="Footer-Box">
        <div className="Footer-Content"><ContactNumEmail CallNum="123-456-7890" Email="info@mysite.com" />
        <Address Address="500 terry fransico street sanfrancicisco ca 94158" />
        <Social
          instagram="instagram"
          facebook="facebook"
          twitter="twitter"
          linkedin="linkedin"
        /></div>
        <div><CopyRight years="2022" /></div>
      </div>
    );
  }
}

export default Footer;
