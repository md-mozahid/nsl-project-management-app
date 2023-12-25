import {
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  UPDATE_PROJECT,
} from "./actionTypes";

// create id
function nextId(state) {
  const maxId = state.reduce((acc, curr) => Math.max(curr.id, acc), -1);
  return maxId && maxId >= 0 ? maxId + 1 : 1;
}

const ProjectReducer = (projects = [], action = {}) => {
  switch (action.type) {
    // add contact
    case ADD_PROJECT:
      let addProject = {
        id: nextId(projects),
        ...action.payload,
      };
      return [addProject, ...projects];

    // edit contact

    // update contact

    // delete contact

    default:
      return projects;
  }
};

export default ProjectReducer;
