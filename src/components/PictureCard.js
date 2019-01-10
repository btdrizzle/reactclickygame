import React, { Component } from "react";
import "./style.css"



class PictureCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked : false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.resetGame !== prevProps.resetGame) {
            console.log("fire");
            this.setState({clicked: false})
        }
    }

    makeClicked = () => {
        if(this.state.clicked === true) {
            this.props.lostGame()
        }else{
            this.setState({ clicked : true })
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