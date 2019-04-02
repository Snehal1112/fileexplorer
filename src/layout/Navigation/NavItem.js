import React, { Component } from "react";
import { constants } from "../../constants";
import Icon from "../../utils/icons";

class NavItem extends Component {
  clearSelection() {
    const el = document.querySelector(".active");
    if (el) {
      el.classList.remove("active");
    }
  }
  onClickMenu(hasSubmenu, event) {
    const target = event.currentTarget;
    if (hasSubmenu) {
      const el = target.parentElement.querySelector("ul");
      if (el) {
        el.classList.toggle("closed");
      }
    }
    this.clearSelection();
    target.classList.add("active");
    this.props.selectFolder(target.dataset.id);
  }

  render() {
    const { folders: menu, folderPath } = this.props;
    this.clearSelection();
    const hasSubFolders = item => {
      if (item.hasSubmenu) {
        return item.submenu.some(sub => {
          return sub.type === 1;
        });
      } else if (Array.isArray(item)) {
        return item.some(sub => {
          return sub.type === 1;
        });
      }
      return false;
    };

    // Recursive function call to generate the Side navigation bar.
    const createMenu = (menu, isSubMenu = false, depth = 0) => {
      console.log("menu:-", menu[0].title);
      return (
        <ul className={isSubMenu ? "dropdown-toggle" : "root"}>
          {menu.map(item => {
            const hasSubFolder = hasSubFolders(item);
            // Create li only for the folder items.
            return item.type === constants.FOLDER ? (
              <li key={`${item.path}/${item.title}`}>
                {/* TODO: use A tag insted of div */}
                <div
                  data-id={`${item.path}/${item.title}`}
                  onClick={this.onClickMenu.bind(this, item.hasSubmenu)}
                  style={{ paddingLeft: depth === 0 ? 32 : 32 * depth }}
                  className={
                    `${item.path}/${item.title}` === folderPath
                      ? "active"
                      : undefined
                  }
                >
                  <span>{item.title}</span>
                  {// Show icon if menu item has sub folder(s).
                  hasSubFolder ? <Icon icon="downarrow" width={25} /> : ""}
                </div>
                {hasSubFolder
                  ? createMenu(item.submenu, item.hasSubmenu, ++depth, "sneha")
                  : ""}
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      );
    };

    // TODO: use HOC to make core more distributed
    return menu.length > 0 ? createMenu(menu) : "";
  }
}
export default NavItem;
