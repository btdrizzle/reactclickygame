import React from "react";
import "./style.css";

function Counter(props) {
    return (
    <div className="justify-content-right">
    <p id="wins" className="lead mb-1">Wins: {props.wins}  Wins in a Row: {props.winsinarow}</p>
    </div>
    )
}

export default Counter;