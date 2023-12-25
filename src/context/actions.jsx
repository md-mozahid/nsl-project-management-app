import {
  ADD_PROJECT,
  EDIT_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from "./actionTypes";

// add project
export const addProject = (payload) => {
  return { type: ADD_PROJECT, payload };
};
