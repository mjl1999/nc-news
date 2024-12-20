import axios from "axios";

const api = axios.create({
  baseURL: "https://mjl1999s-northern-news.onrender.com/",
});

const getArticles = () => {
    return api.get("/api/articles").then((response) => {
        return response.data.allArticles;
    });
  };

const getArticlesById = (id) => {
    return api.get(`/api/articles/${id}`).then((response) => {
        return response.data.chosenArticle;
    });
  };

const getCommentsByArticleId= (id) => {
  return api.get(`/api/articles/${id}/comments`).then((response) => {
    return response.data.allArticleComments;
});
}


const updateArticleVotes = (articleId, vote) => {
  return api.patch(`/api/articles/${articleId}`, {"inc_votes": vote})
}

const postArticleComment = (articleId, comment) => {
  return api.post(`/api/articles/${articleId}/comments`, comment).then((response)=> {
    return response.data.userComment
  })
}

const deleteArticleComment = (commentId) => {
  return api.delete(`/api/comments/${commentId}`).then((response)=> {
    console.log(response, "has been deleted")
  })
}

export {getArticles, getArticlesById, getCommentsByArticleId, updateArticleVotes, postArticleComment, deleteArticleComment}