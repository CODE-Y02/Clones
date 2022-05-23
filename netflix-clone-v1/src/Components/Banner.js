import "./Banner.css";

import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";
//above axios is not axios but an instance from axios.js

const Img_base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);
  //above use state used to get movies for banner using axios

  useEffect(() => {
    const fetchData = async () => {
      const receivedResponse = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        receivedResponse.data.results[
          Math.floor(Math.random() * receivedResponse.data.results.length)
        ]
      );
      return receivedResponse;
    };
    fetchData();
  }, []);

  console.log(movie);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    movie.backdrop_path && (
      <header
        //   this header contain background image random from api
        style={{
          backgroundSize: "cover",
          // cover takes full size of container
          backgroundImage: `url(${Img_base_url}${movie?.backdrop_path})`,
          // movie ? => ? handle when movie is not defind
          backgroundPosition: "center center",
        }}
        className="banner"
      >
        <div className="banner_contents">
          {/* title */}
          <h1 className="banner_title">
            {movie.title || movie.original_name || movie.original_title}
          </h1>
          {/* 2 btn */}
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
          {/* desc */}
          <h1 className="banner_desc">
            {truncateString(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadebottom"></div>
      </header>
    )
  );
}

export default Banner;
