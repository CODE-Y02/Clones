import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import "./Search.css";
function Search() {
  return (
    <div className="search">
      <div className="search_inp">
        <SearchIcon className="search_inpIcon" />
        <input type="text" />
        <MicIcon className="search_inp_mic" />
      </div>

      <div className="search__btns">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
