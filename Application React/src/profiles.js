import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Nav_bar from "./Nav_bar/nav_bar";

class Profiles extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="starter-template">
          <h1>How it works</h1>
          <p class="lead">
           You can find here the link 
          </p>
        </div>
      </div>
    );
  }
}
export default Profiles;
