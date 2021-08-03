import React from "react";
import "./account.css";
import { Button } from 'reactstrap';

const Account = () => {
  return (
    <div>
      <h1>Your Account</h1>
      <Button style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#F17D2A",
              opacity: ".9",
              border: "none",
              margin: "10px"
            }} size="lg">
        Your Characters
      </Button>{" "}
      <Button style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#F17D2A",
              opacity: ".9",
              border: "none",
              margin: "10px"
            }} size="lg">
        Edit Characters
      </Button>
      <Button style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#F17D2A",
              opacity: ".9",
              border: "none",
              margin: "10px"
            }} size="lg">
        Delete Characters
      </Button>
    </div>
  );
};

export default Account;
