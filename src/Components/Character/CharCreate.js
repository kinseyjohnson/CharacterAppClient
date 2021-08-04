import React, { useState } from 'react';
import './charcreate.css'


const Create = (props) => {
    const [characterName, setCharacterName] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [race, setRace] = useState('');

    const [background, setBackground] = useState('');
    const [alignment, setAlignment] = useState('');

    const [level, setLevel] = useState('');
    const [strength, setStrength] = useState('');
    const [dexterity, setDexterity] = useState('');
    const [constitution, setConstitution] = useState('');
    const [intelligence, setIntelligence] = useState('');
    const [wisdom, setWisdom] = useState('');
    const [charisma, setCharisma] = useState('');


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



// !!!!!!!!!!!!!!!!!!!!!!! SOME RANDOM START !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const F = (e) =>{
        fetch( 'http://localhost:3000/character/create' )
        .then( res => res.json() )
        .then( json => {
            const getJson = json.json;
            const classeArr = getJson.classes;
            const racesArr = getJson.races;
            const CharBgsArr = getJson.characterbackground;
            const alignmentsArr = getJson.alignments;

            // fetch RACES
            const orc = getJson.orc;
            const human = getJson.human;
            const halfling = getJson.halfling;
            const gnome = getJson.gnome;
            const elf = getJson.elf;
            const dwarf = getJson.dwarf;
        
            const parameterArr = [ classeArr, racesArr, CharBgsArr, alignmentsArr ];

        
            let ranClass;
            let race;
            let charBg;
            let alignment;
        
            const getParameterArr = [ ranClass, race, charBg, alignment ];
            
            runCharachter(getParameterArr, parameterArr)
            runStats()
            runLevel()
            names(orc, human, halfling, gnome, elf, dwarf)
            })
            // * 1 CHARACHTER FUNCTION
            function runCharachter(getParameterArr, parameterArr) {

            for ( let i = 0; i < 1; i++ ){
        
                for ( var j = 0; j < 4;  j++ ) {
        
                    getParameterArr[j] =  Math.floor( ( Math.random() * parameterArr[j].length ) );
                        if (getParameterArr[j] <= 0) {
                            getParameterArr[j] = 0
                        } else if  ( getParameterArr[j] >= parameterArr[i].length ){
                            getParameterArr[j] = parameterArr[i].length
                        }

                    let cls = parameterArr[0]
                    let race = parameterArr[1]
                    let chbgdr = parameterArr[2]
                    let alignmen = parameterArr[3]
        
                    setCharacterClass( cls[getParameterArr[0]] )
                    setRace( race[getParameterArr[1]] )
                    setBackground( chbgdr[getParameterArr[2]] )
                    setAlignment( alignmen[getParameterArr[3]] )
            
                }
                console.log(characterClass);
                console.log(race);
                console.log(background);
                console.log(alignment)
                console.log("DON'T REMEMBER ")
            }
        }


                    // * 2 STATS FUNCTION
            function runStats() {

                let sstrength = 12;
                let ddexterity = 33;
                let cconstitution = 55;
                let iintelligence = 55;
                let wwisdom = 6;
                let ccharisma = 132;

                let properties = [ sstrength, ddexterity, cconstitution, iintelligence, wwisdom, ccharisma ];

                for ( let i = 0; i < properties.length; i++ ){
                    properties[i] = Math.round((Math.random() * 18) - 0.5);
                        if (properties[i] <= 0) {
                            properties[i] = 0;
                        } else if (properties[i] >= properties[i].length){
                            properties[i] = 18;
                        } 
        
                    setStrength( properties[0] )
                    setDexterity( properties[1] )
                    setConstitution( properties[2] )
                    setIntelligence( properties[3] )
                    setWisdom( properties[4] )
                    setCharisma( properties[5] )
                }

                console.log( 'STATS ', strength, dexterity, constitution, intelligence, wisdom, charisma );

            }

            // * 3 LEVEL FUNCTION
            function runLevel() {
                let lvl;
                lvl = Math.round(( Math.random() * 20 ) - 0.5 );

                if ( lvl <= 0 ) {
                    lvl = 0;
                } else if ( lvl >= 20 ){
                    lvl = 20;
                } 

                setLevel( lvl )
                console.log('LVL ' , level )
            }
        // * 4 RACE FUNCTION
            function names(dwarf, human, elf, gnome, halfling, orc){
                let funcName;
                switch (race) {
                    case 'Dwarf':
                        funcName = Math.floor((Math.random() * dwarf.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= dwarf.length){
                            funcName = elf.length
                            console.log(dwarf[funcName], '-----------------------------')
                        }
                        console.log(dwarf[funcName])
                        setCharacterName(dwarf[funcName])
                        break;
                    case 'Elf':
                        funcName = Math.floor((Math.random() * elf.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= elf.length){
                            funcName = elf.length
                            console.log(elf[funcName], '-----------------------------')
                        }
                        console.log(elf[funcName])
                        setCharacterName(elf[funcName])
                        break;
                    case 'Halfiling':
                        funcName = Math.floor((Math.random() * halfling.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= halfling.length){
                            funcName = halfling.length
                            console.log(halfling[funcName], '-----------------------------')
                        }
                        console.log(halfling[funcName])
                        setCharacterName(halfling[funcName])
                        break;
                    case 'Human':
                        funcName = Math.floor((Math.random() * human.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= human.length){
                            funcName = human.length
                            console.log(human[funcName], '-----------------------------')
                        }
                        console.log(human[funcName])
                        setCharacterName(human[funcName])
                        break;
                    case 'Dragonborn': 
                        funcName = Math.floor((Math.random() * dwarf.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= dwarf.length){
                            funcName = dwarf.length
                            console.log(dwarf[funcName], '-----------------------------')
                        }
                        console.log(dwarf[funcName])
                        setCharacterName(dwarf[funcName])
                        break;
                    case 'Gnome':
                        funcName = Math.floor((Math.random() * gnome.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= gnome.length){
                            funcName = gnome.length
                            console.log(gnome[funcName], '-----------------------------')
                        }
                        console.log(gnome[funcName])
                        setCharacterName(gnome[funcName])
                        break;
                    case 'Half-Elf':
                        funcName = Math.floor((Math.random() * dwarf.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= dwarf.length){
                            funcName = dwarf.length
                            console.log(dwarf[funcName], '-----------------------------')
                        }
                        console.log(dwarf[funcName])
                        setCharacterName(dwarf[funcName])
                        break;
                    case 'Half-Orc':
                        funcName = Math.floor((Math.random() * orc.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= orc.length){
                            funcName = orc.length
                            console.log(orc[funcName], '-----------------------------')
                        }
                        console.log(orc[funcName])
                        setCharacterName(orc[funcName])
                        break;
                    case 'Tiefling':
                        funcName = Math.floor((Math.random() * dwarf.length));
                        if (funcName <= 0) {
                            funcName = 0
                        } else if  (funcName >= dwarf.length){
                            funcName = dwarf.length
                            console.log(dwarf[funcName], '-----------------------------')
                        }
                        console.log(dwarf[funcName])
                        setCharacterName(dwarf[funcName])
                        break;
                
                    default:
                        break;
                }
            console.log('name ', characterName)
            }
    }
    


// !!!!!!!!!!!!!!!!!!!!!!! SOME RANDOM END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!



    return(
        <div className="mainDiv">
            <p className="parastyle">Assign your character's traits</p>
            <div className="formstyle wrapper">
            <form onSubmit={handleSubmit}>
            <div className="charnamestyle characterName">
                <label htmlFor="Character Name">Character's Name:</label>
                    <br />
                <input className="inputstyle" 
                value={characterName} 
                onChange={(e) => setCharacterName(e.target.value)} 
                type="text" 
                name="Character Name" />
                </div>
                <div className="PlayerName">
                <label htmlFor="Player Name">Player's Name:</label>
                    <br />
                <input className="inputstyle" 
                value={playerName} 
                onChange={(e) => setPlayerName(e.target.value)} 
                type="text" 
                name="Player Name" />
                </div>
                <div className="characterClass">
                <label htmlFor="Character Class">Character Class:</label>
                    <br />
                <select value={characterClass} 
                onChange={(e) => setCharacterClass(e.target.value)} 
                className="inputstyle">
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
                <input type="number" 
                className="inputstyle" 
                name="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                id="" />
                <div className="characterRace">
                <label htmlFor="Character Race">Character Race:</label>
                    <br />
                <select value={race} onChange={(e) => setRace(e.target.value)} className="inputstyle">
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
                <select value={background} onChange={(e) => setBackground(e.target.value)} className="inputstyle">
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
                <select value={alignment} onChange={(e) => setAlignment(e.target.value)} className="inputstyle">
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
                <div className="formstyle2 secondHalf">
                <label htmlFor="strength">Strength:</label>
                <br />
                <input value={strength} 
                onChange={(e) => setStrength(e.target.value)} 
                className="inputstyle" 
                type="number" 
                name="strength"/>
                <br />
                <label htmlFor="dexterity">Dexterity:</label>
                <br />
                <input value={dexterity} 
                onChange={(e) => setDexterity(e.target.value)} 
                className="inputstyle" 
                type="number"
                name="dexterity" />
                <br />
                <label htmlFor="constitution">Constitution:</label>
                <br />
                <input value={constitution} 
                onChange={(e) => setConstitution(e.target.value)} 
                className="inputstyle" 
                type="number" 
                name="constitution" />
                <br />
                <label htmlFor="intelligence">Intelligence:</label>
                <br />
                <input value={intelligence} 
                onChange={(e) => setIntelligence(e.target.value)} 
                className="inputstyle" 
                type="number" 
                name="intelligence" />
                <br />
                <label htmlFor="wisdom">Wisdom:</label>
                <br />
                <input value={wisdom} 
                onChange={(e) => setWisdom(e.target.value)}
                className="inputstyle" 
                type="number" 
                name="wisdom" />
                <br />
                <label htmlFor="charisma">Charsima:</label>
                <br />
                <input value={charisma} 
                onChange={(e) => setCharisma(e.target.value)} 
                className="inputstyle" 
                type="number" 
                name="charisma" />
                </div>
                <button type="button" onClick={F} className="bttnstyle">T</button>
                <button className="bttnstyle" type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Create;