import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Pictures from "./components/Pictures";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wins : 0,
        winsInARow: 0,
    }
}
  
  winGame = () => {
    this.setState({wins : this.state.wins + 1});
    this.setState({winsInARow : this.state.winsInARow + 1});
    alert("You won!!");
  }
  loseGame = () => {
    this.setState({winsInARow : 0});
    alert("You lost!");
  }
  
  render() {
    return (
      <Wrapper>
      <Header 
      wins={this.state.wins}
      winsinarow={this.state.winsInARow}
      />
      <Pictures 
      loseGame={this.loseGame}
      winGame={this.winGame}
      />
      </Wrapper>
    );
  }
}

export default App;
