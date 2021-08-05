import React, { useState, useEffect, useContext } from "react";
import {Container, Row, Col} from 'reactstrap';
import CharacterTable from './CharacterTable';
import CharacterEdit from './CharEdit';
import CharCreate from './CharCreate';
import { Context } from  '../../Context';


const CharacterIndex = (props) => {
  const {username} = useContext(Context)
  const [characters, setCharacters] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [characterToUpdate, setCharacterToUpdate] = useState({});
  const {sessionToken} = useContext(Context);
  const {updateToken} = useContext(Context);


  const editUpdateCharacter = (character) => {
    setCharacterToUpdate(character);
    console.log(character, '-------------------------------character');
  };
  
  useEffect(() => {
    fetchCharacters()
  }, [])

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };
  
  const fetchCharacters = () => {
    //   console.log(sessionToken, 'paaul');
    // fetch(`http://localhost:3000/character/misha`, {
    //   console.log(sessionToken);
    fetch(`http://localhost:3000/character/usercharacters`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `SECRET ${sessionToken}`
      }),
    })
      .then(res => res.json())
      .then(characterData => {
        setCharacters(characterData);
        console.log(characterData, '        CharacterAppClient')
      });
  };


  return (
    <Container>
        <Row>
        <Col md="3">
          <CharCreate fetchCharacters={fetchCharacters} token={sessionToken} />
        </Col>
        <Col md="9" style={{"width": "100%"}}>
          <CharacterTable
            characters={characters}
            editUpdateCharacter={editUpdateCharacter}
            updateOn={updateOn}
            fetchCharacters={fetchCharacters}
            token={sessionToken}
          />
    </Col>
                {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate}
                updateOff={updateOff} token={sessionToken} fetchCharacters={fetchCharacters}/> : <></>}
            </Row>
    </Container>
  )
}

  export default CharacterIndex;