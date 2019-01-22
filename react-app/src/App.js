import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ViewBox from "../src/components/ViewBox";
import Reducer from "../src/reducers/Universe";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import componentA from "./components/ComponentA";
import componentB from "./components/ComponentB";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
const store = createStore(Reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={ViewBox} />
                <Route path="/componentA" component={componentA} />
                <Route exact path="/componentB" component={componentB} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
