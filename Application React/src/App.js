import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { Component, Fragment } from "react";
import "./App.css";
import Nav_Bar from "./Nav_bar/nav_bar.js";
import RegisterUser from "./registerUser";
import Profiles from "./profiles.js";
import Cards from "./cards";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtnGroup,
} from "mdbreact";

class App extends Component {
  componentWillMount() {}
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Fragment>
            <MDBNavbar color="pink" dark expand="md">
              <MDBNavbarToggler onClick={this.toggleCollapse} />{" "}
              {/*  avoir le menu deroulant sur version mobile*/}
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">HOME</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/v1/cards">start the questionnaire </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/profiles">How it works</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/v1/users">About us</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
>


            <Route
              path="/nav_bar"
              component={() => <Nav_Bar display={[]} onSend={() => {}} />}
            />
            <Route
              path="/v1/cards"
              component={() => <Cards display={[]} onSend={() => {}} />}
            />
            <Route
              path="/v1/users"
              component={() => <RegisterUser display={[]} onSend={() => {}} />}
            />
            <Route
              path="/profiles"
              component={() => <Profiles display={[]} onSend={() => {}} />}
            />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
