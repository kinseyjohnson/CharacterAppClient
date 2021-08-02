import React, {useState} from "react";

const Test = () => {

    const [classDrop, setClassDrop] = useState('');
    const [raceDrop, setReceDrop] = useState('');
    const [characterBgDrop, setCharacterBgDrop] = useState('');
    const [alignmentDrop, setAlignmentDrop] = useState('');


let trying = () => {
    // let classesArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    // let RacesArr = ['Dwarf', 'Elf', 'Halfiling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling']
    // let CharBgsArr = ['Acolyte', 'Criminal/Spy', 'Folk Hero', 'Noble', 'Sage', 'Soldier']
    // let AlignmentsArr = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'LAwful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']

    // let parameterArr = [classesArr, RacesArr, CharBgsArr, AlignmentsArr];
    // // console.log(parameterArr.length, "LENGTH")

    // let ranClass;
    // let race;
    // let charBg;
    // let alignment;
    // let getParameterArr = [ranClass, race, charBg, alignment];
    // // console.log(getParameterArr.length, "LENGTH")
    
    // for (let i = 0; i < parameterArr.length; i++) {
    
    // getParameterArr[i] = Math.round((Math.random() * parameterArr[i].length));
    // // console.log(getParameterArr[i])
    // if (getParameterArr[i] <= 0) {
    //     getParameterArr[i] = 0;
    // } else if (getParameterArr[i] >= getParameterArr[i].length){
    //     getParameterArr[i] = parameterArr[i].length;
    // } 
    // // console.log(getParameterArr[i]);
    // // console.log(parameterArr[i]);

    //     return parameterArr[getParameterArr[i]]


        // characterName,
        // playerName,
        // // characterClass,
        // level,
        // // race,
        // // background,
        // // alignment,
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
            // console.log(properties[i])
            // console.log(properties[1])
            // setClassDrop(properties[1])
        }
        console.log(properties)
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