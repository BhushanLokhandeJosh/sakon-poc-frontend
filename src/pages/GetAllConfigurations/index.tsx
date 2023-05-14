import useFetchAllConfigurations from "../../hooks/useFetchAllConfig";
import GetAllConfigurationComponent from "./component";

const GetAllConfigurations = () => {
  return (
    <GetAllConfigurationComponent useCustomFetch={useFetchAllConfigurations} />
  );
};

export default GetAllConfigurations;
