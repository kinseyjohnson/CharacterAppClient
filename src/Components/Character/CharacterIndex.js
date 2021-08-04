import React, { useState, useEffect } from "react";
import CharacterTable from './CharacterTable';
import CharCreate from './CharCreate';

const CharacterIndex = (props) => {
  const [characters, setCharacters] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [characterToUpdate, setCharacterToUpdate] = useState({});

  const fetchCharacters = (props) => {
    fetch(`http://localhost:3000/character/${character.id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `SECRET ${props.token}`
      }),
    })
      .then((res) => res.json())
      .then((characterData) => {
          console.log(characterData)
        setCharacters(characterData);
      });
  };

  const editUpdateCharacter = (character) => {
    setCharacterToUpdate(character);
    console.log(character);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      <Row>
        <Col md="3">
          <CharCreate fetchCharacters={fetchCharacters} token={props.token} />
        </Col>
        <Col md="9">
          <CharacterTable
            characters={characters}
            editUpdateCharacter={editCharacters}
            updateOn={updateOn}
            fetchCharacters={fetchCharacters}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <CharacterEdit
            characterToUpdate={characterToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchCharacters={fetchCharacters}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  )};

  export default CharacterIndex;
