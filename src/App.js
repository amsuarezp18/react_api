import React, { Component } from "react";
import Form from "./components/Form";
import Delivery from "./components/Delivery";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
//pages
import DeliveryPage from "./pages/delivery";
import NewDeliveryPage from "./pages/new_delivery";
import HomePage from "./pages/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/deliveries" component={DeliveryPage} />
          <Route exact path="/new_delivery" component={NewDeliveryPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
