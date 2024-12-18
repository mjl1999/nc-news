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
  console.log(comment, "here is the comment", articleId, "here is the articleId", typeof articleId, "here is the type of the article ID")
  return api.post(`/api/articles/${articleId}/comments`, comment).then((response)=> {
    return response.data.userComment
  })
}

export {getArticles, getArticlesById, getCommentsByArticleId, updateArticleVotes, postArticleComment}