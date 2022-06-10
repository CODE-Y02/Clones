import React from "react";
import "./NewsCard.css";



function NewsCard({ newsItem }) {
  // console.log(newsItem);

  const fullDate = new Date(newsItem.publishedAt);

  let date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;
  // console.log(date);
  return (
    
     


        <div className="newsCard">
        {/* img */}
      
       
        <img
          src={
            newsItem.urlToImage
              ? newsItem.urlToImage
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={newsItem.title}
          className="newsImg"
        />
        {/* text */}
        <div className="newsText-Wrap">
          <div className="newsText">
            <span className="newsTitle">{newsItem.title}</span>{" "}
            <span className="author">
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                {/* {newsItem.author} */} <b>short</b>
              </a>
              <span className="muted">
                {" "}
                by {newsItem.author ? newsItem.author : "unknown"}/
                {` ${
                  time
                    ? `${hour - 12}${date[4].substring(2, 5)} pm`
                    : `${hour}${date[4].substring(2, 5)} am`
                }  on ${date[2]} ${date[1]} ${date[3]}, ${date[0]}`}
              </span>
            </span>
          </div>
          <div className="newsText-bottom">
            <div className="description">{newsItem.description}</div>
            <span className="readmore">
              read more at{" "}
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                <b>{newsItem.source.name}</b>
              </a>
            </span>
          </div>
        </div>
      </div>
      
    

   
  );
}

export default NewsCard;
