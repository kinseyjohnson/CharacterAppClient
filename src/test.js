import React, {useState} from "react";

const Test = () => {

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


let trying = () => {
    let classesArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    let RacesArr = ['Dwarf', 'Elf', 'Halfiling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
    let CharBgsArr = ['Acolyte', 'Criminal/Spy', 'Folk Hero', 'Noble', 'Sage', 'Soldier'];
    let AlignmentsArr = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'LAwful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
    // console.log(classesArr[2])

    let parameterArr = [classesArr, RacesArr, CharBgsArr, AlignmentsArr];
    // let a = parameterArr[1]
    // console.log(a[1], "LENGTH")

    let ranClass;
    let race;
    let charBg;
    let alignment;

    let getParameterArr = [ranClass, race, charBg, alignment];
    // console.log(getParameterArr.length, "LENGTH")
    // for (let i = 0; i < array.length; i++) {

        
    // }
    for (let i = 0; i < 1; i++){

        for (var j = 0; j < 4;  j++) {

            getParameterArr[j] =  Math.floor((Math.random() * parameterArr[j].length));
                if (getParameterArr[j] <= 0) {
                    getParameterArr[j] = 0
                } else if  (getParameterArr[j] >= parameterArr[i].length){
                    getParameterArr[j] = parameterArr[i].length
                    console.log(getParameterArr[j], '-----------------------------')
                }
            // console.log(getParameterArr[j])
            // let a = parameterArr[j]
            // console.log(a[getParameterArr[j]],  parameterArr[j]);
            // console.log(a, parameterArr[j])


            let cls = parameterArr[0]
            let race = parameterArr[1]
            let chbgdr = parameterArr[2]
            let alignmen = parameterArr[3]

            setClassDrop(cls[getParameterArr[0]])
            setRaceDrop(race[getParameterArr[1]])
            setCharacterBgDrop(chbgdr[getParameterArr[2]])
            setAlignmentDrop(alignmen[getParameterArr[3]])
    

        }
        console.log(classDrop)
        console.log(raceDrop)
        console.log(characterBgDrop)
        console.log(alignmentDrop)
    }



    // for (let j = 0; j < parameterArr.length; j++) {
    //     let getpar = Math.round((Math.random() * parameterArr[j].length));

    //     // if (getpar[j] <= 0) {

    //     //     getpar[j] = 0;
    //     //                 // console.log(parameterArr[getParameterArr[i]], '----------------------');
        
    //     //             } else if (getpar[j] >= getpar[j].length){
        
    //     //                 getpar[j] = getpar[j].length;
    //     //                 // console.log(parameterArr[getParameterArr[i]], '++++++++++++++++++++');
        
    //     //             }
    //     // console.log(parameterArr[i])
    //     let a = parameterArr[j]
    //     console.log(a[getpar], getpar,"" + [j] + "")
        
    // }
    
    // for (let i = 0; i < parameterArr.length; i++) {
    //     // console.log(parameterArr[i].length, "NUMBERS")
    
    //     getParameterArr[i] = Math.round((Math.random() * parameterArr[i].length));
    //     // console.log(getParameterArr[i])
        
    //         if (getParameterArr[i] <= 0) {

    //             getParameterArr[i] = 0;
    //             // console.log(parameterArr[getParameterArr[i]], '----------------------');

    //         } else if (getParameterArr[i] >= getParameterArr[i].length){

    //             getParameterArr[i] = parameterArr[i].length;
    //             // console.log(parameterArr[getParameterArr[i]], '++++++++++++++++++++');

    //         }
    //         // console.log(parameterArr[i]);
    //         // console.log(getParameterArr[i]);
    //     // console.log(parameterArr[getParameterArr[i]]);
    //     let a = parameterArr[getParameterArr[i]];
    //     console.log(a[i], '===============================')

            
        // console.log(getParameterArr[i],'-----------');
        // console.log(parameterArr[i], '++++++++++++');
        // console.log(parameterArr[i], '==========================================')
        // console.log(parameterArr[2], '==========================================')
        // console.log(parameterArr[3], '==========================================')
        // console.log(parameterArr[0], '-------------------------')

    // }
    // console.log(classDrop, raceDrop, characterBgDrop, alignmentDrop)


        // characterName,
        // playerName,
        // // characterClass,
        // level,
        // race,
        // background,
        // alignment,
        let strength = 12;
        let dexterity = 33;
        let constitution = 55;
        let intelligence = 55;
        let wisdom = 6;
        let charisma = 132;
        let properties = [strength, dexterity, constitution, intelligence, wisdom, charisma];
        for (let i = 0; i < properties.length; i++){
            properties[i] = Math.round((Math.random() * 18) - 0.5);
                if (properties[i] <= 0) {
                    properties[i] = 0;
                } else if (properties[i] >= properties[i].length){
                    properties[i] = 18;
                } 

            setStrength(properties[0])
            setDexterity(properties[1])
            setConstitution(properties[2])
            setIntelligence(properties[3])
            setWisdom(properties[4])
            setCharisma(properties[5])
        }

        console.log(sstrength, ddexterity, cconstitution, iintelligence, wwisdom, ccharisma);

        let lvl;
        lvl = Math.round((Math.random() * 20) - 0.5);
    if (lvl <= 0) {
        lvl = 0;
    } else if (lvl >= 20){
        lvl = 20;
    } 
    setLevel(lvl)
    console.log(level)
}
    const F = (e) =>{
        fetch( 'http://localhost:3000/character/create' )
        .then( res => res.json() )
        .then( json => {
            const getJson = json.json;
            let classeArr = getJson.classes;
            let racesArr = getJson.races;
            let CharBgsArr = getJson.characterbackground;
            let alignmentsArr = getJson.alignments;

            // fetch RACES
            let orc = getJson.orc;
            let human = getJson.human;
            let halfling = getJson.halfling;
            let gnome = getJson.gnome;
            let elf = getJson.elf;
            let dwarf = getJson.dwarf;
            
        
            let parameterArr = [ classeArr, racesArr, CharBgsArr, alignmentsArr ];

        
            let ranClass;
            let race;
            let charBg;
            let alignment;
        
            let getParameterArr = [ ranClass, race, charBg, alignment ];
            

            // * 1
            function runCharachter() {

            for ( let i = 0; i < 1; i++ ){
        
                for ( var j = 0; j < 4;  j++ ) {
        
                    getParameterArr[j] =  Math.floor( ( Math.random() * parameterArr[j].length ) );
                        if (getParameterArr[j] <= 0) {
                            getParameterArr[j] = 0
                            console.log( getParameterArr[j], '------------------------------' )

                        } else if  ( getParameterArr[j] >= parameterArr[i].length ){
                            getParameterArr[j] = parameterArr[i].length
                            console.log( getParameterArr[j], '++++++++++++++++++++++++++' )
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
            }
        }
        runCharachter()

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

                console.log( sstrength, ddexterity, cconstitution, iintelligence, wwisdom, ccharisma );

            }
        runStats()

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
        }
        runLevel()

        // let RacesArr = ['Dwarf', 'Elf', 'Halfiling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
        // let orc = getJson.orc;
        // let human = getJson.human;
        // let halfling = getJson.halfling;
        // let gnome = getJson.gnome;
        // let elf = getJson.elf;
        // let dwarf = getJson.dwarf;

        let name;
        switch (raceDrop) {
            case 'Dwarf':
                name = Math.floor((Math.random() * dwarf.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= dwarf.length){
                    name = elf.length
                    console.log(dwarf[name], '-----------------------------')
                }
                break;
            case 'Elf':
                name = Math.floor((Math.random() * elf.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= elf.length){
                    name = elf.length
                    console.log(elf[name], '-----------------------------')
                }
                break;
            case 'Halfiling':
                 name = Math.floor((Math.random() * halfling.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= halfling.length){
                    name = halfling.length
                    console.log(halfling[name], '-----------------------------')
                }
                break;
            case 'Human':
                name = Math.floor((Math.random() * human.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= human.length){
                    name = human.length
                    console.log(human[name], '-----------------------------')
                }
                break;
            case 'Dragonborn':
                name = Math.floor((Math.random() * dwarf.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= dwarf.length){
                    name = dwarf.length
                    console.log(dwarf[name], '-----------------------------')
                }
                break;
            case 'Gnome':
                name = Math.floor((Math.random() * gnome.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= gnome.length){
                    name = gnome.length
                    console.log(gnome[name], '-----------------------------')
                }
                break;
            case 'Half-Elf':
                name = Math.floor((Math.random() * dwarf.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= dwarf.length){
                    name = dwarf.length
                    console.log(dwarf[name], '-----------------------------')
                }
                break;
            case 'Half-Orc':
                name = Math.floor((Math.random() * orc.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= orc.length){
                    name = orc.length
                    console.log(orc[name], '-----------------------------')
                }
                break;
            case 'Tiefling':
                name = Math.floor((Math.random() * dwarf.length));
                if (name <= 0) {
                    name = 0
                } else if  (name >= dwarf.length){
                    name = dwarf.length
                    console.log(dwarf[name], '-----------------------------')
                }
                break;
        
            default:
                break;
        }




        })
    }



    return(
        <>
            <button onClick={F}>F function</button>

            <button onClick={trying}>Testing</button>
        </>
    )
}

export default Test;