import { useGetProjectsOTQuery } from "../../features/api/apiSlice";
import { Link } from "react-router-dom";
import Loader from "../loader";
import OverTime from "./overTime";
import TableTh from "../th";

const OverTimes = () => {
  const { data: projectOt, isLoading, isError } = useGetProjectsOTQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <Loader />;
  }

  if (!isLoading && isError) {
    content = <p className="text-rose-500">That was an error !</p>;
  }
  if (!isLoading && !isError && projectOt.length === 0) {
    content = <p className="text-rose-500">No data found!</p>;
  }
  if (!isLoading && !isError && projectOt.length > 0) {
    content = projectOt.map((ot) => <OverTime key={ot.otId} ot={ot} />);
  }

  return (
    <>
      <div className="">
        <div className="text-center mb-5">
          <Link to="/over-time-form">
            <button className="btn btn-primary">Add Over Time</button>
          </Link>
        </div>
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
          <tbody className="rounded-xl">{content}</tbody>
        </table>
      </div>
    </>
  );
};

export default OverTimes;
