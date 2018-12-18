import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './Img';
import Axio from './Axio'
import Im from './Im'
// import { Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Im/>
      <Axio/>
      <Img />
      
      </div>
    );
  }
}

export default App;