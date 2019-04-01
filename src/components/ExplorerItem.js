import classNames from "classnames";
import React, { PureComponent } from "react";
import { constants } from "../constants";
import File from "../images/file.png";
import Folder from "../images/folder.png";
import Group from "../images/group.png";
import "./ExplorerItem.scss";

class ExplorerItem extends PureComponent {
  render() {
    const { type, title: name, clickHandler = () => {} } = this.props;
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
      <div className="item-wrapper">
        <div
          className="item"
          onDoubleClick={event => clickHandler(event, this.props)}
          onContextMenu={event => clickHandler(event, this.props)}
        >
          <img
            className={imgClass ? imgClass : undefined}
            src={getImage(type)}
            alt="ExplorerItem"
          />
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
