import React, { Component } from "react";
import NavigationSideBar from "./layout/Navigation/NavigationSideBar";
import Container from "./layout/Container/Container";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPath: undefined
    };
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(selectedPath) {
    this.setState({ selectedPath });
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <NavigationSideBar onSelectedItem={this.onSelectItem} />
          <Container {...this.state} />
        </div>
      </Provider>
    );
  }
}

export default App;
