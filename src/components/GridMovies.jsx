import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../api/tmdbApi";
import { ContainerMovies } from "../styles/GlobalStyle";
import ButtonMovies from "./ButtonMovies";
import ItemGridMovies from "./ItemGridMovies";

const GridMovies = (props) => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};

        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPages(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  return (
    <ContainerMovies>
      <div className="movie__grid">
        {items.map((item, i) => (
          <ItemGridMovies category={props.category} item={item} key={i} />
        ))}
      </div>
    </ContainerMovies>
  );
};

export default GridMovies;
