import { ADD_ITEM, DELETE_FOLDER, SELECT_FOLDER } from './action';

export const selectFolder = (folderPath) => (dispatch) => {
	dispatch({
		type: SELECT_FOLDER,
		payload: folderPath
	});
};

export const moveUp = (folderPath) => (dispatch) => {
	//TODO:create common function to reduce code duplication.
	dispatch({
		type: SELECT_FOLDER,
		payload: folderPath
	});
};

export const addItem = (item) => (dispatch, getState) => {
	const { folders: { items } } = getState();
	AddItem(item.path, items, item);
	dispatch({
		type: ADD_ITEM,
		payload: items
	});
};

export const deleteItem = (folderPath) => (dispatch, getState) => {
	const { folders: { items } } = getState();
	DeleteItem(folderPath, items);
	dispatch({
		type: DELETE_FOLDER,
		payload: items
	});
};

const DeleteItem = (path, folders) => {
	// TODO: improve recursion
	for (let folder of folders) {
		if (path.indexOf(folder.path) === 0) {
			if (path === `${folder.path}/${folder.title}`) {
				const index = folders.indexOf(folder);
				folders.splice(index, 1);
				return folders;
			}
			if (folder.hasSubmenu) {
				DeleteItem(path, folder.submenu);
			}
		}
	}
};

const AddItem = (path, folders, newItem) => {
	if (path === 'root') {
		return folders.push(newItem);
	}
	for (let folder of folders) {
		if (path === `${folder.path}/${folder.title}`) {
			if (Array.isArray(folder.submenu)) {
				folder.submenu.push(newItem);
				return folders;
			}
			folder.submenu = [];
			folder.hasSubmenu = true;
			folder.submenu.push(newItem);
			return folders;
		}
		if (folder.hasSubmenu) {
			AddItem(path, folder.submenu, newItem);
		}
	}
};
