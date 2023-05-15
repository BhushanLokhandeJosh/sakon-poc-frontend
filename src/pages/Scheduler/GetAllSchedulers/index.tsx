import { useFetchAllSchedulers } from "../scheduler-hooks";
import GetAllSchedulersComponent from "./component";

const GetAllSchedulersContainer = () => {
  return <GetAllSchedulersComponent useCustomFetch={useFetchAllSchedulers} />; //Passing useFetchAllSchedulers hook to the component.
};

export default GetAllSchedulersContainer;
