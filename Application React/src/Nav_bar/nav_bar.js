import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import './Nav_bar.css';

class nav_bar extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div className="nav_bar">
            <MDBNavbar color="FFE2F4" dark expand="md">
                <MDBNavbarToggler onClick={this.toggleCollapse} /> {/*  avoir le menu deroulant sur version mobile*/}
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>
            <MDBNavItem active>
            <MDBNavLink to="/v1/cards">Gérer mes cartes</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/profiles">Gérer mon profil</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/">Log out</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
                </MDBCollapse>
                </MDBNavbar>
                </div>
        );
    }
}
export default nav_bar;