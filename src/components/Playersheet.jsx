import React, { useState, useEffect } from 'react'

const Playersheet = () => {

    const [playerData, setPlayerData] = useState(() => {
        const savedData = localStorage.getItem("playerData");
        return savedData ? JSON.parse(savedData) : {
            name: "",
            class: "",
            level: "",
            strength: "",
            dexterity: "",
            constitution: "",
            intelligence: "",
            wisdom: "",
            charisma: "",
        };
    });

    //Save data to localStorage when it changes
    useEffect(() => {
        localStorage.setItem("playerData", JSON.stringify(playerData));
    }, [playerData]);

    //Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        
      <div className='player-sheet'>
        
        <h1>Player sheet</h1>
        <form>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={playerData.name}
                    onChange={handleChange}
                    style={{display: "block", margin: "10px 0", padding: "5px" }}
                />
            </label>
            <label>
                Class: 
                <input
                    type="text"
                    name="class"
                    value={playerData.class}
                    onChange={handleChange}
                    style={{display: "block", margin: "10px 0", padding: "5px" }}
                />
            </label>
            <label>
                level: 
                <input
                    type="text"
                    name="level"
                    value={playerData.level}
                    onChange={handleChange}
                    style={{display: "block", margin: "10px 0", padding: "5px" }}
                />
            </label>
            <h2>Stats</h2>
            {["strength", "dexterity","constitution", "intelligence", "wisdom", "charisma",].map((stat) => (
                <label key={stat}>
                    {stat.charAt(0).toUpperCase() + stat.slice(1)}:
                    <input 
                        type="number"
                        name={stat}
                        value={playerData[stat]}
                        onChange={handleChange}
                        style={{ display: "block", margin: "10px 0", padding: "5px"}}
                    />
                </label>
            ))}
        </form>
      </div>
    );
  };


export default Playersheet