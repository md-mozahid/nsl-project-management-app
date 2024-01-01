import { Link } from "react-router-dom";
import TableTd from "./td";

const Project = ({ project = {} }) => {
  const {
    id,
    projectName,
    manpowerSite,
    manpowerFactory,
    projectHead,
    workingTime,
    breakTime,
    totalOverTime,
    offDay,
    startDate,
    endDate,
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
        <TableTd className="md:w-20 w-auto">
          <Link to="manpower-site">
            <p>{manpowerSite}</p>
          </Link>
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
          <Link to="/over-time">
            <p>{totalOverTime}</p>
          </Link>
        </TableTd>
        <TableTd>
          <p>{offDay}</p>
        </TableTd>
        <TableTd>
          <p>{startDate}</p>
        </TableTd>
        <TableTd>
          <p>{endDate}</p>
        </TableTd>
        <TableTd>
          <p>{remarks}</p>
        </TableTd>
      </tr>
    </>
  );
};

export default Project;
