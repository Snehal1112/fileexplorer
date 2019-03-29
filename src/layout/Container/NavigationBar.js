import React, { Component, Fragment } from "react";
import logo from "../../images/arrow-green-circle.png";
import Icon from "../../utils/icons";

export default class NavigationBar extends Component {
  render() {
    const { path = "root" } = this.props;
    return (
      <nav className="navbar">
        <div className="left-navitems">
          <img src={logo} alt="uparrowe" />
          <div className="navPath">
            {path !== "root" ? (
              <Fragment>
                <span className="path">
                  {`${path
                    .split("/")
                    .splice(0, path.split("/").length - 1)
                    .join(` / `)} / `}
                </span>
                <span className="currentFolder">{path.split("/").pop()}</span>
              </Fragment>
            ) : (
              <span className="currentFolder">{path}</span>
            )}
          </div>
        </div>
        <div className="right-navitems">
          <Icon className="search-icon" icon="search" width={20} />
          <input
            className="searchField"
            type="text"
            placeholder="Search for anything"
          />
        </div>
      </nav>
    );
  }
}
