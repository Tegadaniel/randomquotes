import React, { useState, useEffect } from 'react';
import axios from 'axios';


const getRandomNum = () => {
  return Math.floor(Math.random() * 999 + 1);
}

function RandomQuotes() {
  const [quotes, setQuotes] = useState('');
  const [randomNum, setRandomNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const changeQuote = () => {
    const num = getRandomNum();
    setRandomNum(num);
  }
  const getQuote = () => {
    setLoading(true);
  }

  useEffect(() => {

    const apiUrl = 'https://type.fit/api/quotes';
    axios.get(apiUrl).then((results) => {
      const responses = results.data[randomNum];
      console.log(responses)
      setQuotes(responses)
    })

  }, [randomNum]);

  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="Container">
          <a href="#" className="navbar-brand">RandomQuotes</a>
        </div>
      </nav>
      {loading ?
        <div className="container card card-body lead text-center">
          
          <span>Random Quotes: {quotes.text} </span>

          <span>Author: {quotes.author} </span>
          <br />
          <button className="btn btn-primary  border-3" onClick={changeQuote}>Click</button>
        </div> : <button className="btn btn-dark border-3" onClick={getQuote}> Click me to fetch quotes</button>
      }
    </>
  );
}

export default RandomQuotes;