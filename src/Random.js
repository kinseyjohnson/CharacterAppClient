import React, {useState} from "react";


const Random = () => {
    // const [classDrop, setClassDrop] = useState('');
    // const [raceDrop, setReceDrop] = useState('');
    // const [characterBgDrop, setCharacterBgDrop] = useState('');
    // const [alignmentDrop, setAlignmentDrop] = useState('');

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
    const F = (e) =>{
        fetch('http://localhost:3000/character/createRandom')
        .then(res => res.json())
        .then(json => {
            const getJson = json.json
            let classeArr = getJson.classes
            let racesArr = getJson.races
            let CharBgsArr = getJson.characterbackground
            let alignmentsArr = getJson.alignments

            // ? CLASSES
            let ranClass = Math.round((Math.random() * classeArr.length) - 0.5);
            if (ranClass <= 0) {
                ranClass = 0;
            } else if (ranClass >= ranClass.length){
                ranClass = classeArr.length;
            } 

            console.log(classeArr[ranClass])

            // ? RACES
            let Race = Math.round((Math.random() * racesArr.length) - 0.5);
            if (Race <= 0) {
                Race = 0;
            } else if (Race >= Race.length){
                Race = racesArr.length;
            } 

            console.log(racesArr[Race])

            // ? CharBgsArr
            let CharBg = Math.round((Math.random() * CharBgsArr.length) - 0.5);
            if (CharBg <= 0) {
                CharBg = 0;
            } else if (CharBgsArr >= CharBgsArr.length){
                CharBg = CharBgsArr.length;
            } 

            console.log(CharBgsArr[CharBg])
            // ? alignmentsArr
            let Alignment = Math.round((Math.random() * alignmentsArr.length) - 0.5);
            if (Alignment <= 0) {
                Alignment = 0;
            } else if (Alignment >= Alignment.length){
                Alignment = alignmentsArr.length;
            } 

            console.log(alignmentsArr[Alignment])

            // let Alignment = Math.round((Math.random() * AlignmentsArr.length) - 0.5);
            // if (Alignment <= 0) {
            //     Alignment = 0;
            // } else if (Alignment >= Alignment.length){
            //     Alignment = AlignmentsArr.length;
            // } 
        })
    }

    // function getRandom () {
    //     runClassDrop();
    //     runRaceDrop();
    //     runCharBgDrop();
    //     runAlignmentDrop();
    // }
    return(
        
        <>
        {/* <button onClick={F}>PUSH</button> */}
        {/* {getRandom()} */}
        </>
    )
}

export default Random;