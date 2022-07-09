import React from "react";

export default function Cube(props) {
    var secondaryClassName = "";

    // Render class name based on value property
    if (props.value === 1) {
        secondaryClassName = "first-face";
    } else if (props.value === 2) {
        secondaryClassName = "second-face";
    } else if (props.value === 3) {
        secondaryClassName = "third-face";
    } else if (props.value === 4) {
        secondaryClassName = "fourth-face";
    } else if (props.value === 5) {
        secondaryClassName = "fifth-face";
    } else if (props.value === 6) {
        secondaryClassName = "sixth-face";
    } else {
        secondaryClassName = "none";
    }

    // Generate diffrent JSX pased on value, so that the css dots look good 
    function setDotsLayout() {
        if (props.value === 1) {
            return (
                <div className={"cube " + secondaryClassName} style={{
                    backgroundColor: props.isHeld ? "#59E391" : "white"
                }} onClick={() => props.heldDice(props.id)}>
                    <span className="dot"></span>

                </div>
            )
        } else if (props.value === 2) {
            return (
                <div className={"cube " + secondaryClassName} style={{
                    backgroundColor: props.isHeld ? "#59E391" : "white"
                }} onClick={() => props.heldDice(props.id)}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            )
        } else if (props.value === 3) {
            return (
                <div className={"cube " + secondaryClassName} style={{
                    backgroundColor: props.isHeld ? "#59E391" : "white"
                }} onClick={() => props.heldDice(props.id)}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            )
        } else if (props.value === 4) {
            return (
                <div className={"cube " + secondaryClassName} style={{
                    backgroundColor: props.isHeld ? "#59E391" : "white"
                }} onClick={() => props.heldDice(props.id)}>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
        } else if (props.value === 5) {
            return (
                <div className={"cube " + secondaryClassName} style={{
                    backgroundColor: props.isHeld ? "#59E391" : "white"
                }} onClick={() => props.heldDice(props.id)}>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
        } else if (props.value === 6) {
            return (
                <div className={"cube " + secondaryClassName} style={{
                    backgroundColor: props.isHeld ? "#59E391" : "white"
                }} onClick={() => props.heldDice(props.id)}>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
        }
    }

    return (
        setDotsLayout()
    )
}