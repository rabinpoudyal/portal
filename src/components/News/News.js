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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.news !== this.state.news;
  // }

  removeNews = index => {
    let allNews = [...this.state.news];
    if (index !== -1) {
      allNews.splice(index, 1);
      this.setState({
        news: allNews
      });
    }
    console.log(this.state);
  };

  renderItems() {
    return this.state.news.map((item, index) => (
      <Grid item md={4}>
        <NewSingle
          key={item.url}
          item={item}
          index={index}
          removeNews={this.removeNews}
        />
      </Grid>
    ));
  }
  render() {
    return (
      <Grid container spacing={16} style={{ padding: 24 }}>
        <NewsForm fetchNews={this.fetchNews} />
        {this.state.news.length > 0 ? this.renderItems() : <Error />}
      </Grid>
    );
  }
}

export default News;
