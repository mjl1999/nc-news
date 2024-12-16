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

export {getArticles}