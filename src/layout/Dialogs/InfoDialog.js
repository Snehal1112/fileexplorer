import React, { Component } from "react";
import { constants } from "../../constants";
import classNames from "classnames";

import File from "../../images/file.png";
import Folder from "../../images/folder.png";
import Icon from "../../utils/icons";
import "./InfoDialog.scss";

const style = {
  dialog: {
    background: `#fff`,
    border: `1px solid rgba(221,224,228,0.70)`,
    boxShadow: `0px 16px 64px 0px rgba(0, 0, 0, 0.08)`,
    borderRadius: 8,
    width: 316,
    height: 395,
    position: "absolute",
    left: `50%`,
    margin: "auto",
    marginLeft: -158,
    top: `50%`,
    marginTop: -197,
    justifyContent: "center",
    textAlign: "center",
    padding: 25,
    fontSize: 16
  },

  title: {
    fontSize: 18,
    color: "#2F363F",
    letterSpacing: 0
  },

  closeIcon: {
    position: "absolute",
    right: 0,
    opacity: 0.5,
    cursor: "pointer"
  },

  icon: {
    marginTop: 32,
    padding: 10,
    marginBottom: 25
  },
  label: {
    color: "#2F363F",
    textAlign: "right"
  },
  value: {
    color: "#81878C",
    paddingLeft: 10,
    textAlign: "left"
  },
  infoContainer: {
    height: 40
  }
};

class InfoDialog extends Component {
  formateDate(date) {
    const postFix = date => {
      if (date > 3 && date < 21) return "th"; // thanks kennebec
      switch (date % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return `${date.getDate()}${postFix(
      date.getDate()
    )} ${date.toLocaleDateString("en", {
      month: "short"
    })}, ${date.getFullYear()}`;
  }
  render() {
    console.log(this.props);
    const {
      title,
      closeHandler,
      type,
      size,
      created_by,
      created_date
    } = this.props;

    const getImage = imgType => {
      switch (imgType) {
        case constants.FOLDER:
          return Folder;
        case constants.FILE:
          return File;
        default:
          console.log("invalid folder type ");
      }
    };

    const imgClass = classNames({
      "folder-image": constants.FOLDER === type,
      "create-item-img": constants.CREATE_NEW === type
    });

    return (
      <div style={style.dialog}>
        <div style={{ position: "relative" }}>
          <span style={style.title}>
            {constants.FOLDER ? "Folder" : "File"} info
          </span>
          <div style={{ display: "inline" }} onClick={closeHandler}>
            <Icon icon="close" width={25} style={style.closeIcon} />
          </div>
        </div>
        <div style={style.icon}>
          <img
            className={imgClass ? imgClass : undefined}
            src={getImage(type)}
            alt="ExplorerItem"
          />
        </div>
        <table style={{ width: `100%` }}>
          <tbody>
            <tr style={style.infoContainer}>
              <td style={style.label}>Name:</td>
              <td style={style.value}>{title}</td>
            </tr>
            <tr style={style.infoContainer}>
              <td style={style.label}>Size:</td>
              <td style={style.value}>{size}</td>
            </tr>
            <tr style={style.infoContainer}>
              <td style={style.label}>Creator name:</td>
              <td style={style.value}>{created_by}</td>
            </tr>
            <tr style={style.infoContainer}>
              <td style={style.label}>Creator date:</td>
              <td style={style.value}>{this.formateDate(created_date)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InfoDialog;
