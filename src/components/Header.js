import React from "react";
import "./style.css";
import Counter from "./Counter";
import Instructions from "./Instructions"

function Header(props) {
    return (
        <header id="header" className="pt-3">
            <div className="col-10 mx-auto">
            <h1 className="text-center">Clicky Memory Game Using React</h1>
            <Counter 
            wins={props.wins}
            winsinarow={props.winsinarow}
            />
            <Instructions />
            </div>
        </header>
    )
}

export default Header;