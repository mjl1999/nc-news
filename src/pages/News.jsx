import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticles } from '../apis'
import NewsPageNavBar from '../components/NewsPageNavBar'
import ArticleCard from '../components/ArticleCard'

const News = () => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { category } = useParams()  
  useEffect(() => {
    setLoading(true); 
    setError(null)

    getArticles().then((data) => {
      setLoading(false);
      if (category) {
        const filteredArticles = data.filter((article) => article.topic === category);
        setArticles(filteredArticles);
      } else {
        setArticles(data);
      }
    }).catch((err) => {
      setLoading(false);
      setError('Failed to load articles. Please try again.')
    });
  }, [category]);

  if (loading || articles === null) {
    const margins = {
      marginTop: 100,
      textAlign: "center",
    };
    return <h2 style={margins}>Loading...</h2>;
  }

  if (error) {
    const margins = {
      marginTop: 100,
      textAlign: 'center',
      color: 'red',
    };
    return <h2 style={margins}>{error}</h2>;
  }

  return (
    <>
      <NewsPageNavBar />
      <div className="article-container">
        {articles.length > 0 ? (
          articles.map((articleObj) => (
            <ArticleCard key={articleObj.article_id} article={articleObj} />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            No articles found for the "{category}" category.
          </p>
        )}
      </div>
    </>
  );
};

export default News;
