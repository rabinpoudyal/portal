import React, { Component } from "react";

import NewSingle from "./NewSingle";
import NewsForm from "./Form";
import Error from "../layouts/error";
import data from "../../data";

import { Grid } from "@material-ui/core";

class News extends Component {
  state = {
    news: [],
    errors: []
  };

  fetchNews = (country, category, query) => {
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
    this.fetchNews("us", "technology", "");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.news !== this.state.news;
  }

  removeNews = index => {
    let allNews = [...this.state.news];
    if (index !== -1) {
      allNews.splice(index, 1);
      this.setState({
        news: allNews
      });
    }
  };

  renderItems() {
    return this.state.news.map((item, index) => (
      <Grid item md={4} key={index}>
        <NewSingle
          key={index}
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
