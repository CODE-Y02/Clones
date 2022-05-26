import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import "./Search.css";
function Search() {
  // this state is keeping track of text inside input
  const [input, setInput] = useState("");

  // this is doing search on btn click
  const search = (e) => {
    e.preventDefault();
    // this prevent def --> prevent running submit when page relods on click

    console.log("hit the submit ");
  };
  console.log(input);
  return (
    <form className="search">
      <div className="search_inp">
        <SearchIcon className="search_inpIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search_inp_mic" />
      </div>

      <div className="search__btns">
        <Button
          variant="outlined"
          // this type  submit ---> made submit action when we click enter >> ONLY work on form
          type="submit"
          onClick={search}
        >
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
