import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import apiConfig from "../api/config";
import tmdbApi, { category, movieType } from "../api/tmdbApi";
// import { ContainerMovies } from "../styles/GlobalStyle";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import { Button } from "../styles/ButtonStyled";
import { ButtonMoviesOut } from "./ButtonMovies";

const HeroSlideMovies = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const params = { page: 1 };

      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, []);

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        autoplay={{ delay: 5000 }}
        loop={true}
        parallax={true}
        speed={1200}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSliderItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const HeroSliderItem = (props) => {
  let history = useHistory();

  const item = props.item;
  const background = apiConfig.w500Img(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div style={{ backgroundImage: `url${background}`, position: "relative" }}>
      <div>
        <div>
          <img
            src={apiConfig.originalImg(item.backdrop_path)}
            alt={item.title}
            title={item.title}
            style={{ width: "100%" }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "0%",
              padding: "10px 30px",
              background:
                "linear-gradient(180deg, rgba(0,0,5,0.036852240896358524) 0%, rgba(0,0,0,0.7511379551820728) 23%, rgba(0,0,0,1) 59%, rgba(0,0,0,1) 85%)",
              right: 0,
              minHeight: "50vh",
              left: 0,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ fontWeight: "200" }}> {item.title}</h2>
            <br />
            <div style={{ maxWidth: "70%" }}>
              <small style={{ fontWeight: "300" }}>{item.overview}</small>
            </div>
            <br />

            <div
              style={{
                width: "20%",
                minWidth: "300px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button onClick={() => history.push(`/movie/${item.id}`)}>
                Ver agora
              </Button>
              <ButtonMoviesOut onClick={() => console.log("trailer")}>
                Ver trailer
              </ButtonMoviesOut>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideMovies;
