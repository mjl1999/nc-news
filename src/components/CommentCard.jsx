import React from 'react'
import { deleteArticleComment } from '../apis'
import { useState } from 'react'

const CommentCard = ({articleComment, commentId, onDeleteComment }) => {

    const [isDeleting, setIsDeleting] = useState(false)

    function deleteComment(e) {
      e.preventDefault
      if (isDeleting) {
        return alert("Already deleting comment, please wait")
      }
      setIsDeleting(true)
      deleteArticleComment(commentId).then((response)=> {
        onDeleteComment(commentId)
        setIsDeleting(false)
      }).catch((err)=> {
        setIsDeleting(false)
        alert("Error deleting comment. Please try again later")
      }

      )

    }
 
  return (
    <div className='comment-box'>
        <h4>Posted by: {articleComment.author} | Date Commented: {articleComment.created_at.split("T")[0]} | Likes: {articleComment.votes}</h4>
        <p>{articleComment.body}</p>
         {articleComment.author === "tickle122" ? <button onClick={deleteComment}>Delete</button> : null}
    </div>
  )
}

export default CommentCard
