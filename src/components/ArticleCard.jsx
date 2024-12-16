import React from 'react'

const ArticleCard = ({article}) => {
  return (
    <div className='article-card'>
        <h4>Topic: {article.topic}</h4>
        <h2>{article.title}</h2>
        <h3>By {article.author}</h3>
        <img src={article.article_img_url}/>
        <p>{<i className="fa-solid fa-thumbs-up" id="thumbs"></i>}{article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Date Published: {article.created_at.split("T")[0]}</p>
    </div>
  
  )
}

export default ArticleCard
