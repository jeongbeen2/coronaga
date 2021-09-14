import React from "react";
import "./Style/Home.css";
const CardNews = require("../static/CardNews.js")[0];
const { firstCardNews, secondCardNews } = CardNews;
function Home() {
  return (
    <>
      <div className="home_body">
        <div className="card-news">
          {firstCardNews.map((card, id) => (
            <img key={id} src={card} alt="img" />
          ))}
        </div>
        <div className="card-news">
          {secondCardNews.map((card, id) => (
            <img key={id} src={card} alt="img" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
