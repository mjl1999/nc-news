import React from 'react'

const CommentCard = ({articleComment}) => {
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
    </div>
  )
}

export default CommentCard
