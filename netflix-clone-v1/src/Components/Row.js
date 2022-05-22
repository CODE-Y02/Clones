import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
// above asios is not axios its instance , we can rename it exports ,and if not def expo use { exported var/fun}

// img base url https://image.tmdb.org/t/p/original/<<<ImgURL>>
/**tmdb api give <<Imgurl>>
 * and we need to apprnd it in baseimg url
 *
 */

const Img_base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //   useeffect -> runs on condn/variable change or render
  useEffect(() => {
    //   if [], runs when row loads and dont run again

    // internal async fun to fetch data
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);

      return response;
    };
    fetchData();
    console.log(movies);
  }, [fetchUrl]);
  console.log(movies);
  return (
    <>
      <div className="row" key={(title.length * 100) / 158}>
        <h2 className="row-title">{title}</h2>

        {/* container -> poster */}
        <div className="row_posters">
          {movies.map(
            (movieObj) =>
              movieObj.backdrop_path && (
                <img
                  src={
                    Img_base_url +
                    (isLargeRow ? movieObj.poster_path : movieObj.backdrop_path)
                  }
                  alt={
                    movieObj.title ||
                    movieObj.original_name ||
                    movieObj.original_title
                  }
                  key={movieObj.id}
                  className={`row__poster ${isLargeRow && "raw__poster_Large"}`}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Row;
