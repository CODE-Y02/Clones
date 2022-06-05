import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";

import apiKey from "./data/config";
const My_COUNTRY = "in";
function App() {
  const [category, setCategory] = useState("general");

  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  // const fetchData = async () => {
  //   await fetch(
  //     "https://newsapi.org/v2/top-headlines?category=science&apiKey=api---key"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  // above is example of fetch using  AJAX and below is using axios
  // `https://newsapi.org/v2/top-headlines?&country=${My_COUNTRY}&category=${category}&apiKey=${apiKey}`

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${My_COUNTRY}&category=${category}&apiKey=${apiKey}`
      );
      // console.log(news.data);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    console.log(category);
    // fetchData();
  }, [category, newsResults]);

  console.log(newsArray);
  console.log(newsResults);
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent />
      <Footer />
    </div>
  );
}

export default App;
