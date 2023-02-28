import './articleContent.css'

function ArticleContent(props) {
    const { article } = props;
  
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    );
  }

export default ArticleContent;
  