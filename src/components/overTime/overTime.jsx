import TableTd from "../td";

const OverTime = ({ ot }) => {
  const { otId, projectName, manpowerName, overTime, date, remarksOt } = ot;

  return (
    <>
      <tr className="bg-slate-600 even:bg-slate-700 hover:bg-slate-800">
        <TableTd>
          <p className="cursor-pointer">{projectName}</p>
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
          <p>{remarksOt}</p>
        </TableTd>
      </tr>
    </>
  );
};

export default OverTime;
