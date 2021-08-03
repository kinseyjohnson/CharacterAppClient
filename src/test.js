import React, {useState} from "react";

const Test = () => {

    const [classDrop, setClassDrop] = useState('');
    const [raceDrop, setRaceDrop] = useState('');
    const [characterBgDrop, setCharacterBgDrop] = useState('');
    const [alignmentDrop, setAlignmentDrop] = useState('');
    // let strength = 12;
    // let dexterity = 33;
    // let constitution = 55;
    // let intelligence = 55;
    // let wisdom = 6;
    // let charisma = 132;

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
    }

    console.log(classDrop)
    console.log(raceDrop)
    console.log(characterBgDrop)
    console.log(alignmentDrop)


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


        // console.log(properties[strength])
        // console.log(properties[1], '=====================')
        // setClassDrop(properties[1])
        // console.log(setClassDrop(properties[1]), '+++++++++++++++++')
        // console.log(classDrop, 'class ----------------------')
    }
    // function runClassDrop() {
    //     const classesArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    //     let ranClass = Math.round((Math.random() * classesArr.length) - 0.5);
    //     if (ranClass <= 0) {
    //         ranClass = 0;
    //     } else if (ranClass >= ranClass.length){
    //         ranClass = classesArr.length;
    //     } 
    //     console.log(classesArr[ranClass])
    // }
    
    // function runRaceDrop() {
    //     const RacesArr = ['Dwarf', 'Elf', 'Halfiling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling']
    //     let Race = Math.round((Math.random() * RacesArr.length) - 0.5);
    //     if (Race <= 0) {
    //         Race = 0;
    //     } else if (Race >= Race.length){
    //         Race = RacesArr.length;
    //     } 
    // }
    
    // function runCharBgDrop() {
    //     const CharBgsArr = ['Acolyte', 'Criminal/Spy', 'Folk Hero', 'Noble', 'Sage', 'Soldier']
    //     let CharBg = Math.round((Math.random() * CharBgsArr.length) - 0.5);
    //     if (CharBg <= 0) {
    //         CharBg = 0;
    //     } else if (CharBgsArr >= CharBgsArr.length){
    //         CharBg = CharBgsArr.length;
    //     } 
    // }
    
    // function runAlignmentDrop() {
    //     const AlignmentsArr = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'LAwful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']
    //     let Alignment = Math.round((Math.random() * AlignmentsArr.length) - 0.5);
    //     if (Alignment <= 0) {
    //         Alignment = 0;
    //     } else if (Alignment >= Alignment.length){
    //         Alignment = AlignmentsArr.length;
    //     } 
    // }
// }

    return(
        <>
            <button onClick={trying}>Testing</button>
        </>
    )
}

export default Test;