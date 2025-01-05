import React from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import { useEffect, useState } from "react";
import {
  getArticlesById,
  getCommentsByArticleId,
  updateArticleVotes,
  postArticleComment,
} from "../apis";

const ReadArticle = () => {
  const [article, setArticle] = useState(null);
  const [hasBeenLiked, setHasBeenLiked] = useState(false);
  const [hasBeenDisliked, setHasBeenDisliked] = useState(false);
  const [comments, setComments] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [buttonText, setButtonText] = useState("Show Comments");
  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);
  const { articleId } = useParams();
  const [newComment, setNewComment] = useState("");
  const maxCharacters = 1000;

  function handleDeleteComment(deletedCommentId) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
    );
  }

  function changeShowComments() {
    setShowComments(!showComments);
    if (buttonText === "Show Comments") {
      setButtonText("Hide Comments");
    } else {
      setButtonText("Show Comments");
    }
  }
  useEffect(() => {
    if (Number.isInteger(Number(articleId))) {
      getArticlesById(Number(articleId)).then((response) => {
        setArticle(response);
      });

      getCommentsByArticleId(Number(articleId)).then((response) => {
        setComments(response);
      });
    } else {
      return <h2>Invalid Id</h2>;
    }
  }, []);

  if (article === null) {
    return <h2>Loading</h2>;
  }

  function postComment(e) {
    e.preventDefault();
    const newCommentCopy = newComment;
    setNewComment("");
    if (newCommentCopy.trim()) {
      const commentToPost = { username: "tickle122", body: newCommentCopy };
      postArticleComment(Number(articleId), commentToPost)
        .then((postedComment) => {
          setComments((prev) => {
            return [postedComment, ...prev];
          });
          if (!showComments) {
            changeShowComments();
          }
        })
        .catch((error) => {
          alert("Unable to post comment please try again");
          setNewComment(newCommentCopy);
        });
    }
  }

  function increaseVote() {
    if (!hasBeenLiked) {
      setHasBeenLiked(true);
      setHasBeenDisliked(false);
      updateArticleVotes(Number(articleId), +1).catch(() => {
        setVoteUp((prev) => {
          return prev - 1;
        });
      });
      setVoteUp((prev) => {
        return prev + 1;
      });
    }
  }

  function decreaseVote() {
    if (!hasBeenDisliked) {
      setHasBeenLiked(false);
      setHasBeenDisliked(true);
      updateArticleVotes(Number(articleId), -1).catch(() => {
        setVoteDown((prev) => {
          return prev + 1;
        });
      });
      setVoteDown((prev) => {
        return prev - 1;
      });
    }
  }

  return (
    <div
      style={{
        marginTop: 70,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3>Date Published: {article.created_at.split("T")[0]}</h3>
      <h3>Topic: {article.topic}</h3>
      <h2>{article.title}</h2>
      <h2>By {article.author}</h2>
      <p>User Votes: {article.votes + voteUp + voteDown}</p>
      <p>
        <i
          className="fa-solid fa-thumbs-up"
          id="thumbs"
          onClick={increaseVote}
        ></i>
        <i
          className="fa-solid fa-thumbs-down"
          id="thumbs"
          onClick={decreaseVote}
        ></i>
      </p>
      <img
        style={{ height: "400px", width: "600px" }}
        src={article.article_img_url}
      />
      <p
        style={{
          textAlign: "justify",
          marginLeft: "35px",
          marginRight: "35px",
          lineHeight: "40px",
          fontSize: "20px",
        }}
      >
        {article.body}
      </p>
      <p>Comments: {article.comment_count}</p>

      <form onSubmit={postComment}>
        <textarea
          maxLength={maxCharacters}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave your comment..."
          rows="4"
          cols="40"
          value={newComment}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            margin: "0 10px",
          }}
        >
          <p
            style={{
              textAlign: "left",
              paddingLeft: "40px",
              paddingRight: "30px",
              marginTop: "10px",
            }}
          >
            {maxCharacters - newComment.length} characters remaining
          </p>
          <button type="submit">Post Comment</button>
        </div>
      </form>

      <button
        onClick={changeShowComments}
        style={{ padding: "10px 15px", marginTop: "40px" }}
      >
        {buttonText}
      </button>
      {showComments && comments
        ? comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                commentId={comment.comment_id}
                articleComment={comment}
                onDeleteComment={handleDeleteComment}
              />
            );
          })
        : null}
    </div>
  );
};

export default ReadArticle;
