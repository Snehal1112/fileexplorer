import React, { PureComponent } from "react";
import Icon from "../../utils/icons";
import { constants } from "../../constants";
class NavItem extends PureComponent {
  onClickMenu(hasSubmenu, event) {
    if (hasSubmenu) {
      const target = event.currentTarget;
      const el = target.parentElement.querySelector("ul");
      if (el) {
        el.classList.toggle("closed");
      }
    }
    this.props.onSelectedItem(event.currentTarget.dataset.id);
  }

  render() {
    const { folders: menu } = this.props;
    console.log(this.props);
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
    const createMenu = (menu, isSubMenu) => {
      return (
        <ul className={isSubMenu ? "dropdown-toggle" : ""}>
          {menu.map((item, index) => {
            const hasSubFolder = hasSubFolders(item);
            // Create li only for the folder items.
            return item.type === constants.FOLDER ? (
              <li key={`${item.path}/${item.title}`}>
                {/* TODO: use A tag insted of div */}
                <div
                  data-id={`${item.path}/${item.title}`}
                  onClick={this.onClickMenu.bind(this, item.hasSubmenu)}
                >
                  <span>{item.title}</span>
                  {// Show icon if menu item has sub folder(s).
                  hasSubFolder ? <Icon icon="downarrow" width={25} /> : ""}
                </div>
                {hasSubFolder ? createMenu(item.submenu, item.hasSubmenu) : ""}
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
