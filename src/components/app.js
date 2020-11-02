import { h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Portfolio from "../routes/portfolio";
import Contact from "../routes/contact";
import NotFoundPage from "../routes/notfound";
import Header from "./header";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <NotFoundPage default />
    </Router>
  </div>
);

export default App;
