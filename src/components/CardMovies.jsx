import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../api/config";
import { category } from "../api/tmdbApi";

const CardMovies = (props) => {
  const item = props.item;
  const link = `/${category[props.category]}/${item.id}`;
  const bg = apiConfig.w500Img(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie__card" style={{ backgroundImage: `url(${bg})` }}>
        <span title="Média de valiações">{item.vote_average}</span>
        <div className="movie__card--overlay">
          <p>{item.title || item.name}</p>
          <small>
            {item.release_date
              ? item.release_date?.split("-").reverse().join("/")
              : ""}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default CardMovies;
