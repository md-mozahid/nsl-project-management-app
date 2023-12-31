import Loader from "../loader";
import TableTd from "../td";
import TableTh from "../th";

const OverTime = ({ ot }) => {
  const { otId, projectName, manpowerName, overTime, date, remarksOt } = ot;

  return (
    <>
      <div className="">
        <>
          <table className="table-auto border-collapse border border-slate-400 text-center">
            <thead className="bg-teal-800">
              <tr className="text-slate-100 text-sm md:text-lg">
                <TableTh className="md:w-52 w-auto">Projects</TableTh>
                <TableTh className="md:w-52 w-auto">Name / Person</TableTh>
                <TableTh className="md:w-36 w-auto">Over Time</TableTh>
                <TableTh className="md:w-40 w-auto">Date</TableTh>
                <TableTh className="md:w-64 w-auto">Remarks</TableTh>
              </tr>
            </thead>
            <tbody className="rounded-xl">
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
            </tbody>
          </table>
        </>
      </div>
    </>
  );
};

export default OverTime;
