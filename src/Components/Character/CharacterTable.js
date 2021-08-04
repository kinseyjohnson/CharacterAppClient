import React, { useState } from "react";
import { Table, Button } from "reactstrap";

const CharacterTable = (props) => {
  const [characters, setCharacters] = useState('')

    const deleteCharacter = (character) => {
        fetch(`http://localhost:3000/character/${character.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `SECRET ${props.token}`
            })
        })
        .then(() => props.fetchCharacters())
    }

    const characterMapper = (props) => {
        return props.characters.map((character, index) => {
        return(
            <tr key={index}>
                <th scope="row">{character.id}</th>
                <td>{character.name}</td>
                <td>{character.class}</td>
                <td>{character.race}</td>
                <td>
                <Button
              style={{ backgroundColor: "grey", width: "20%", margin: "3px" }}
              size="sm"
            >
              Edit
            </Button>{" "}
            <Button
              style={{ backgroundColor: "grey", width: "20%", margin: "3px" }}
              size="sm"
            >
              Delete
            </Button>
            </td>
            </tr>
        )
    })
    }

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
        borderless
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Race</th>
            <th>Edit or Delete</th>
          </tr>
        </thead>
        <tbody>
          {characterMapper()}
        </tbody>
      </Table>
    </>
  );
};

export default CharacterTable;
