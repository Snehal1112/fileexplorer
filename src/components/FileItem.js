import React from "react";
import "./items.scss";
import File from "../images/file.png";

const FileItem = props => {
  const { name } = props;
  return (
    <div className="item-wrapper">
      <div className="item">
        <img className="image" src={File} alt="File" />
        <span className="file-name">{name}</span>
        <span className="extention">{name.split(".").pop()}</span>
      </div>
    </div>
  );
};

export default FileItem;
