import React from 'react'
import { deleteArticleComment } from '../apis'

const CommentCard = ({articleComment, commentId, onDeleteComment }) => {
    function deleteComment(e) {
      e.preventDefault
      console.log(commentId)
      deleteArticleComment(Number(commentId)).then((response)=> {
        console.log("successful deletion with response", response)
        onDeleteComment(commentId)
      }).catch((err)=> {
        console.log("ERROR:", err)
        alert("Error deleting comment. Please try again")
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
