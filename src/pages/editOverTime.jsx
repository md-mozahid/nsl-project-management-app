import { useParams } from "react-router-dom";
import EditOverTimeForm from "../components/overTime/editOverTimeForm";
import { useGetOvertimeQuery } from "../features/api/apiSlice";

const EditOverTime = () => {
  const { overTimeId } = useParams();
  const {
    data: overTimes,
    isLoading,
    isError,
  } = useGetOvertimeQuery(overTimeId);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <p className="text-rose-500">Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="text-rose-500">That was an error!</p>;
  }
  if (!isLoading && !isError && overTimes?.id) {
    content = <EditOverTimeForm overTimes={overTimes} />;
  }
  return <>{content}</>;
};

export default EditOverTime;
