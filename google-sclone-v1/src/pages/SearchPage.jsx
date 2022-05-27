import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";

function SearchPage() {
  // for mor info read it on search .jsx component
  // const [state, dispatch] = useStateValue();
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        {/* this is header */}
        <h1>{term}</h1>
        <h2>{console.log(process.env.REACT_APP_API_KEY)}</h2>
      </div>
      <div className="searchPage__results">{/* here we have results */}</div>
    </div>
  );
}

export default SearchPage;
