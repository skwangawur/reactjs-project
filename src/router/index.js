import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { Home } from "../page/Home";
import { TicTacToe } from "../components/TicTacToe/TicTacToe";
import { Quote } from "../components/Quote/Quote";
import { Crud } from "../components/CRUD/Crud";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="quote" element={<Quote />} />
        <Route path="contacts-crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
};
