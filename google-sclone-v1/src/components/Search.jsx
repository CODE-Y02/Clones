import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  // usestatevalue ---> custom hook build in reducer / global store
  // work same as use state --> dispatch --> set action in data layer so that we can change it
  // const [state, dispatch] = useStateValue();
  const [{}, dispatch] = useStateValue();

  // this state is keeping track of text inside input
  const [input, setInput] = useState("");

  // usehistory is feature of react router v5 , it give us browsers history
  // IMP - it simply Redirect us from Home page to search page when we get the input submit
  // also when site first loads it also loads all oyther pages ,.'. they are in browser history we are simply redirecting

  const history = useHistory();

  // this is doing search on btn click
  const search = (e) => {
    e.preventDefault();
    // this prevent def --> prevent running submit when page relods on click

    console.log("hit the submit ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
      // ref reducer --> we are setting term
    });

    // do something with input or searched text ... and come back again
    history.push("/search");
  };
  console.log(input);
  return (
    <form className="search">
      <div className="search_inp">
        <SearchIcon className="search_inpIcon" onClick={search} />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search_inp_mic" />
      </div>
      {
        // if hide btn is false
        !hideButtons ? (
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
        ) : (
          <div className="search__btns ">
            <Button
              variant="outlined"
              // this type  submit ---> made submit action when we click enter >> ONLY work on form
              type="submit"
              onClick={search}
              className="search__hiddenButtons"
            >
              Google Search
            </Button>
            <Button variant="outlined" className="search__hiddenButtons">
              I'm Feeling Lucky
            </Button>
          </div>
        )
      }
    </form>
  );
}

export default Search;
