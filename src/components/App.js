import React from "react";

import Header from "./layouts/header";
import News from "./News/News";
import NewsDetail from "./News/NewsDetail";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/news/:id" render={props => <NewsDetail {...props} />} />
          <Route path="/news" exact component={News} />
          <Route path="/" exact component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
