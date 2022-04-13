import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import apiConfig from "../api/config";
import tmdbApi, { category, movieType } from "../api/tmdbApi";
import ModalMovies, { ModalMoviesContent } from "./ModalMovies";
import ButtonMovies, { ButtonMoviesOut } from "./ButtonMovies";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroSlideMovies = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const params = { page: 1 };

      try {
        const response = await tmdbApi.getMoviesList(movieType.now_playing, {
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
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </>
  );
};

const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;

  const background = apiConfig.originalImg(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal__${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videosSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videosSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML =
        "Nenhum trailer disponível!";
    }
    modal.classList.toggle("active");
  };

  return (
    <>
      <br />
      <br />
      <div
        className={`hero-slide__item ${props.className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-slide__item--content container">
          <div className="hero-slide__item--content--info">
            <h2 className="title">{item.title}</h2>
            <small className="overview">{item.overview}</small>
            <div className="btns">
              <ButtonMovies
                onClick={() => history.push(`/movie${item.id}`)}
                title=""
              >
                Ver agora
              </ButtonMovies>

              <ButtonMoviesOut onClick={setModalActive}>
                Ver trailer
              </ButtonMoviesOut>
            </div>
          </div>

          <div className="hero-slide__item--content--poster">
            <img
              src={apiConfig.w500Img(item.poster_path)}
              alt={item.title}
              title={item.title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);
  const handleClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <ModalMovies active={false} id={`modal__${item.id}`}>
      <ModalMoviesContent onClose={handleClose}>
        <iframe ref={iframeRef} width={"100%"} title={"trailer"}></iframe>
      </ModalMoviesContent>
    </ModalMovies>
  );
};

export default HeroSlideMovies;
