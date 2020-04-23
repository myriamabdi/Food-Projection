import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import users from './database/users';

class App extends Component {
   state = {
      users: users.slice(),
   };

   componentDidMount() {
      //si local storage  ide ->
      //sinon ->
      this.setState({users: JSON.parse(localStorage.getItem('users'))});
   }

   onClick = () => {
      const user = {
         id: this.state.users.length + 1,
         first_name: 'test',
      };

      this.state.users.push(user);
      console.log('users', users);

      localStorage.setItem('users', JSON.stringify(this.state.users));
      console.log('users st on click', this.state.users)
   };

   render() {console.log('users', this.state.users)
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo"/>
               <p>
                  Edit <code>src/App.js</code> and save to reload.
               </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </header>
            <div>
               <Button onClick={this.onClick} />
            </div>
         </div>
      );
   }
}

export default App;


