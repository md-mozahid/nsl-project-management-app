import { useGetProjectsQuery } from '../features/api/apiSlice'
import Project from './project'

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
      <div className="container mx-auto flex justify-center">
        <table className="border-collapse border border-slate-500 text-center">
          <thead>
            <tr className="text-rose-400 md:text-xl">
              <th className="border border-slate-600 px-10" rowSpan="2">
                Projects
              </th>
              <th className="border border-slate-600 px-10" colSpan="2">
                Manpower
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Head
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Working Time
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Break
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Over Time
              </th>
              <th className="border border-slate-600 px-16" rowSpan="2">
                Off Day
              </th>
              <th className="border border-slate-600 px-6" rowSpan="2">
                Remarks
              </th>
            </tr>
            <tr className="md:text-xl text-rose-400">
              <th className="border-r">Site</th>
              <th>Factory</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </>
  )
}

export default ProjectsList
