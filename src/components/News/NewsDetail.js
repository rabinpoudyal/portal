import React, { Component } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button
} from "@material-ui/core";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {
        title: "",
        urlToImage: "",
        description: "",
        author: "",
        url: ""
      }
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=" +
      this.props.match.params.id +
      "&apiKey=33d98c664d634ddca125eb755fedc331";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ news: data.articles[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Grid xs={12}>
        <Card>
          <Typography
            color="primary"
            component="h2"
            variant="headline"
            align="center"
            gutterBottom
            style={{ marginTop: "3%" }}
          >
            {this.state.news.title}
          </Typography>
          <CardMedia
            image={this.state.news.urlToImage}
            style={{ height: "50px", paddingTop: "56%" }}
          />
          <CardContent>
            <Typography
              color="primary"
              component="h2"
              variant="headline"
              align="center"
              gutterBottom
              style={{ marginTop: "3%" }}
            >
              {this.state.news.description}
            </Typography>
            <Typography
              color="inherit"
              component="h2"
              variant="headline"
              align="center"
              gutterBottom
              style={{ marginTop: "3%" }}
            >
              Author: {this.state.news.author}
            </Typography>
            <hr />
            <Typography>{this.state.news.content}</Typography>
          </CardContent>
        </Card>
        <Grid item style={{ textAlign: "center", padding: "30px" }}>
          <Button
            color="primary"
            variant="contained"
            href={this.state.news.url}
            target="_blank"
          >
            Redirect me to news site
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default NewsDetail;
