import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import NewSingle from "./NewSingle";
import NewsDetail from "./NewsDetail";
import NewsForm from "./Form";
import Error from "../layouts/error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      errors: []
    };
  }

  fetchNews = (country, category) => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=" +
      `${country}` +
      "&category=" +
      `${category}` +
      "&apiKey=33d98c664d634ddca125eb755fedc331";
    //this.apiCall = setTimeout(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(err => {
        console.log(err);
      });
    //}, 1000);
    console.log(this.apiCall);
  };

  componentDidMount() {
    this.fetchNews("us", "technology");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.news !== this.state.news;
  }

  componentWillUnmount() {
    //clearInterval(this.apiCall);
  }

  renderItems() {
    return this.state.news.map(item => (
      <Grid item md={4}>
        <NewSingle key={item.url} item={item} />
      </Grid>
    ));
  }
  render() {
    console.log(this.state.errors);
    return (
      <Grid container spacing={16} style={{ padding: 24 }}>
        <NewsForm fetchNews={this.fetchNews} />
        {/* {this.state.news.length === 0 && <CircularProgress size={50} />}
        {this.state.errors.size > 0 && <Error errors={this.state.errors} />} */}
        {this.renderItems()}
      </Grid>
    );
  }
}

export default News;
