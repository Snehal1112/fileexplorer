import { LIST_FOLDERS, DELETE_FOLDER } from "../actions/action";

const initState = {
  items: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case LIST_FOLDERS:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_FOLDER:
      return {
        ...state,
        items: [...action.payload]
      };
    default:
      return state;
  }
};
