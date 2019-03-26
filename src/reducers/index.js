import { combineReducers } from "redux";
import ListFoldersReducer from "./ListFoldersReducer";

export default combineReducers({
  folders: ListFoldersReducer
});
