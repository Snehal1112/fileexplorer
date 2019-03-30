import { LIST_FOLDERS } from "./action";
import { constants } from "../constants";

export const getFoldersList = () => dispatch => {
  dispatch({
    type: LIST_FOLDERS,
    payload: [
      {
        hasSubmenu: false,
        title: "apps",
        type: constants.FOLDER,
        path: "root"
      },
      {
        hasSubmenu: false,
        title: "pictures",
        type: constants.FOLDER,
        path: "root"
      },
      {
        hasSubmenu: false,
        title: "videos",
        type: constants.FOLDER,
        path: "root"
      },
      {
        hasSubmenu: true,
        type: constants.FOLDER,
        title: "docs",
        path: "root",
        submenu: [
          {
            hasSubmenu: true,
            type: constants.FOLDER,
            title: "works",
            path: "root/docs",
            submenu: [
              {
                hasSubmenu: false,
                type: constants.FILE,
                path: "root/docs/works",
                title: "e.pdf"
              },
              {
                hasSubmenu: false,
                type: constants.FILE,
                path: "root/docs/works",
                title: "f.ts"
              },
              {
                hasSubmenu: false,
                title: "apps",
                path: "root/docs/works",
                type: constants.FOLDER
              }
            ]
          },
          {
            hasSubmenu: false,
            type: constants.FILE,
            path: "root/docs",
            title: "c.pdf"
          },
          {
            hasSubmenu: false,
            type: constants.FILE,
            path: "root/docs",
            title: "d.docx"
          }
        ]
      },
      {
        hasSubmenu: false,
        type: constants.FILE,
        title: "a.pdf",
        path: "root"
      },
      {
        hasSubmenu: false,
        type: constants.FILE,
        title: "b.jpg",
        path: "root"
      }
    ]
  });
};
