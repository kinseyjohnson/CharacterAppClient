import React, { useState, useEffect, useContext } from "react";
import {Container, Row, Col} from 'reactstrap';
import CharacterTable from './CharacterTable';
import CharacterEdit from './CharEdit';
import CharCreate from './CharCreate';
import { Context } from  '../../Context';


const CharacterIndex = (props) => {
  const [characters, setCharacters] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [characterToUpdate, setCharacterToUpdate] = useState({});
  const {sessionToken} = useContext(Context);
  const {updateToken} = useContext(Context);
  
  const fetchCharacters = () => {
      console.log(sessionToken);
    fetch(`http://localhost:3000/character/usercharacters`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `SECRET ${sessionToken}`
      }),
    })
      .then((res) => res.json())
      .then((characterData) => {
          console.log(characterData)
        setCharacters(characterData);
      });
  };

  useEffect (() => {
    fetchCharacters()
  }, [])

  const editUpdateCharacter = (character) => {
    setCharacterToUpdate(character);
    console.log(character);
  };

//   const updateOn = () => {
//     setUpdateActive(true);
//   };

//   const updateOff = () => {
//     setUpdateActive(false);
//   };

  return (
    <Container>
        {/* {fetchCharacters} */}
      {/* <Row>
        <Col md="3">
          <CharCreate fetchCharacters={fetchCharacters} token={props.token} />
        </Col> */}
        <Col md="9">
          <CharacterTable
            characters={characters}
            // editUpdateCharacter={editCharacters}
            // updateOn={updateOn}
            fetchCharacters={fetchCharacters}
            token={sessionToken}
          />
        </Col>
        {/* {updateActive ? (
          <CharacterEdit
            characterToUpdate={characterToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchCharacters={fetchCharacters}
          />
        ) : (
          <></>
        )}
      </Row> */}
    </Container>
  )};

  export default CharacterIndex;