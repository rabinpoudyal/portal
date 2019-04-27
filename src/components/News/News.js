import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import NewSingle from "./NewSingle";
import NewsForm from "./Form";
import Error from "../layouts/error";
import data from "../../data";

class News extends Component {
  state = {
    news: [],
    errors: []
  };

  fetchNews = (country, category, query) => {
    console.log(query);
    console.log(country);
    console.log(category);

    const url =
      "https://newsapi.org/v2/top-headlines?country=" +
      `${country}` +
      "&category=" +
      `${category}` +
      "&q=" +
      `${query}` +
      "&apiKey=33d98c664d634ddca125eb755fedc331";
    if ((country.length > 0 && category.length > 0) || query.length > 2) {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ news: data.articles });
        })
        .catch(err => {
          this.setState({ news: data.articles });
        });
    }
  };

  componentDidMount() {
    this.fetchNews("us", "general", "");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.news !== this.state.news;
  }

  renderItems() {
    return this.state.news.map(item => (
      <Grid item md={4}>
        <NewSingle key={item.url} item={item} />
      </Grid>
    ));
  }
  render() {
    return (
      <Grid container spacing={16} style={{ padding: 24 }}>
        <NewsForm fetchNews={this.fetchNews} />
        {/* <Grid item xs={12} style={{ textAlign: "center" }}>
          <CircularProgress size={50} />
        </Grid> */}
        {this.state.news.length > 0 ? this.renderItems() : <Error />}
      </Grid>
    );
  }
}

export default News;
