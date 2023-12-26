import { Link } from "react-router-dom";
import TableTd from "./td";

const Project = ({ project }) => {
  const {
    id,
    projectName,
    manpowerSite,
    manpowerFactory,
    projectHead,
    workingTime,
    breakTime,
    overTime,
    offDay,
    remarks,
  } = project;

  return (
    <>
      <tr className="bg-slate-600 even:bg-slate-700 hover:bg-slate-800">
        <TableTd>
          <Link to={`/edit-project/${id}`}>
            <p className="cursor-pointer">{projectName}</p>
          </Link>
        </TableTd>
        <TableTd className="w-20">
          <p>{manpowerSite}</p>
        </TableTd>
        <TableTd>
          <p>{manpowerFactory}</p>
        </TableTd>
        <TableTd>
          <p>{projectHead}</p>
        </TableTd>
        <TableTd>
          <p>{workingTime}</p>
        </TableTd>
        <TableTd>
          <p>{breakTime}</p>
        </TableTd>
        <TableTd>
          <p>{overTime}</p>
        </TableTd>
        <TableTd>
          <p>{offDay}</p>
        </TableTd>
        <TableTd>
          <p>{remarks}</p>
        </TableTd>
      </tr>
    </>
  );
};

export default Project;
