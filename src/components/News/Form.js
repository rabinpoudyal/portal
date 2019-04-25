import React, { Component } from "react";

import {
  Grid,
  TextField,
  MenuItem,
  Button,
  FormGroup
} from "@material-ui/core";

class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      selectedCategory: "",
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

  handleSubmit = () => {
    if (this.state.selectedCountry.length > 0 && this.state.selectedCategory) {
      this.props.fetchNews(
        this.state.selectedCountry,
        this.state.selectedCategory
      );
    }
  };

  render() {
    return (
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <TextField
          id="selectedCountry"
          name="selectedCountry"
          select
          label="Country"
          value={this.state.selectedCountry}
          helperText="Please select country"
          margin="normal"
          onChange={this.handleChange}
        >
          {this.state.availableCountries.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="selectedCategory"
          name="selectedCategory"
          select
          label="Category"
          value={this.state.selectedCategory}
          helperText="Please select category"
          margin="normal"
          onChange={this.handleChange}
        >
          {this.state.availableCategories.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Load News
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default NewsForm;
