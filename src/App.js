import React, { useState } from 'react';
import Input from './components/container/input/input';
import Articles from './components/container/articles/articles';
import ArticleContent from './components/container/articlecontent/articleContent';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSearch = (results) => {
    setArticles(results);
    setSelectedArticle(null);
  }

  const handleSelect = (article) => {
    setSelectedArticle(article);
  }

  return (
    <>
      <Input onSearch={handleSearch} />
      <Articles articles={articles} onSelect={handleSelect} />
      {selectedArticle && <ArticleContent article={selectedArticle} />}
    </>
  );
}

export default App;