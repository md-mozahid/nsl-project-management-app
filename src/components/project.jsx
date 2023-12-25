const Project = ({ project }) => {
  console.log(project)
  const {
    projectName,
    siteWorker,
    factoryWorker,
    projectHead,
    workingTime,
    breakTime,
    overTime,
    offDay,
    remarks,
  } = project;

  return (
    <>
      <tr>
        <td className="border border-slate-600 ">
          <p>{projectName}</p>
        </td>
        <td className="border border-slate-600 w-20">
          <p>{siteWorker}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{factoryWorker}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{projectHead}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{workingTime}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{breakTime}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{overTime}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{offDay}</p>
        </td>
        <td className="border border-slate-600 ">
          <p>{remarks}</p>
        </td>
      </tr>
    </>
  );
};

export default Project;
