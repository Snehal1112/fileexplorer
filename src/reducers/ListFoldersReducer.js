import { LIST_FOLDERS } from "../actions/action";

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
    default:
      return state;
  }
};
