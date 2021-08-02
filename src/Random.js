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

            // characterName,
            // playerName,
            // // characterClass,
            // level,
            // // race,
            // // background,
            // // alignment,
            // strength,
            // dexterity,
            // constitution,
            // intelligence,
            // wisdom,
            // charisma,

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