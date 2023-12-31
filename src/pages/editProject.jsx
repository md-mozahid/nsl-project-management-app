import { useParams } from "react-router-dom";
import EditProjectForm from "../components/editProjectForm";
import { useGetProjectQuery } from "../features/api/apiSlice";

const EditProject = () => {
  const { projectId } = useParams();
  const { data: project, isLoading, isError } = useGetProjectQuery(projectId);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <p className="text-rose-500">Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="text-rose-500">That was an error!</p>;
  }
  if (!isLoading && !isError && project?.id) {
    content = <EditProjectForm project={project} />;
  }

  return (
    <>
      <div className="">{content}</div>
    </>
  );
};

export default EditProject;
