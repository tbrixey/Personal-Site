import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Portfolio from "../routes/portfolio";
import Contact from "../routes/contact";
import NotFoundPage from "../routes/notfound";
import Header from "./header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
