import React, {useState} from "react";


const Random = () => {
    // const [classDrop, setClassDrop] = useState('');
    // const [raceDrop, setReceDrop] = useState('');
    // const [characterBgDrop, setCharacterBgDrop] = useState('');
    // const [alignmentDrop, setAlignmentDrop] = useState('');



    const F = (e) =>{
        fetch('http://localhost:3000/character/createRandom')
        .then(res => res.json())
        .then(json => {
            const getJson = json.json;
            let classeArr = getJson.classes;
            let racesArr = getJson.races;
            let CharBgsArr = getJson.characterbackground;
            let alignmentsArr = getJson.alignments;


            // ? CLASSES
            let ranClass = Math.round((Math.random() * classeArr.length) - 0.5);
            // if (ranClass <= 0) {
            //     ranClass = 0;
            // } else if (ranClass >= ranClass.length){
            //     ranClass = classeArr.length;
            // } 

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

        // let strength = 12;
        // let dexterity = 33;
        // let constitution = 55;
        // let intelligence = 55;
        // let wisdom = 6;
        // let charisma = 132;
        // let properties = [strength, dexterity, constitution, intelligence, wisdom, charisma];
        // for (let i = 0; i < properties.length; i++){
        //     properties[i] = Math.round((Math.random() * 18) - 0.5);
        //     if (properties[i] <= 0) {
        //         properties[i] = 0;
        //     } else if (properties[i] >= properties[i].length){
        //         properties[i] = 18;
        //     } 
        //     console.log(properties[i])
        //     // console.log(properties[1])
        //     // setClassDrop(properties[1])
        // }
        let level;
                level = Math.round((Math.random() * 20) - 0.5);
            if (level <= 0) {
                level = 0;
            } else if (level >= 20){
                level = 20;
            } 

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
        <button onClick={F}>PUSH</button>
        {/* {getRandom()} */}
        </>
    )
}

export default Random;