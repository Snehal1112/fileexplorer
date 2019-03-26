import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import "./Container.scss";
class Container extends Component {
  render() {
    console.log("container:-", this.props);
    return (
      <div id="container">
        <NavigationBar />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  folders: state.folders.items
});

export default connect(
  mapStateToProps,
  {}
)(Container);
