import useFetchConfigurations from "../config-hooks";
import GetAllConfigurations from "./component";

const ConfigurationsContainer = () => {
  return <GetAllConfigurations useCustomFetch={useFetchConfigurations} />;
};

export default ConfigurationsContainer;
