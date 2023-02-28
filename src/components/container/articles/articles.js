import React from 'react'
import './articles.css'

function Articles(props) {
    const { articles } = props;
  
    return (
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    );
  }
  

export default Articles;