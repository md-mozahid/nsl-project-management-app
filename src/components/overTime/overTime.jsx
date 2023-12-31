import { Link } from "react-router-dom";
import TableTd from "../td";

const OverTime = ({ ot }) => {
  const { id, projectName, manpowerName, overTime, date, remarks } = ot;

  return (
    <>
      <tr className="bg-slate-600 even:bg-slate-700 hover:bg-slate-800">
        <TableTd>
          <Link to={`/edit-over-time/${id}`}>
            <p className="cursor-pointer">{projectName}</p>
          </Link>
        </TableTd>
        <TableTd>
          <p>{manpowerName}</p>
        </TableTd>
        <TableTd>
          <p>{overTime}</p>
        </TableTd>
        <TableTd>
          <p>{date}</p>
        </TableTd>
        <TableTd>
          <p>{remarks}</p>
        </TableTd>
      </tr>
    </>
  );
};

export default OverTime;
