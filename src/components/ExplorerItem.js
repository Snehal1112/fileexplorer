import React, { Component } from "react";
import { constants } from "../constants";
import classNames from "classnames";
import Folder from "../images/folder.png";
import File from "../images/file.png";
import Group from "../images/group.png";
import "./ExplorerItem.scss";

class ExplorerItem extends Component {
  render() {
    const { type, title: name } = this.props;
    const getImage = imgType => {
      switch (imgType) {
        case constants.FOLDER:
          return Folder;
        case constants.FILE:
          return File;
        default:
          return Group;
      }
    };
    const imgClass = classNames({
      "folder-image": constants.FOLDER === type,
      "create-item-img": constants.CREATE_NEW === type
    });
    return (
      <div className="item-wrapper" onClick={() => console.log(this.props)}>
        <div className="item">
          <img className={imgClass} src={getImage(type)} alt="ExplorerItem" />
          <span
            className={type === constants.FOLDER ? "folder-name" : "file-name"}
          >
            {name}
          </span>
          {type === constants.FILE ? (
            <span className="extention">{`.${name.split(".").pop()}`}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default ExplorerItem;
