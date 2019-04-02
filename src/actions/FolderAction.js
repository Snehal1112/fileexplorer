import { SELECT_FOLDER } from './action';

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
