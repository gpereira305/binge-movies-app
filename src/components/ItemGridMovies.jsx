import React from "react";
import { Link } from "@reach/router";
import apiConfig from "../api/config";
import { category } from "../api/tmdbApi";

const ItemGridMovies = (props) => {
  const item = props.item;
  const link = `/${category[props.category]}/${item.id}`;
  const bg = apiConfig.w500Img(item?.poster_path || item?.backdrop_path);

  return (
    <Link to={link}>
      <div style={{ backgroundImage: `url(${bg})` }} className="grid__image">
        <span title="Média de valiações">{item?.vote_average || "???"}</span>

        <div className="grid__image--info">
          <p>{item?.title || item?.name}</p>
          <small>
            {props.category === "movie"
              ? item.release_date?.split("-").reverse().join("/") || ""
              : item.first_air_date?.split("-").reverse().join("/") || ""}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default ItemGridMovies;
