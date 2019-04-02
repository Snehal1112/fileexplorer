import { SELECT_FOLDER, DELETE_FOLDER, ADD_ITEM } from "./action";

export const selectFolder = folderPath => dispatch => {
  dispatch({
    type: SELECT_FOLDER,
    payload: folderPath
  });
};

export const moveUp = folderPath => dispatch => {
  //TODO:create common function to reduce code duplication.
  dispatch({
    type: SELECT_FOLDER,
    payload: folderPath
  });
};

export const addItem = item => (dispatch, getState) => {
  const {
    folders: { items }
  } = getState();
  console.log(item);
  AddItem(item.path, items, item);
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};

export const deleteItem = folderPath => (dispatch, getState) => {
  //TODO:create common function to reduce code duplication.
  const {
    folders: { items }
  } = getState();
  DeleteItem(folderPath, items);
  dispatch({
    type: DELETE_FOLDER,
    payload: items
  });
};

const DeleteItem = (path, folders) => {
  for (let folder of folders) {
    if (path.indexOf(folder.path) === 0) {
      if (path === `${folder.path}/${folder.title}`) {
        const index = folders.indexOf(folder);
        folders.splice(index, 1);
        return folders;
      }
      if (folder.hasSubmenu) {
        return DeleteItem(path, folder.submenu);
      }
    }
  }
};

const AddItem = (path, folders, newItem) => {
  if (path === "root") {
    return folders.push(newItem);
  }
  for (let folder of folders) {
    if (path.indexOf(folder.path) === 0) {
      if (path === `${folder.path}/${folder.title}`) {
        folders.push(newItem);
        return folders;
      }
      if (folder.hasSubmenu) {
        return AddItem(path, folder.submenu, newItem);
      }
    }
  }
};
