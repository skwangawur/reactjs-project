import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Home = () => {
  return (
    <>
      <div className="mt-5 text-center">
        <Button className="bg-warning mx-2">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="tictactoe"
          >
            Tic Tac Toe Game
          </Link>{" "}
        </Button>
        <Button className="bg-warning mx-2">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="quote"
          >
            Quote of The Day
          </Link>
        </Button>
        <Button className="bg-warning">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="contacts-crud"
          >
            CRUD of Contacts
          </Link>
        </Button>
        <h1 style={{ fontSize: "80px", marginTop: "200px" }}>
          Welcome to The Projects :)
        </h1>
      </div>
    </>
  );
};
