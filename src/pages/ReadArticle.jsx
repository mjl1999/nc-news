import React from 'react'
import { useParams } from 'react-router-dom'
import CommentCard from '../components/CommentCard'
import { useEffect, useState } from 'react'
import { getArticlesById, getCommentsByArticleId } from '../apis'


const ReadArticle = () => {
    const margins = {marginTop: 70,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState(null)
    const [showComments, setShowComments] = useState(false)
    const [buttonText, setButtonText] = useState("Show Comments")
    const {articleId} = useParams()

    function changeShowComments(e) {
        e.preventDefault()
        setShowComments(!showComments)
        if (buttonText === "Show Comments") {
            setButtonText("Hide Comments")
        }
        else {
            setButtonText("Show Comments")
        }
    }
    useEffect(()=> {
        if (Number.isInteger(Number(articleId))) {
            getArticlesById(Number(articleId)).then((response)=> {
                setArticle(response)
            })

            getCommentsByArticleId(Number(articleId)).then((response)=> {
                setComments(response)
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
            <h3>Date Published: {article.created_at.split("T")[0]}</h3>
            <h3>Topic: {article.topic}</h3>
            <h2>{article.title}</h2>
            <h2>By {article.author}</h2>
            <p>{<i className="fa-solid fa-thumbs-up" id="thumbs"></i>}{article.votes}</p>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <p>Comments: {article.comment_count}</p>
            <button onClick={changeShowComments}>{buttonText}</button>
            {showComments && comments ? (comments.map((comment)=> {
                return <CommentCard key={comment.comment_id} articleComment={comment}/>
            })): null}
        </div>
    )
} 

export default ReadArticle
