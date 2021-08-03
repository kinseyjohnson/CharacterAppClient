import React, { useState } from 'react';
import './charcreate.css'
import Random from '../../Random';

const Create = (props) => {
    const [characterName, setCharacterName] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [level, setLevel] = useState('');
    const [race, setRace] = useState('');
    const [background, setBackground] = useState('');
    const [alignment, setAlignment] = useState('');
    const [strength, setStrength] = useState('');
    const [dexterity, setDexterity] = useState('');
    const [constitution, setConstitution] = useState('');
    const [intelligence, setIntelligence] = useState('');
    const [wisdom, setWisdom] = useState('');
    const [charisma, setCharisma] = useState('');

    const formstyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: '30%',
        color: 'white',
        marginTop: '50px'
    }

    const formstyle2 = {
        marginLeft: '400px',
        marginTop: '-420px'
        
    }

    const inputstyle = {
        marginBottom: '20px'
    }

    const parastyle = {
        color: 'white',
        fontSize: '25px',
        marginLeft: '39%',
        marginTop: '80px'
    }

    const bttnstyle = {
        marginTop: '50px',
        marginBottom: '30px',
        marginLeft: '130px',
        width: '70px',
        height: '40px'
    }

    const charnamestyle = {
        marginLeft: '35%'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/character/create', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `SECRET ${props.token}`
            }),
            body: JSON.stringify({
                character: {
                    characterName: characterName, 
                    playerName: playerName, 
                    characterClass: characterClass, 
                    level: level, 
                    race: race, 
                    background: background, 
                    alignment: alignment, 
                    strength: strength, 
                    dexterity: dexterity, 
                    constitution: constitution, 
                    intelligence: intelligence, 
                    wisdom: wisdom, 
                    charisma: charisma
                }}),
        }).then((res) => res.json())
        .then((characterData) => {
            console.log(characterData.playerName);
            setCharacterName('');
            setPlayerName('');
            setCharacterClass('');
            setLevel('');
            setRace('');
            setBackground('');
            setAlignment('');
            setStrength('');
            setDexterity('');
            setConstitution('');
            setIntelligence('');
            setWisdom('');
            setCharisma('')
        })
    }

    return(
        <div className="mainDiv">
            <p style={parastyle}>Assign your character's traits</p>
            <div style={formstyle} className="wrapper">
            <form onSubmit={handleSubmit}>
            <div style={charnamestyle} className="characterName">
                <label htmlFor="Character Name">Character's Name:</label>
                    <br />
                <input style={inputstyle} value={characterName} onChange={(e) => setCharacterName(e.target.value)} type="text" name="Character Name" />
                </div>
                <div className="PlayerName">
                <label htmlFor="Player Name">Player's Name:</label>
                    <br />
                <input style={inputstyle} value={playerName} onChange={(e) => setPlayerName(e.target.value)} type="text" name="Player Name" />
                </div>
                <div className="characterClass">
                <label htmlFor="Character Class">Character Class:</label>
                    <br />
                <select value={characterClass} onChange={(e) => setCharacterClass(e.target.value)} style={inputstyle}>
                    <option value=''></option>
                    <option value='Barbarian'>Barbarian</option>
                    <option value='Bard'>Bard</option>
                    <option value='Cleric'>Cleric</option>
                    <option value='Druid'>Druid</option>
                    <option value='Fighter'>Fighter</option>
                    <option value='Monk'>Monk</option>
                    <option value='Paladin'>Paladin</option>
                    <option value='Ranger'>Ranger</option>
                    <option value='Rogue'>Rogue</option>
                    <option value='Sorcerer'>Sorcerer</option>
                    <option value='Warlock'>Warlock</option>
                    <option value='Wizard'>Wizard</option>
                </select>
                </div>
                <label htmlFor="level">Level:</label>
                <br />
                <input type="number" style={inputstyle} name="level" id="" />
                <div className="characterRace">
                <label htmlFor="Character Race">Character Race:</label>
                    <br />
                <select value={race} onChange={(e) => setRace(e.target.value)} style={inputstyle}>
                    <option value=''></option>
                    <option value='Dwarf'>Dwarf</option>
                    <option value='Elf'>Elf</option>
                    <option value='Halfling'>Halfling</option>
                    <option value='Human'>Human</option>
                    <option value='Dragonborn'>Dragonborn</option>
                    <option value='Gnome'>Gnome</option>
                    <option value='Half-Elf'>Half-Elf</option>
                    <option value='Half-Orc'>Half-Orc</option>
                    <option value='Tiefling'>Tiefling</option>
                </select>
                </div>
                <div className="characterBackground">
                <label htmlFor="Character Background">Character Background:</label>
                    <br />
                <select value={background} onChange={(e) => setBackground(e.target.value)} style={inputstyle}>
                    <option value=''></option>
                    <option value='Acolyte'>Acolyte</option>
                    <option value='CriminalSpy'>Criminal/Spy</option>
                    <option value='Folk Hero'>Folk Hero</option>
                    <option value='Noble'>Noble</option>
                    <option value='Sage'>Sage</option>
                    <option value='Soldier'>Soldier</option>
                </select>
                </div>
                <div className="characterAlignment">
                <label htmlFor="Character Alignment">Character Alignment:</label>
                    <br />
                <select value={alignment} onChange={(e) => setAlignment(e.target.value)} style={inputstyle}>
                    <option value=''></option>
                    <option value='Lawful Good'>Lawful Good</option>
                    <option value='Neutral Good'>Neutral Good</option>
                    <option value='Chaotic Good'>Chaotic Good</option>
                    <option value='Lawful Neutral'>Lawful Neutral</option>
                    <option value='True Neutral'>True Neutral</option>
                    <option value='Chaotic Neutral'>Chaotic Neutral</option>
                    <option value='Lawful Evil'>Lawful Evil</option>
                    <option value='Neutral Evil'>Neutral Evil</option>
                    <option value='Chaotic Evil'>Chaotic Evil</option>
                </select>
                </div>
                <br />
                <div style={formstyle2} className="secondHalf">
                <label htmlFor="strength">Strength:</label>
                <br />
                <input value={strength} onChange={(e) => setStrength(e.target.value)} style={inputstyle} type="number" name="strength"/>
                <br />
                <label htmlFor="dexterity">Dexterity:</label>
                <br />
                <input value={dexterity} onChange={(e) => setDexterity(e.target.value)} style={inputstyle} type="number" name="dexterity" />
                <br />
                <label htmlFor="constitution">Constitution:</label>
                <br />
                <input value={constitution} onChange={(e) => setConstitution(e.target.value)} style={inputstyle} type="number" name="constitution" />
                <br />
                <label htmlFor="intelligence">Intelligence:</label>
                <br />
                <input value={intelligence} onChange={(e) => setIntelligence(e.target.value)} style={inputstyle} type="number" name="intelligence" />
                <br />
                <label htmlFor="wisdom">Wisdom:</label>
                <br />
                <input value={wisdom} onChange={(e) => setWisdom(e.target.value)} style={inputstyle} type="number" name="wisdom" />
                <br />
                <label htmlFor="charisma">Charsima:</label>
                <br />
                <input value={charisma} onChange={(e) => setCharisma(e.target.value)} style={inputstyle} type="number" name="charisma" />
                </div>
                <button onClick={Random} style={bttnstyle}>Random</button>
                <button style={bttnstyle} type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}


export default Create;