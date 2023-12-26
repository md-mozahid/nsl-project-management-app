import { useGetProjectsQuery } from "../features/api/apiSlice";
import Project from "./project";
import TableTh from "./th";

const ProjectsList = () => {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <p className="text-rose-500">Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="text-rose-500">That was an error !</p>;
  }
  if (!isLoading && !isError && projects.length === 0) {
    content = <p className="text-rose-500">No projects found!</p>;
  }
  if (!isLoading && !isError && projects.length > 0) {
    content = projects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  }

  return (
    <>
      <div className="container mx-auto flex justify-center">
        <table className="border-collapse border border-slate-400 text-center">
          <thead className="bg-teal-800">
            <tr className="text-slate-100 md:text-lg">
              <TableTh className="w-40" rowSpan="2">
                Projects
              </TableTh>
              <TableTh className="w-48" colSpan="2">
                Manpower
              </TableTh>
              <TableTh className="w-36" rowSpan="2">
               Project Head
              </TableTh>
              <TableTh className="w-40" rowSpan="2">
                Working Time
              </TableTh>
              <TableTh className="w-20" rowSpan="2">
                Break
              </TableTh>
              <TableTh className="w-28" rowSpan="2">
                Over Time
              </TableTh>
              <TableTh className="w-48" rowSpan="2">
                Off Day
              </TableTh>
              <TableTh className="w-52" rowSpan="2">
                Remarks
              </TableTh>
            </tr>
            <tr className="md:text-xl text-slate-100">
              <TableTh className="w-24">Site</TableTh>
              <TableTh className=''>Factory</TableTh>
            </tr>
          </thead>
          <tbody className="rounded-xl">{content}</tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectsList;
