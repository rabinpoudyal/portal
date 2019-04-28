import React, { Component } from "react";
import { countries } from "country-data";

import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  container: {
    flexWrap: "wrap",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "us",
      selectedCategory: "technology",
      queryString: "",
      availableCountries: [
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za"
      ],
      availableCategories: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"
      ]
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    if (
      (this.state.selectedCountry.length > 0 && this.state.selectedCategory) ||
      this.state.queryString.length > 2
    ) {
      this.props.fetchNews(
        this.state.selectedCountry,
        this.state.selectedCategory,
        this.state.queryString
      );
    }
  };

  resetForm = () => {
    this.setState({
      queryString: "",
      selectedCategory: "",
      selectedCountry: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Grid item>
          <TextField
            id="queryString"
            name="queryString"
            label="Search News"
            value={this.state.queryString}
            onChange={this.handleChange}
            margin="normal"
            className={classes.textField}
          />
        </Grid>
        <Grid item>
          <Typography color="primary">
            Or, Select the following parameters
          </Typography>
        </Grid>
        <form className={classes.container}>
          <TextField
            id="selectedCountry"
            name="selectedCountry"
            select
            label="Country"
            value={this.state.selectedCountry}
            margin="normal"
            onChange={this.handleChange}
            className={classes.textField}
          >
            {this.state.availableCountries.map((value, index) => (
              <MenuItem key={index} value={value}>
                {countries[value.toUpperCase()].name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectedCategory"
            name="selectedCategory"
            select
            label="Category"
            value={this.state.selectedCategory}
            margin="normal"
            onChange={this.handleChange}
            className={classes.textField}
          >
            {this.state.availableCategories.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </form>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            style={{ margin: "20px" }}
            className="submit-button"
          >
            Load News
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="reset-button"
            onClick={this.resetForm}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewsForm);
