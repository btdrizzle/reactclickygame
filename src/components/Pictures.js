import React, { Component } from "react";
import PictureCard from "./PictureCard";
import pictureList from "./pictureList.json";
import "./style.css";
const _ = require("lodash");

class Pictures extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictureList : pictureList
        }
    }

    checkIfChecked = () => {

    }
    shuffleCards = () => {
        const newList = _.shuffle(this.state.pictureList);
        this.setState({pictureList : newList});
    }
    render() {
        return (
            <div id="allPictures" className="col-8 mx-auto">
            {this.state.pictureList.map(picture => (
                <PictureCard 
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