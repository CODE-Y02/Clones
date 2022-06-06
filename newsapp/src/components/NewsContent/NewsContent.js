import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import NewsCard from "../NewsCard/NewsCard";
function NewsContent({ newsResults, newsArray }) {
  return (
    <Container
      maxWidth="md"
      // style={{ backgroundColor: "greenyellow" }}
    >
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img src={appstore} alt="app-store" />
          <img src={playstore} alt="play-store" />
        </div>

        {/* this carde will be dynamically rendered */}
        {newsArray ? (
          newsArray.map((newsItem) => (
            <NewsCard
              newsItem={newsItem}
              key={`${newsItem.title}-${Date.now()}`}
            />
          ))
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        <button className="loadMore">Load More</button>
      </div>
    </Container>
  );
}

export default NewsContent;
