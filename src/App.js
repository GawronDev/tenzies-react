import React from "react";
import Cube from "./components/Cube";
import { nanoid } from 'nanoid';
import Confetti from "react-confetti";

export default function App() {
    const [tenzies, setTenzies] = React.useState(false);
    const [rolls, setRolls] = React.useState(0);

    // Fetch highscore from local storage or set it to undefined
    const [highScore, setHighScore] = React.useState(
        window.localStorage.getItem("highscore") || "not set yet"
    );

    
    // Save better score to local storage as high score 
    React.useEffect(() => {
        window.localStorage.setItem("highscore", highScore);
    }, [highScore])

    // Render a new dice array 
    function allNewDice() {
        const newDiceArr = [];
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.floor(Math.random() * 6) + 1;
            newDiceArr.push({
                value: randomNum,
                isHeld: false,
                id: nanoid()
            });
        };

        return newDiceArr;
    }

    const [dice, setDice] = React.useState(allNewDice());

    // Hold dice from rolling again 
    function holdDice(id) {
        setDice(dice.map((cube) => {
            return cube.id === id ? { ...cube, isHeld: !cube.isHeld } : cube;
        }))
    }

    // Generate dices
    const diceArr = dice.map((val) => {
        return <Cube key={val.id} value={val.value} id={val.id} isHeld={val.isHeld} heldDice={holdDice} />
    })

    // Increment the rolls number and genereate new dice
    function newRoll() {
        setRolls(oldRolls => oldRolls + 1)
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : { value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: nanoid() };
        }));
    }

    //Initialize new game 
    function newGame() {
        setRolls(0);
        setTenzies(false);
        setDice(allNewDice());
    }

    // Check for winning conditions
    React.useEffect(() => {
        const valuesArray = [];
        const isHeldArray = [];

        for (let i = 0; i < dice.length; i++) {
            valuesArray.push(dice[i].value);
            isHeldArray.push(dice[i].isHeld);
        }

        const allEqual = arr => arr.every(v => v === arr[0]);

        if (allEqual(valuesArray) && allEqual(isHeldArray)) {
            setTenzies(true);
            // If rolls is smaller the current highscore set rolls as new highscore
            if(rolls < highScore || highScore === "not set yet"){
                setHighScore(rolls)
            };
        };

    }, [dice])



    return (
        <main>
            {tenzies && <Confetti />}
            <div className="title-container">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value beetween rolls.</p>
                <h2>Number of rolls: {rolls}</h2>
            </div>
            <div className="cube-container">
                {diceArr}
            </div>
            {tenzies ? <button className="re-roll-button" onClick={newGame}>New game</button> : <button className="re-roll-button" onClick={newRoll}>Roll</button>}
            <h2 className="highscore">Current best score: {highScore}</h2>
        </main>
    )
};