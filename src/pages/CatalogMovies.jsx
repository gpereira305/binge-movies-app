import React from "react";
import { useParams } from "react-router-dom";
import { category as cat } from "../api/tmdbApi";
import GridMovies from "../components/GridMovies";

import PageHeaderMovies from "../components/PageHeaderMovies";

const CatalogMovies = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeaderMovies>
        {category === cat.movie ? "Filmes" : "Séries"}
      </PageHeaderMovies>
      <br />
      <div>
        <GridMovies category={category} />
      </div>
    </>
  );
};

export default CatalogMovies;
