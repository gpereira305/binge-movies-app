import React from "react";
import { Link } from "react-router-dom";
import HeroSlideMovies from "../components/HeroSlideMovies";
import ListMovies from "../components/ListMovies";
import { Button } from "../styles/ButtonStyled";
import { ContainerMovies } from "../styles/GlobalStyle";

import { category, movieType } from "../api/tmdbApi";

const HomeMovies = () => {
  return (
    <>
      <HeroSlideMovies />
      <ContainerMovies>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <br />
          </div>
          <div className="trending__movies">
            <h2>Estreias </h2>
            <Link to={"/movies"}>
              <Button className="btn__outlined">Ver mais</Button>
            </Link>
          </div>
          <ListMovies category={category.movie} type={movieType.upcoming} />

          <div>
            <div className="trending__movies">
              <h2>Populares</h2>
              <Link to={"/movies"}>
                <Button className="btn__outlined">Ver mais</Button>
              </Link>
            </div>
            <ListMovies category={category.movie} type={movieType.popular} />
          </div>

          <div>
            <div className="trending__movies">
              <h2>Bem avaliados</h2>
              <Link to={"/movies"}>
                <Button className="btn__outlined">Ver mais</Button>
              </Link>
            </div>
            <ListMovies category={category.movie} type={movieType.top_rated} />
          </div>
        </div>
      </ContainerMovies>
    </>
  );
};

export default HomeMovies;
