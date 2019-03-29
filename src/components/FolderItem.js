import React from "react";
import "./items.scss";
import Folder from "../images/folder.png";

const FolderItem = props => {
  const { name } = props;
  return (
    <div className="item-wrapper">
      <div className="item">
        <img className="folder-image" src={Folder} alt="Folder" />
        <span className="folder-name">{name}</span>
      </div>
    </div>
  );
};

export default FolderItem;
