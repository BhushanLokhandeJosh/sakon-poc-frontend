import { useFetchAllSchedulers } from "../../hooks/useFetchAllSchedulers";
import GetAllSchedulerComponent from "./component";

const GetAllSchedulers = () => {
  return <GetAllSchedulerComponent useCustomFetch={useFetchAllSchedulers} />; //Passing useFetchAllSchedulers hook to the component.
};

export default GetAllSchedulers;
