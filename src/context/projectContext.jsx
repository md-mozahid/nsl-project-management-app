import { createContext, useContext, useReducer } from "react";
import ProjectReducer from "./projectReducer";
import { initialProject } from "./initialProject";

// create context
export const ProjectContext = createContext(null);
export const ProjectDispatchContext = createContext(null);


// context provider
export const ProjectProvider = ({ children }) => {
  const [projects, dispatch] = useReducer(ProjectReducer, initialProject);
//   console.log(projects)

  return (
    <ProjectContext.Provider value={projects}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(ProjectContext);
};
export const useDispatchProjects = () => {
  return useContext(ProjectDispatchContext);
};
