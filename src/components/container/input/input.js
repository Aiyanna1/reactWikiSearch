import React, { useState } from 'react';
import './input.css'

function Input(props) {
  const { onSearch } = props;
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${query}&origin=*`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const results = data.query.search.map(result => {
          return {
            id: result.pageid,
            title: result.title,
            content: result.snippet
          }
        });
        onSearch(results);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <label className='Form__label'>
        Search Wikipedia:
        <input className='Form__input' type="text" value={query} onChange={handleChange} />
      </label>
      <button className='Form__btn' type="submit">Search</button>
    </form>
  );
}

export default Input;

