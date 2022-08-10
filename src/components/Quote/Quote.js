import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quote.css";

export const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(quote);
  const getRandomQuote = async () => {
    const random = Math.floor(Math.random() * 99);
    console.log(random);
    await axios
      .get(`https://famous-quotes4.p.rapidapi.com/random`, {
        params: { category: "all", count: "100" },
        headers: {
          "X-RapidAPI-Key":
            "35944ea00dmsh12c06bc9193709bp1c6617jsn071ee8a8b50a",
          "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        },
      })
      .then((res) => {
        setQuote(res.data[random]);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="quote-container">
        <div className="quote-content">
          <h2 style={{ marginBottom: "40px" }} className="quote-today">
            Get Quote for Today :)
          </h2>
          {loading ? "" : <p>"{quote.text}"</p>}
          {loading ? "" : <h5 className="quote-author">- {quote.author} -</h5>}
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="button-container">
        <button className="quote-button" onClick={() => getRandomQuote()}>
          Get Quote
        </button>
        <button className="quote-button-back">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Back To Home
          </Link>
        </button>
      </div>
    </>
  );
};
