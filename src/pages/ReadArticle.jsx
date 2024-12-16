import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticlesById } from '../apis'


const ReadArticle = () => {
    const margins = {marginTop: 70,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
    const [article, setArticle] = useState(null)
    const {articleId} = useParams()
    useEffect(()=> {
        if (Number.isInteger(Number(articleId))) {
            getArticlesById(Number(articleId)).then((response)=> {
                console.log(response)
                setArticle(response)
            })
        }
        else {
            return (<h2>Invalid Id</h2>)
        }
    }, [])

    if (article === null) {
        return (<h2>Loading</h2>)
    }

    return (
        <div style={margins}>
            <p>Date Published: {article.created_at.split("T")[0]}</p>
            <h4>Topic: {article.topic}</h4>
            <h2>{article.title}</h2>
            <h3>By {article.author}</h3>
            <p>{<i className="fa-solid fa-thumbs-up" id="thumbs"></i>}{article.votes}</p>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <p>Comments: {article.comment_count}</p>
        </div>
    )
}

export default ReadArticle
