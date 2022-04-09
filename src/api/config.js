// const API_KEY = "467520b057249a7e0a457ab0984e2623";
// const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// const BACKDROP_SIZE = "w1280";
// const POSTER_SIZE = "w500";

const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "467520b057249a7e0a457ab0984e2623",
  originalImg: (imgPath) => `http://image.tmdb.org/t/p/original/${imgPath}`,
  w500Img: (imgPath) => `http://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
