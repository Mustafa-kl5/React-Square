import React, { Component } from "react";
import "../SharedCompanptStyle/Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
    this.onClickButton = this.onClickButton.bind(this);
  }
  onClickButton() {
    this.setState({
      isShown: !this.state.isShown
    });

  }
  render() {
    return (
      <div
        className="PopupMenu"
        aria-expanded={this.state.isShown}
        onClick={this.onClickButton}
      >
        <button
          type="button"
          aria-haspopup="true"
          className="PopupMenu__Button"
          onClick={this.onClickButton}
        >
          MENU
          <div
            className={`PopupMenu__Menu -over`}
            aria-hidden={!this.state.isShown}
          >
            PROJECT
          </div>
          <div
            className={`PopupMenu__Menu -under`}
            aria-hidden={!this.state.isShown}
          >
            CONTACT
          </div>
          <div
            className={`PopupMenu__Menu -left`}
            aria-hidden={!this.state.isShown}
          >
            OUR BRAND
          </div>
          <div
            className={`PopupMenu__Menu -right`}
            aria-hidden={!this.state.isShown}
          >
            OUR TEAM
          </div>
        </button>
      </div>
    );
  }
}

export default Menu;
