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
        path: "root",
        size: "500kb",
        created_by: "Amit",
        created_date: new Date()
      },
      {
        hasSubmenu: false,
        title: "pictures",
        type: constants.FOLDER,
        path: "root",
        size: "600kb",
        created_by: "Rahul",
        created_date: new Date()
      },
      {
        hasSubmenu: false,
        title: "videos",
        type: constants.FOLDER,
        path: "root",
        size: "200kb",
        created_by: "Snehal",
        created_date: new Date()
      },
      {
        hasSubmenu: true,
        type: constants.FOLDER,
        title: "docs",
        path: "root",
        size: "600kb",
        created_by: "Snehal",
        created_date: new Date(),
        submenu: [
          {
            hasSubmenu: true,
            type: constants.FOLDER,
            title: "works",
            path: "root/docs",
            size: "600kb",
            created_by: "Dhara",
            created_date: new Date(),
            submenu: [
              {
                hasSubmenu: false,
                type: constants.FILE,
                path: "root/docs/works",
                title: "e.pdf",
                size: "200kb",
                created_by: "snehal",
                created_date: new Date()
              },
              {
                hasSubmenu: false,
                type: constants.FILE,
                path: "root/docs/works",
                title: "f.ts",
                size: "200kb",
                created_by: "snehal",
                created_date: new Date()
              },
              {
                hasSubmenu: false,
                title: "apps",
                path: "root/docs/works",
                type: constants.FOLDER,
                size: "200kb",
                created_by: "snehal",
                created_date: new Date()
              }
            ]
          },
          {
            hasSubmenu: false,
            type: constants.FILE,
            path: "root/docs",
            title: "c.pdf",
            size: "200kb",
            created_by: "snehal",
            created_date: new Date()
          },
          {
            hasSubmenu: false,
            type: constants.FILE,
            path: "root/docs",
            title: "d.docx",
            size: "200kb",
            created_by: "snehal",
            created_date: new Date()
          }
        ]
      },
      {
        hasSubmenu: false,
        type: constants.FILE,
        title: "a.pdf",
        path: "root",
        size: "500kb",
        created_by: "admin",
        created_date: new Date()
      },
      {
        hasSubmenu: false,
        type: constants.FILE,
        title: "b.jpg",
        path: "root",
        size: "500kb",
        created_by: "pravinbhai",
        created_date: new Date()
      }
    ]
  });
};
