import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
function NewsContent() {
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
      </div>
    </Container>
  );
}

export default NewsContent;
