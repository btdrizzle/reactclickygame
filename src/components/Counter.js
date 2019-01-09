import React from "react";
import "./style.css";

function Counter(props) {
    return (
    <div className="justify-content-right">
    <p id="wins">Wins: {props.wins}</p>
    <p id="inARow">Wins in a Row: {props.winsinarow}</p>
    </div>
    )
}

export default Counter;