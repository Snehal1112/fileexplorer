import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NavHeader from "./NavHeader";
import NavItem from "./NavItem";
import { getFoldersList } from "../../actions/ListFoldersAction";

import "./NavigationSideBar.scss";

class NavigationSideBar extends PureComponent {
  componentDidMount() {
    this.props.getFoldersList();
  }

  render() {
    const { folders } = this.props;
    return (
      <nav id="sidebar">
        <NavHeader />
        <NavItem {...this.props} />
      </nav>
    );
  }
}

NavigationSideBar.defaultProps = {
  folders: []
};

const mapStateToProps = state => ({
  folders: state.folders.items
});

export default connect(
  mapStateToProps,
  { getFoldersList }
)(NavigationSideBar);
