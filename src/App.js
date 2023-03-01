import React, { useState, Suspense } from 'react';
import Input from './components/container/input/input';
import Articles from './components/container/articles/articles';
import ArticleModal from './components/container/articleModal/articleModal';
import wrapPromise from './components/components/API/wrapPromise';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticlePromise, setSelectedArticlePromise] = useState(null);

  const handleSearch = async (query) => {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${query}&origin=*`);
    const { search } = await response.json();
    setArticles(search);
    setSelectedArticlePromise(null);
  };

  const handleSelect = (article) => {
    setSelectedArticlePromise(
      wrapPromise(fetch(`https://en.wikipedia.org/w/api.php?action=parse&format=json&pageid=${article.pageid}&origin=*`)
        .then(response => response.json())
        .then(data => data.parse))
    );
  };

  return (
    <>
      <Input onSearch={handleSearch} />
      <Suspense fallback={<div>Loading...</div>}>
        <Articles articles={articles} onSelect={handleSelect} />
      </Suspense>
      {selectedArticlePromise && (
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleModal promise={selectedArticlePromise} onClose={() => setSelectedArticlePromise(null)} />
        </Suspense>
      )}
    </>
  );
}

export default App;
