import React from 'react';
import './articles.css';
import SearchResult from '../searchResult/searchResult';

function Articles(props) {
  const { articles, onSelect } = props;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <SearchResult article={article} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}

export default Articles;