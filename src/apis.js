import axios from "axios";

const api = axios.create({
  baseURL: "https://mjl1999s-northern-news.onrender.com/",
});

const getArticles = () => {
    return api.get("/api/articles").then((response) => {
        console.log(response.data.allArticles)
        return response.data.allArticles;
    });
  };

const getArticlesById = (id) => {
    return api.get(`/api/articles/${id}`).then((response) => {
        console.log(response.data)
        return response.data.chosenArticle;
    });
  };

export {getArticles, getArticlesById}