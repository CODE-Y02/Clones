import "./Banner.css";

import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";
//above axios is not axios but an instance from axios.js

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
  return (
    <header
      //   this header contain background image random from api
      className="banner"
    >
      <div className="banner_content">
        {/* title */}
        {/* 2 btn */}
        {/* desc */}
      </div>
    </header>
  );
}

export default Banner;
