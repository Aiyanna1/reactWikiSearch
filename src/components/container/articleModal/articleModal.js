import React from 'react';
import { Suspense } from 'react';
import './articleModal.css'

function ArticleModal(props) {
  const { article, onClose } = props;

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal__content' onClick={(event) => event.stopPropagation()}>
        <h2 className='modal__title'>{article.title}</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='modal__body' dangerouslySetInnerHTML={{__html: article.content}}></div>
        </Suspense>
      </div>
    </div>
  );
}

export default ArticleModal;

