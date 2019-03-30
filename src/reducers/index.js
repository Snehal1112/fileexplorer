import { combineReducers } from "redux";
import ListFoldersReducer from "./ListFoldersReducer";
import FolderReducer from "./FolderReducer";

export default combineReducers({
  folders: ListFoldersReducer,
  folder: FolderReducer
});
