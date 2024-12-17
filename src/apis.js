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
export {getArticles, getArticlesById, getCommentsByArticleId}