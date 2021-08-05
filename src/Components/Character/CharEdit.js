import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'

const Edit = (props) => {
  console.log(props, '-------------------------props EDIT');  
  const [editCharacterName, setEditCharacterName] = useState(props.characterToUpdate.characterName);
  const [editPlayerName, setEditPlayerName] = useState(props.characterToUpdate.playerName);
  const [editCharacterClass, setEditCharacterClass] = useState(props.characterToUpdate.characterClass);
  const [editLevel, setEditLevel] = useState(props.characterToUpdate.level);
  const [editRace, setEditRace] = useState(props.characterToUpdate.race);
  const [editBackground, setEditBackground] = useState(props.characterToUpdate.background);
  const [editAlignment, setEditAlignment] = useState(props.characterToUpdate.alignment);
  const [editStrength, setEditStrength] = useState(props.characterToUpdate.strength);
  const [editDexterity, setEditDexterity] = useState(props.characterToUpdate.dexterity);
  const [editConstitution, setEditConstitution] = useState(props.characterToUpdate.constitution);
  const [editIntelligence, setEditIntelligence] = useState(props.characterToUpdate.intelligence);
  const [editWisdom, setEditWisdom] = useState(props.characterToUpdate.wisdom);
  const [editCharisma, setEditCharisma] = useState(props.characterToUpdate.charisma);
  console.log(editCharacterName, '=========================editCharacterName')
  console.log(editPlayerName, '=========================editCharacterName')
  console.log(editCharacterClass, '=========================editCharacterName')
  console.log(editLevel, '=========================editCharacterName')
  console.log(editRace, '=========================editCharacterName')
  console.log(editBackground, '=========================editCharacterName')
  console.log(editAlignment, '=========================editCharacterName')
  console.log(editStrength, '=========================editCharacterName')
  console.log(editDexterity, '=========================editCharacterName')
  console.log(editConstitution, '=========================editCharacterName')
  console.log(editIntelligence, '=========================editCharacterName')

  console.log(editWisdom, '=========================editCharacterName')
  console.log(editCharisma, '=========================editCharacterName')

// //   console.log(editLevel)
// //   console.log(editCharisma)
// //   console.log(editConstitution)
// //   console.log(editDexterity)

  const characterUpdate = (event, character) => {
      console.log("++++++++++++++++++++++++++++++++++++++++++============")
    event.preventDefault();
    fetch(`http://localhost:3000/character/${props.characterToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        character: {
          characterName: editCharacterName,
          playerName: editPlayerName,
          characterClass: editCharacterClass,
          level: editLevel,
          race: editRace,
          background: editBackground,
          alignment: editAlignment,
          strength: editStrength,
          dexterity: editDexterity,
          constitution: editConstitution,
          intelligence: editIntelligence,
          wisdom: editWisdom,
          charisma: editCharisma,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchCharacters();
    });
  }

  return (
      // <div></div>
    <Modal isOpen={true}>
    <ModalHeader>Update a Character</ModalHeader>
    <ModalBody>
      <Form onSubmit={characterUpdate}>
        <FormGroup>
          <Label htmlFor="characterName">Edit Character Name:</Label>
          <Input
            name="characterName"
            value={editCharacterName}
            onChange={(e) => setEditCharacterName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="playerName">Edit Player Name: </Label>
            <Input
            name="playerName"
            value={editPlayerName}
            onChange={(e) => setEditPlayerName(e.target.value)}/>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="characterClass">Edit Character Class:</Label>
            <Input
            name="characterClass"
            value={editCharacterClass}
            onChange={(e) => setEditCharacterClass(e.target.value)}/>
        </FormGroup>
        <Button type="submit">Update Character</Button>
      </Form>
    </ModalBody>
  </Modal>
)};


export default Edit;
