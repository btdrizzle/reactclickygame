import React from "react";
import "./style.css";
import Counter from "./Counter";

function Header(props) {
    return (
        <header id="header" className="col-10 mx-auto sticky-header">
            <h1 className="text-center">Clicky Memory Game Using React</h1>
            <Counter 
            wins={props.wins}
            winsinarow={props.winsinarow}
            />
        </header>
    )
}

export default Header;