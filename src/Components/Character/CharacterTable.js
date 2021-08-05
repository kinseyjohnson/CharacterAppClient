import React, { useContext } from "react";
import { Table, Button } from "reactstrap";
import { Context } from '../../Context';


const CharacterTable = (props, character) => {
  const {username} = useContext(Context);
  const {sessionToken} = useContext(Context);
  // const deleteCharacter = (character) => {
  //   fetch(`http://localhost:3000/character/usercharacters`, {
  //     method: "DELETE",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       "Authorization": `SECRET ${sessionToken}`,
  //     }),9
  //   }).then(() => props.fetchCharacters());
  // };
    // console.log(props, "+++++++++++++++++++++++++here")
  const deleteCharacter = (character) => {
      // console.log(props.token)
    fetch(`http://localhost:3000/character/delete/${character.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `SECRET ${sessionToken}`,
      }),
    }).then(() => {
        // console.log("Guten Tag")
        props.fetchCharacters()});
  };


  const characterMapper = () => {
    return props.characters.map((character, index) => {
      return (
        <tr key={index}>
          <th scope="row">{character.id}</th>
          <td>{character.characterName}</td>
          <td>{character.characterClass}</td>
          <td>{character.race}</td>
          <td>
            <Button
              style={{ backgroundColor: "grey", margin: "3px" }} onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}
              size="sm">
              Edit
            </Button>{" "}
            <Button
              style={{ backgroundColor: "grey", margin: "3px" }} onClick={() => {deleteCharacter(character)}}
              size="sm">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          padding: "50px",
          fontWeight: "bold",
        }}
      >
        Your Account
      </h1>
      <Table
        style={{
          borderRadius: "5px",
          width: "85%",
          backgroundColor: "#F17D2A",
          opacity: ".9",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Race</th>
            <th>Edit or Delete</th>
          </tr>
        </thead>
        <tbody>{characterMapper()}</tbody>
      </Table>
    </>
  );
};

export default CharacterTable;