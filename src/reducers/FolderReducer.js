import { SELECT_FOLDER } from '../actions/action';

const initState = {
	selected: undefined
};

export default (state = initState, action) => {
	switch (action.type) {
		case SELECT_FOLDER:
			return {
				...state,
				selected: action.payload
			};

		default:
			return state;
	}
};
