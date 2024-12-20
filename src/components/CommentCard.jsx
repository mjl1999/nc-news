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
    const styles = {textAlign: "left",
        marginTop: "15px",
        padding: "5px",
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: "#eeeeee",
        border: "1px solid black"
    }
  return (
    <div style={styles}>
        <h4>Posted by: {articleComment.author} | Date Commented: {articleComment.created_at.split("T")[0]} | Likes: {articleComment.votes}</h4>
        <p>{articleComment.body}</p>
         {articleComment.author === "tickle122" ? <button onClick={deleteComment}>Delete</button> : null}
    </div>
  )
}

export default CommentCard
