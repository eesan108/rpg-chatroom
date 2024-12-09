import React, { useState } from "react";

const RollDice = () => {
    const [roll, setRoll] = useState(null); //State to store the dice roll result
    const [rolling, setRolling] = useState(false); // Animation state

    const rollDice = () => {
        setRolling(true); //starts animation

        let counter = 0;
        const interval = setInterval(() =>{
            const randomNum = Math.floor(Math.random() * 20) + 1;
            setRoll(randomNum);
            counter++;

            if (counter > 15) {
                clearInterval(interval);
                const finalRoll = Math.floor(Math.random() * 20) + 1;
                setRoll(finalRoll);
                setRolling(false);
            }
        }, 100); //Update every 100ms

    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Roll a D20</h1>
            <button onClick={rollDice} style={{ padding: "10px 20px", fontSize: "16px", cursor: rolling ? "not-allowed" : "pointer", }} disabled={rolling}>
                {rolling ? "Rolling..." : "Roll Dice"}
            </button>
            {roll !== null && (
                <p style={{ fontSize: "24px", marginTop: "20px", transition: "transform 0.1s" }}>🎲 {roll}</p>
            )}
        </div>
    )
}


export default RollDice;
