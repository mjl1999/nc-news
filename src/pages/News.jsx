import React from 'react'
import { useEffect, useState } from 'react'
import { getArticles } from '../apis'
import ArticleCard from '../components/ArticleCard'

const News = () => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        getArticles().then((data) => {
                setLoading(false)
              setArticles(data);
          });

    }, [])
    if (loading === true || articles === null) {
        const margins={
            marginTop: 100,
            textAlign: "center"
        }
        return <h2 style={margins}>Loading...</h2>
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
