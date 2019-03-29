import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import "./Container.scss";
import FileExplorer from "./FileExplorer";
class Container extends Component {
  render() {
    const { selectedPath } = this.props;
    return (
      <div id="container">
        <NavigationBar path={selectedPath} />
        <FileExplorer />
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
