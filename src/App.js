import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Pictures from "./components/Pictures";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wins : 0,
        winsInARow: 0,
    }
}
  startOver = () => {
    this.refs.pictures.setStateReset();
  }
  winGame = () => {
    this.setState({wins : this.state.wins + 1});
    this.setState({winsInARow : this.state.winsInARow + 1});
    this.startOver();
    alert("You won!!");
  }
  loseGame = () => {
    this.setState({winsInARow : 0});
    this.startOver();
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
      ref="pictures"
      loseGame={this.loseGame}
      winGame={this.winGame}
      />
      </Wrapper>
    );
  }
}

export default App;
