import React from 'react';
import './searchResult.css'

function SearchResult(props) {
  const { article, onSelect } = props;

  const handleClick = () => {
    onSelect(article);
  }

  const content = article.content.replace(/&quot;/g, '"')
                                   .replace(/&apos;/g, "'")
                                   .replace(/&lt;/g, '<')
                                   .replace(/&gt;/g, '>')
                                   .replace(/&amp;/g, '&')
                                   .replace(/<span class="searchmatch">/g, '<mark>')
                                   .replace(/<\/span>/g, '</mark>');

  return (
    <div className='SearchResult' onClick={handleClick}>
      <h3>{article.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
}

export default SearchResult;

