import React, { Component } from "react";
import ContextItem from "../../components/ContextItem";
import ContextMenu from "../../components/ContextMenu";
import ExplorerItem from "../../components/ExplorerItem";
import { constants } from "../../constants";
import "./FileExplorer.scss";
import Dialog from "../Dialogs/Dialog";
import InfoDialog from "../Dialogs/InfoDialog";
class FileExplorer extends Component {
  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
    this.state = {
      showContextMenu: false,
      position: {
        x: 0,
        y: 0
      },
      selectedItem: undefined,
      showInfoDialog: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.onClickOpen = this.onClickOpen.bind(this);
    this.onClickGetInfo = this.onClickGetInfo.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  handleClick(event) {
    const { showContextMenu } = this.state;
    const wasOutside = event.target.contains(this.root);
    if (wasOutside && showContextMenu) {
      this.setState({ showContextMenu: false });
    }
  }
  onClickItem(event, item) {
    if (event.buttons === 2) {
      event.preventDefault();
      this.setState({
        selectedItem: item,
        showContextMenu: true,
        position: { x: event.clientX, y: event.clientY }
      });
      return;
    }
    if (item.type === constants.FOLDER) {
      this.props.selectFolder(`${item.path}/${item.title}`);
    }
  }

  onCreateItem(event, item) {
    console.info("new item button clicked");
  }

  onClickOpen() {
    const { selectedItem } = this.state;
    this.props.selectFolder(`${selectedItem.path}/${selectedItem.title}`);
    this.setState({ showContextMenu: false, showInfoDialog: false });
  }

  onClickGetInfo(event) {
    this.setState({ showContextMenu: false, showInfoDialog: true });
  }

  onClickDelete() {
    const { selectedItem } = this.state;
    console.log(selectedItem);
  }

  closeHandler() {
    this.setState({ showInfoDialog: false });
  }

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
      <div className="file-container">
        {getFolders(folderPath, folders).map((item, index) => {
          return (
            <ExplorerItem
              key={index}
              {...item}
              clickHandler={this.onClickItem}
            />
          );
        })}
        <ExplorerItem
          {...{
            hasSubmenu: false,
            title: null,
            type: constants.CREATE_NEW,
            path: "root"
          }}
          clickHandler={this.onCreateItem}
        />
        {this.state.showContextMenu && (
          <ContextMenu
            {...this.state.position}
            refs={ref => {
              this.root = ref;
            }}
          >
            <ContextItem text="Open" handler={this.onClickOpen} />
            <ContextItem text="Get info" handler={this.onClickGetInfo} />
            <ContextItem
              text="Delete"
              handler={this.onClickDelete}
              style={{ color: "#FF5942" }}
            />
          </ContextMenu>
        )}
        {this.state.showInfoDialog && (
          <Dialog>
            <InfoDialog
              {...this.state.selectedItem}
              closeHandler={this.closeHandler}
            />
          </Dialog>
        )}
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }
}

export default FileExplorer;
