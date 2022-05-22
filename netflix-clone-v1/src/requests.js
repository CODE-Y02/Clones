import APIKEY from "./privateApi";

const requests = {
  fetchNetflixOrignals: `discover/tv?api_key=${APIKEY}&with_networks=213

    `,
  fetchTrendingTv: `trending/tv/day?api_key=${APIKEY}`,
  fetchTrendingMovie: `trending/movie/day?api_key=${APIKEY}`,
  fetchTrending: `trending/all/day?api_key=${APIKEY}`,
  fetchTopRatedMovie: `movie/top_rated?api_key=${APIKEY}`,
  fetchTopRatedTV: `tv/top_rated?api_key=${APIKEY}`,
};

export default requests;
