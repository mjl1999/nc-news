import React from 'react'
import { useEffect, useState } from 'react'
import { getArticles } from '../apis'
import ArticleCard from '../components/ArticleCard'

const News = () => {
    const [articles, setArticles] = useState(null)
    useEffect(()=> {
        getArticles().then((data) => {
              setArticles(data);
          });

    }, [])
    if (articles === null) {
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
