import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TicTacToe.css";

export const TicTacToe = () => {
  const initialCells = Array(9).fill(null);
  const initialSkors = {
    x: 0,
    y: 0,
  };
  const [cells, setCells] = useState(initialCells);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [skors, setSkors] = useState(initialSkors);

  const whoIsTheWinner = (squares) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    patterns.forEach((element) => {
      const [a, b, c] = element;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c] &&
        winner === ""
      ) {
        if (squares[a] === "X") {
          setSkors({ ...skors, x: skors.x + 1 });
        } else {
          setSkors({ ...skors, y: skors.y + 1 });
        }
        setWinner(squares[a]);
      }
      return;
    });
  };

  const handleClick = (num) => {
    const squares = [...cells];
    if (squares[num] !== null) {
      return;
    }

    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }

    whoIsTheWinner(squares);
    setCells(squares);
  };

  const Cell = ({ num }) => {
    return (
      <td className="cell" onClick={() => handleClick(num)}>
        {cells[num]}
      </td>
    );
  };

  return (
    <>
      <div className="top-board">
        <h1>Tic Tac Toe Game</h1>
        <h3>
          Skor X ({skors?.x}) - ({skors?.y}) Skor O
        </h3>
        <p>Turn : {turn}</p>
      </div>
      <div className="container-tictactoe">
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3 className="tictactoe-winner">
          {winner && <>The Winner is {winner}</>}
        </h3>
        <button
          className="tictactoe-button"
          onClick={() => {
            setCells(initialCells);
            setWinner("");
          }}
        >
          Reset Board
        </button>
        <button
          className="tictactoe-button"
          onClick={() => {
            setSkors(initialSkors);
          }}
        >
          Reset Skor
        </button>
        <button className="tictactoe-button">
          <Link style={{ textDecoration: "none", color: "#222" }} to="/">
            Back To Home
          </Link>
        </button>
      </div>
    </>
  );
};
