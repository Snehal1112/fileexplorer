import React, { Component } from "react";
import { constants } from "../../constants";
import ExplorerItem from "../../components/ExplorerItem";
import "./FileExplorer.scss";

class FileExplorer extends Component {
  render() {
    const { folders, folderPath } = this.props;

    const getFolders = (path, folders) => {
      if (path === constants.RootFolder) {
        return folders;
      }

      for (let folder of folders) {
        if (path.indexOf(folder.path) === 0) {
          if (path === `${folder.path}/${folder.title}`) {
            return folder.hasSubmenu ? folder.submenu : [];
          }
          if (folder.hasSubmenu) {
            return getFolders(path, folder.submenu);
          }
        }
      }
    };
    return (
      <div className="container">
        {getFolders(folderPath, folders).map((item, index) => {
          return <ExplorerItem key={index} {...item} />;
        })}
        <ExplorerItem
          {...{
            hasSubmenu: false,
            title: null,
            type: constants.CREATE_NEW,
            path: "root"
          }}
        />
      </div>
    );
  }
}
export default FileExplorer;
