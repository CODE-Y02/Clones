import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_header">
          <div className="home_header_right">
            {/* link -> Gmail */}
            <Link to="/Gmail">Gmail</Link>

            <Link to="/Gmail">Images</Link>

            {/* link -> Images */}

            {/* icon */}
            <span className="material-symbols-outlined header_icon">apps</span>

            {/* butn */}
            <Link to="/Gmail" className="header_btn">
              <Button variant="contained">Sign in</Button>
            </Link>
          </div>
        </div>
        <div className="home_body">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google search logo"
            className="home__logo"
          />
          <div className="search__container">
            {/* <Search/> ---> reusable component */}
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
