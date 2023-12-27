import TableTh from "./th";
import TableTd from "./td";

const CraneSchedule = () => {
  return (
    <>
      <div className="">
        <table className="border-collapse border border-slate-400 text-center">
          <thead className="bg-teal-800">
            <tr className="text-slate-100 md:text-lg">
              <TableTh className="w-40 py-3">Crane Capacity</TableTh>
              <TableTh className="w-20 py-3">Nos</TableTh>
              <TableTh className="w-40 py-3">Project</TableTh>
              <TableTh className="w-32 py-3">Operator</TableTh>
              <TableTh className="w-40 py-3">Working Time</TableTh>
              <TableTh className="w-20 py-3">Break</TableTh>
              <TableTh className="w-28 py-3">Over Time</TableTh>
              <TableTh className="w-48 py-3">Off Day</TableTh>
              <TableTh className="w-44 py-3">Remarks</TableTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableTd>
                <p>10 Ton</p>
              </TableTd>
              <TableTd>
                <p>1</p>
              </TableTd>
              <TableTd>
                <p>Bridhara</p>
              </TableTd>
              <TableTd>
                <p>Hridoy</p>
              </TableTd>
              <TableTd>
                <p>8am - 5pm</p>
              </TableTd>
              <TableTd>
                <p>1hr</p>
              </TableTd>
              <TableTd>
                <p>2hr</p>
              </TableTd>
              <TableTd>
                <p>2-Friday (In a month)</p>
              </TableTd>
              <TableTd>
                <p>remarks</p>
              </TableTd>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CraneSchedule;
