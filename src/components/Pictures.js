import React, { Component } from "react";
import PictureCard from "./PictureCard";
import pictureList from "./pictureList.json";
import "./style.css";
const _ = require("lodash");

class Pictures extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictureList : pictureList,
            count : 0
        }
    }
    setStateReset = () => {
        this.refs.child.resetState();
        console.log("fire");
    }
    shuffleCards = () => {
        this.setState({count : this.state.count + 1});
        if(this.state.count === 15) {
            this.props.winGame();
        }else {
            const newList = _.shuffle(this.state.pictureList);
            this.setState({pictureList : newList});
        }
    }
    render() {
        return (
            <div id="allPictures" className="col-8 mx-auto">
            {this.state.pictureList.map(picture => (
                <PictureCard 
                ref="child"
                id={picture.id}
                key={picture.id}
                src={picture.src}
                title={picture.title}
                shuffleCards={this.shuffleCards}
                loseGame={this.props.loseGame}

                />
            ))}
            </div>
        )
    }
}


export default Pictures;