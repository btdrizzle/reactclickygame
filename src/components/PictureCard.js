import React, { Component } from "react";
import "./style.css"



class PictureCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked : false
        }
    }
    resetState = () => {
        console.log("fire baby");
        console.log(this.state.clicked);
        this.setState({clicked : false});
        console.log(this.state.clicked)
    }

    makeClicked = () => {
        if(this.state.clicked === true) {
            this.props.loseGame()
        }else{
            this.setState({ clicked : true })
            console.log(this.state.clicked);
            this.props.shuffleCards();
        }
    }

    render() {
        return (
            <div className="card bg-dark text-white" key={this.props.id} onClick={this.makeClicked}>
            <img className="card-img" src={this.props.src} alt={this.props.title} />
            </div>
            )
    }

}

export default PictureCard;