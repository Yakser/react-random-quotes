import React, { useEffect, useState } from 'react'
import axios from 'axios';
const QuoteBox = () => {

  const [quoteText, setQuoteText] = useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  const onGenerateNewQuote = () => {
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      const data = response.data;
      setQuoteText(data.content);
      setQuoteAuthor(data.originator.name);
    }).catch(function (error) {
      console.error(error);
    });
  }
  const onTweetQuote = (event) => {
    event.preventDefault();
    alert('tweet quote')
  }

  useEffect(onGenerateNewQuote, []);
  return (
    <d
      iv id='quote-box'>
      <blockquote id='text'>
        {quoteText}
      </blockquote>

      <span id='author'>{quoteAuthor}</span>

      <div className="buttons">
        <a id='tweet-quote' onClick={onTweetQuote} className='button'
          href='twitter.com/intent/tweet' target='_blank'>
          Tweet quote
        </a>
        <button id='new-quote' onClick={onGenerateNewQuote} className='button'>
          New quote
        </button>
      </div>
    </d>
  )
}

export default QuoteBox