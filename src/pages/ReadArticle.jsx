import React from 'react'
import { useParams } from 'react-router-dom'
import CommentCard from '../components/CommentCard'
import { useEffect, useState } from 'react'
import { getArticlesById, getCommentsByArticleId, updateArticleVotes } from '../apis'


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
    const [voteUp, setVoteUp] = useState(0)
    const [voteDown, setVoteDown] = useState(0)
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

    function increaseVote() {
        updateArticleVotes(Number(articleId), +1).catch(()=> {
            setVoteUp((prev)=> {
                return prev - 1
            })
        })
        setVoteUp((prev)=> {
            return prev + 1
        })
    }

    function decreaseVote() {
        updateArticleVotes(Number(articleId), -1).catch(()=> {
            setVoteDown((prev)=> {
                return prev + 1
            })
        })
        setVoteDown((prev)=> {
            return prev - 1
        })
    }

    return (
        <div style={margins}>
            <h3>Date Published: {article.created_at.split("T")[0]}</h3>
            <h3>Topic: {article.topic}</h3>
            <h2>{article.title}</h2>
            <h2>By {article.author}</h2>
            <p>User Votes: {article.votes + voteUp + voteDown}</p>
            <p><i className="fa-solid fa-thumbs-down" id="thumbs" onClick={decreaseVote}></i><i className="fa-solid fa-thumbs-up" id="thumbs" onClick={increaseVote}></i></p>
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
