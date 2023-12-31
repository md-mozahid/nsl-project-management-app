import { useGetProjectsOTQuery } from "../../features/api/apiSlice";
import Loader from "../loader";
import TableTd from "../td";
import TableTh from "../th";
import OverTime from "./overTime";

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

  return <>{content}</>;
};

export default OverTimes;
