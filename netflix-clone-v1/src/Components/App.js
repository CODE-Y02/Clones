import "./App.css";
import Row from "./Row";
import requests from "../requests";

function App() {
  return (
    <div className="App">
      <h1>hay its netflix clone</h1>
      <Row
        title="NETFLIX ORIGNALS"
        // isLargeRow=true by default
        isLargeRow
        fetchUrl={requests.fetchNetflixOrignals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovie} />
      <Row title="Trending Tv" fetchUrl={requests.fetchTrendingTv} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovie} />
      <Row title="Top Rated Tv" fetchUrl={requests.fetchTopRatedTV} />
    </div>
  );
}

export default App;
