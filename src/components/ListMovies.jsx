import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import tmdbApi, { category } from "../api/tmdbApi";
import apiConfig from "../api/config";
import { Button } from "../styles/ButtonStyled";

const ListMovies = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;

          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getAllList();
  }, []);

  return (
    <div className="movie__list">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={1400}
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={3}
        navigation={true}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={apiConfig.w500Img(item.poster_path)}
              alt={item.title}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListMovies;
