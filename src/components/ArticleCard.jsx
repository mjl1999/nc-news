import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
  return (
    <div className="article-card">
  <Link to={`/articles/${article.article_id}`}>
    <img src={article.article_img_url || 'https://via.placeholder.com/300x200'} alt={article.title} />
    <div className="article-content">
      <h4>Topic: {article.topic}</h4>
      <h2>{article.title}</h2>
      <h3>By {article.author}</h3>
      <p>
        <i className="fa-solid fa-thumbs-up" id="thumbs"></i> {article.votes}
      </p>
      <p>Comments: {article.comment_count}</p>
      <p>Date Published: {article.created_at.split('T')[0]}</p>
    </div>
  </Link>
</div>
  
  )
}

export default ArticleCard
