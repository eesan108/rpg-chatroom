import React, { useState } from "react";
import diceImage from "../assets/d20.png";

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

            <div
                style={{
                    position: "relative",
                    display: "inline-block",
                    marginTop: "20px",
                    width: "150px",
                    height: "150px",
                }}
            >
                <img 
                    src={diceImage}
                    alt="Dice"
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        animation: rolling ? "spin 1s linear infinite" : "none",
                    }}
                />

                {roll !== null && (
                    <p style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -130%)",
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                pointerEvents: "none",
                }}>{roll}</p>
                )}
            </div>
        </div>
    )
}


export default RollDice;
