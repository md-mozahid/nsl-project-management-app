import { useGetProjectsQuery } from '../features/api/apiSlice'
import Project from './project'
import TableTh from './th'

const ProjectsList = () => {
  const { data: projects, isLoading, isError } = useGetProjectsQuery()

  // decide what to render
  let content = null

  if (isLoading) {
    content = <p className="text-rose-500">Loading...</p>
  }

  if (!isLoading && isError) {
    content = <p className="text-rose-500">That was an error !</p>
  }
  if (!isLoading && !isError && projects.length === 0) {
    content = <p className="text-rose-500">No projects found!</p>
  }
  if (!isLoading && !isError && projects.length > 0) {
    content = projects.map((project) => (
      <Project key={project.id} project={project} />
    ))
  }

  return (
    <>
      <div className="">
        <table className="table-auto border-collapse border border-slate-400 text-center">
          <thead className="bg-teal-800">
            <tr className="text-slate-100 text-sm md:text-lg">
              <TableTh className="md:w-48 w-auto" rowSpan="2">
                Projects
              </TableTh>
              <TableTh className="md:w-48 w-auto" colSpan="2">
                Manpower
              </TableTh>
              <TableTh className="md:w-72 w-auto" rowSpan="2">
                Project Head
              </TableTh>
              <TableTh className="md:w-40 w-auto" rowSpan="2">
                Working Time
              </TableTh>
              <TableTh className="md:w-20 w-auto" rowSpan="2">
                Break
              </TableTh>
              <TableTh className="md:w-32 w-auto" rowSpan="2">
                Over Time
              </TableTh>
              <TableTh className="md:w-48 w-auto" rowSpan="2">
                Off Day
              </TableTh>
              <TableTh className="md:w-64 w-auto" rowSpan="2">
                Remarks
              </TableTh>
            </tr>
            <tr className="md:text-xl text-sm text-slate-100">
              <TableTh className="md:w-24 w-auto">Site</TableTh>
              <TableTh className="md:w-24 w-auto">Factory</TableTh>
            </tr>
          </thead>
          <tbody className="rounded-xl">{content}</tbody>
        </table>
      </div>
    </>
  )
}

export default ProjectsList
