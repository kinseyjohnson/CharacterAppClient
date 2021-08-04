// import React, {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'

// const Edit = (props) => {
//   const [editCharacterName, setEditCharacterName] = useState(
//     props.characterToUpdate.characterName
//   );
//   const [editPlayerName, setEditPlayerName] = useState(
//     props.characterToUpdate.playerName
//   );
//   const [editCharacterClass, setEditCharacterClass] = useState(
//     props.characterToUpdate.characterClass
//   );
//   const [editLevel, setEditLevel] = useState(props.characterToUpdate.level);
//   const [editRace, setEditRace] = useState(props.characterToUpdate.race);
//   const [editBackground, setEditBackground] = useState(
//     props.characterToUpdate.background
//   );
//   const [editAlignment, setEditAlignment] = useState(
//     props.characterToUpdate.alignment
//   );
//   const [editStrength, setEditStrength] = useState(
//     props.characterToUpdate.strength
//   );
//   const [editDexterity, setEditDexterity] = useState(
//     props.characterToUpdate.dexterity
//   );
//   const [editConstitution, setEditConstitution] = useState(
//     props.characterToUpdate.constitution
//   );
//   const [editIntelligence, setEditIntelligence] = useState(
//     props.characterToUpdate.intelligence
//   );
//   const [editWisdom, setEditWisdom] = useState(props.characterToUpdate.wisdom);
//   const [editCharisma, setEditCharisma] = useState(
//     props.characterToUpdate.charisma
//   );

//   const characterUpdate = (event, character) => {
//     event.preventDefault();
//     fetch(`http://localhost:3000/character/${props.characterToUpdate.id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         character: {
//           characterName: editCharacterName,
//           playerName: editPlayerName,
//           characterClass: editCharacterClass,
//           level: editLevel,
//           race: editRace,
//           background: editBackground,
//           alignment: editAlignment,
//           strength: editStrength,
//           dexterity: editDexterity,
//           constitution: editConstitution,
//           intelligence: editIntelligence,
//           wisdom: editWisdom,
//           charisma: editCharisma,
//         },
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     }).then((res) => {
//       props.fetchCharacters();
//     });
//   };

//   return (
//       <div></div>
//   );
// };

// export default Edit;
