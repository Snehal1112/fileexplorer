import React, { Component } from "react";
import FileItem from "../../components/FileItem";
import FolderItem from "../../components/FolderItem";
import "./FileExplorer.scss";

class FileExplorer extends Component {
  render() {
    return (
      <div className="container">
        <FileItem name={"Snehal.html"} />
        <FolderItem name={"snehal"} />
      </div>
    );
  }
}
export default FileExplorer;
