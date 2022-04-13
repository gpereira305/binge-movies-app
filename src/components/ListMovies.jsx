/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CardMovies from "./CardMovies";
import tmdbApi, { category } from "../api/tmdbApi";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        // autoplay={{ delay: 5000 }}
        // loop={true}
        speed={1400}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        navigation={true}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <CardMovies item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListMovies;
