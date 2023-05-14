import { useFetchAllSchedulers } from "../../hooks/useFetchAllSchedulers";
import GetAllSchedulerComponent from "./component";

const GetAllSchedulers = () => {
  return <GetAllSchedulerComponent useCustomFetch={useFetchAllSchedulers} />;
};

export default GetAllSchedulers;
