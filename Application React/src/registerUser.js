import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';


import Nav_Bar from './Nav_bar/nav_bar.js';



class Login extends Component {

   
  render() {
    return (
      <div>
        <div class="starter-template">
          <h1> About us</h1>
          <p class="lead">
            You can find more informations about this project in our medium page: </p>
            <p class="lead">
              The code source is on our github: https://github.com/myriamabdi/Food-Projection </p>
            <p class="lead"> 
            Link to our Youtube Video: </p>

            <p class="lead">
              You can contact us by e-mail for more information: </p>
            <p class="lead">.
            myriam.abdi@edu.ece.fr </p>
            <p class="lead">
               sandrabaraket@edu.ece.fr</p>
        </div>
      </div>
    );
  }
}
export default Login;