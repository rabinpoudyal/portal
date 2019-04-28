import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const NewSingle = ({ item, index, removeNews }) => (
  <Card>
    <CardActionArea>
      <CardMedia
        image={item.urlToImage}
        style={{ height: 0, paddingTop: "56%" }}
        title={item.source.name}
      />
      <CardContent>
        <EqualHeight>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="card-title"
          >
            {item.title}
          </Typography>
          <hr />
          <Typography component="p" className="news-description">
            {item.description}
          </Typography>
        </EqualHeight>
        <Typography component="p" color="primary">
          Source: {item.source.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        href={item.url}
        target="_blank"
        className="external-link"
      >
        Full Article
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        href={`/news/${item.title}`}
      >
        Learn More
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => {
          removeNews(index);
        }}
      >
        Not Interested
      </Button>
    </CardActions>
  </Card>
);

const EqualHeight = styled.div`
  height: 230px;
`;

export default NewSingle;
