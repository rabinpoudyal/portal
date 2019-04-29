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
        url: "",
        content: ""
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
        if (data.articles[0]) {
          this.setState({ news: data.articles[0] });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {
      title,
      urlToImage,
      url,
      description,
      author,
      content
    } = this.state.news;
    return (
      <Grid item xs={12}>
        <Card>
          <Typography
            color="primary"
            component="h2"
            variant="headline"
            align="center"
            gutterBottom
            style={{ marginTop: "3%" }}
          >
            {title || "no title"}
          </Typography>
          <CardMedia
            image={urlToImage}
            src="image"
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
              {description}
            </Typography>
            <Typography
              color="inherit"
              component="h2"
              variant="headline"
              align="center"
              gutterBottom
              style={{ marginTop: "3%" }}
            >
              Author: {author}
            </Typography>
            <hr />
            <Typography>{content}</Typography>
          </CardContent>
        </Card>
        <Grid item style={{ textAlign: "center", padding: "30px" }}>
          <Button
            color="primary"
            variant="contained"
            href={url}
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
