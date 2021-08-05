import React, {useState} from "react";
import APIURL from "./helpers/environment";


const T = () => {
    const [classDrop, setClassDrop] = useState('');
    const [raceDrop, setRaceDrop] = useState('');
    const [characterBgDrop, setCharacterBgDrop] = useState('');
    const [alignmentDrop, setAlignmentDrop] = useState('');


    const [sstrength, setStrength] = useState('');
    const [ddexterity, setDexterity] = useState('');
    const [cconstitution, setConstitution] = useState('');
    const [iintelligence, setIntelligence] = useState('');
    const [wwisdom, setWisdom] = useState('');
    const [ccharisma, setCharisma] = useState('');
    const [level, setLevel] = useState('');
    const [nam, setNam] = useState ('');


    const F = (e) =>{
        fetch( `${APIURL}/character/create` )
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
            // * 1
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
        
                    setClassDrop( cls[getParameterArr[0]] )
                    setRaceDrop( race[getParameterArr[1]] )
                    setCharacterBgDrop( chbgdr[getParameterArr[2]] )
                    setAlignmentDrop( alignmen[getParameterArr[3]] )
            
                }
                // console.log(classDrop);
                // console.log(raceDrop);
                // console.log(characterBgDrop);
                // console.log(alignmentDrop)
                // console.log("DON'T REMEMBER ")
            }
        }


                    // * 2
            function runStats() {

                let strength = 12;
                let dexterity = 33;
                let constitution = 55;
                let intelligence = 55;
                let wisdom = 6;
                let charisma = 132;

                let properties = [ strength, dexterity, constitution, intelligence, wisdom, charisma ];

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

                // console.log( 'STATS ', sstrength, ddexterity, cconstitution, iintelligence, wwisdom, ccharisma );

            }

            // * 3
            function runLevel() {
                let lvl;
                lvl = Math.round(( Math.random() * 20 ) - 0.5 );

                if ( lvl <= 0 ) {
                    lvl = 0;
                } else if ( lvl >= 20 ){
                    lvl = 20;
                } 

                setLevel( lvl )
                // console.log('LVL ' , level )
            }
        // * 4 
            function names(dwarf, human, elf, gnome, halfling, orc){
                let name;
                switch (raceDrop) {
                    case 'Dwarf':
                        name = Math.floor((Math.random() * dwarf.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= dwarf.length){
                            name = elf.length
                            // console.log(dwarf[name], '-----------------------------')
                        }
                        // console.log(dwarf[name])
                        setNam(dwarf[name])
                        break;
                    case 'Elf':
                        name = Math.floor((Math.random() * elf.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= elf.length){
                            name = elf.length
                            // console.log(elf[name], '-----------------------------')
                        }
                        // console.log(elf[name])
                        setNam(elf[name])
                        break;
                    case 'Halfiling':
                        name = Math.floor((Math.random() * halfling.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= halfling.length){
                            name = halfling.length
                            // console.log(halfling[name], '-----------------------------')
                        }
                        // console.log(halfling[name])
                        setNam(halfling[name])
                        break;
                    case 'Human':
                        name = Math.floor((Math.random() * human.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= human.length){
                            name = human.length
                            // console.log(human[name], '-----------------------------')
                        }
                        // console.log(human[name])
                        setNam(human[name])
                        break;
                    case 'Dragonborn':
                        name = Math.floor((Math.random() * dwarf.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= dwarf.length){
                            name = dwarf.length
                            // console.log(dwarf[name], '-----------------------------')
                        }
                        // console.log(dwarf[name])
                        setNam(dwarf[name])
                        break;
                    case 'Gnome':
                        name = Math.floor((Math.random() * gnome.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= gnome.length){
                            name = gnome.length
                            // console.log(gnome[name], '-----------------------------')
                        }
                        // console.log(gnome[name])
                        setNam(gnome[name])
                        break;
                    case 'Half-Elf':
                        name = Math.floor((Math.random() * dwarf.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= dwarf.length){
                            name = dwarf.length
                            // console.log(dwarf[name], '-----------------------------')
                        }
                        // console.log(dwarf[name])
                        setNam(dwarf[name])
                        break;
                    case 'Half-Orc':
                        name = Math.floor((Math.random() * orc.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= orc.length){
                            name = orc.length
                            // console.log(orc[name], '-----------------------------')
                        }
                        // console.log(orc[name])
                        setNam(orc[name])
                        break;
                    case 'Tiefling':
                        name = Math.floor((Math.random() * dwarf.length));
                        if (name <= 0) {
                            name = 0
                        } else if  (name >= dwarf.length){
                            name = dwarf.length
                            // console.log(dwarf[name], '-----------------------------')
                        }
                        // console.log(dwarf[name])
                        setNam(dwarf[name])
                        break;
                
                    default:
                        break;
                }
            // console.log('name ' ,nam)
            }
    }
    
    

    return(
        <>
        <button onClick={F}> T FUNCTION</button>
        </>
    )
}

export default T;