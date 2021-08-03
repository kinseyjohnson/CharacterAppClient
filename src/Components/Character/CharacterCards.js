import React, { useEffect, useState } from "react";
import "./charactercards.css";
import { Card, Button, CardTitle, Row } from "reactstrap";

const Account = (props) => {

  const [account, setAccount] = useState([]);

  const fetchAccount = () => {
    fetch("http://localhost:3000/character/get", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((characterData) => {
          console.log(characterData);
        setAccount(characterData);
      })
  }

  useEffect(() => {
    fetchAccount();
  }, [])

  return (
    <div>
      <h1>Your Characters</h1>
      <Row>
        <Card
          style={{
            width: "20%",
            height: "60%",
            textAlign: "center",
            margin: "5%",
            backgroundColor: "#F17D2A",
            opacity: ".9",
          }}
          body
        >
          <CardTitle tag="h5">Character 1</CardTitle>
          <br />
          <Button
            style={{
              color: "black",
              backgroundColor: "#FFFEFE",
              opacity: ".7",
              border: "none",
            }}
          >
            Edit
          </Button>
          <br />
          <Button
            style={{
              color: "black",
              backgroundColor: "#FFFEFE",
              opacity: ".7",
              border: "none",
            }}
          >
            Delete
          </Button>
          <br />
        </Card>
        <Card
          style={{
            width: "20%",
            height: "60%",
            textAlign: "center",
            margin: "5%",
            backgroundColor: "#F17D2A",
            opacity: ".9",
          }}
          body
        >
          <CardTitle tag="h5">Character 2</CardTitle>
          <br />
          <Button
            style={{
              color: "black",
              backgroundColor: "#FFFEFE",
              opacity: ".7",
              border: "none",
            }}
          >
            Edit
          </Button>
          <br />
          <Button
            style={{
              color: "black",
              backgroundColor: "#FFFEFE",
              opacity: ".7",
              border: "none",
            }}
          >
            Delete
          </Button>
          <br />
        </Card>
        <Card
          style={{
            width: "20%",
            height: "60%",
            textAlign: "center",
            margin: "5%",
            backgroundColor: "#F17D2A",
            opacity: ".9",
          }}
          body
        >
          <CardTitle tag="h5">Character 3</CardTitle>
          <br />
          <Button
            style={{
              color: "black",
              backgroundColor: "#FFFEFE",
              opacity: ".7",
              border: "none",
            }}
          >
            Edit
          </Button>
          <br />
          <Button
            style={{
              color: "black",
              backgroundColor: "#FFFEFE",
              opacity: ".7",
              border: "none",
            }}
          >
            Delete
          </Button>
          <br />
        </Card>
      </Row>
    </div>
  );
};

export default Account;
