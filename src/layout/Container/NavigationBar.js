import React, { Component } from "react";
import logo from "../../images/arrow-green-circle.png";
import Icon from "../../utils/icons";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="left-navitems">
          <img src={logo} />
          <div className="navPath">
            <span className="path">root/movies/</span>
            <span className="currentFolder">inception</span>
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
