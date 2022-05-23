import "./App.css";

import requests from "../requests";
// import Banner from "./Banner";
import Nav from "./Nav";
import React, { Suspense } from "react";

//const OtherComponent = React.lazy(() => import('./OtherComponent'));
// import Row from "./Row";
const Row = React.lazy(() => import("./Row"));
const Banner = React.lazy(() => import("./Banner"));

function App() {
  return (
    <div className="App">
      {/* nav */}
      <Nav />
      <Suspense fallback={<div></div>}>
        {/* banner */}
        <Banner />

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
      </Suspense>
    </div>
  );
}

export default App;
