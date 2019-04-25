import React from "react";

const NewsDetail = news => (
  <div>
    <h4>{news.title}</h4>
    <p>{news.description}</p>
  </div>
);

export default NewsDetail;
