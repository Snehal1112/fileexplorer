import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import { constants } from "../../constants";
import "./Container.scss";
import FileExplorer from "./FileExplorer";

class Container extends Component {
  render() {
    const { folderPath } = this.props;

    return (
      <div id="container">
        <NavigationBar path={folderPath} />
        <FileExplorer {...this.props} />
      </div>
    );
  }
}

Container.defaultProps = {
  folderPath: constants.RootFolder
};

const mapStateToProps = state => ({
  folders: state.folders.items,
  folderPath: state.folder.selected
});

export default connect(
  mapStateToProps,
  {}
)(Container);
