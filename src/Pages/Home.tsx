import React from "react";
import "./Style/Home.css";
const CardNews = require("../static/CardNews.js")[0];
const { firstCardNews, secondCardNews } = CardNews;

function Home(): JSX.Element {
  return (
    <>
      <div className="home_body">
        <div className="card-news">
          {firstCardNews.map((card: any, id: number) => (
            <img key={id} src={card} alt="img" />
          ))}
        </div>
        <div className="card-news">
          {secondCardNews.map((card: any, id: number) => (
            <img key={id} src={card} alt="img" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
