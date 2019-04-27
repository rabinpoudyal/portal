import React from "react";
import Typography from "@material-ui/core/Typography";

import Header from "./layouts/header";
import News from "./News/News";
import NewsDetail from "./News/NewsDetail";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/news/:id" render={props => <NewsDetail {...props} />} />
        <Route path="/news" exact component={News} />
        <Route path="/" exact component={News} />
      </BrowserRouter>
    </div>
  );
}

export default App;
