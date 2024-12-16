import React from 'react'
import { useEffect, useState } from 'react'
import { getArticles } from '../apis'
import ArticleCard from '../components/ArticleCard'

const News = () => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        setLoading(true)
        getArticles().then((data) => {
              setArticles(data);
              setLoading(false)
          });

    }, [])
    if (loading) {
        return (<h2>Loading</h2>)
    }

    return (
        <div className='article-container'>
      {
        articles.map((articleObj)=> {
            return <ArticleCard key={articleObj.article_id} article={articleObj}/>
        }) 
                
    }
    </div>
    )
}

export default News
