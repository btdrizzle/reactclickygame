import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Pictures from "./components/Pictures";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wins : 0,

    }
}
  

  
  render() {
    return (
      <Wrapper>
      <Header />
      <Pictures />
      </Wrapper>
    );
  }
}

export default App;
