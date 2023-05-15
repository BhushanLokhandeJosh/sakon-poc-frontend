import useFetchAllConfigurations from "../config-hooks";
import GetAllConfigurations from "./component";

const GetAllConfigurationsContainer = () => {
  return <GetAllConfigurations useCustomFetch={useFetchAllConfigurations} />;
};

export default GetAllConfigurationsContainer;
