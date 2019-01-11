import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Backtop from "./components/Backtop"

class App extends Component {
    render() {
        return (
            <div className="App">
            <Navbar></Navbar>
            <Backtop></Backtop>
        {this.props.children}
      </div>
        );
    }
}

export default App;
