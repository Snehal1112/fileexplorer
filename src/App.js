import React, { Component } from "react";
import NavigationSideBar from "./layout/Navigation/NavigationSideBar";
import Container from "./layout/Container/Container";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.scss";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <NavigationSideBar />
          <Container {...this.state} />
        </div>
      </Provider>
    );
  }
}

export default App;
