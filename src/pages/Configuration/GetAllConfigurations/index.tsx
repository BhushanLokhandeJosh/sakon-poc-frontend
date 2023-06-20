import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";

import useToggle from "../../../shared/CustomHooks/useToggle";
import ConfigurationModal from "./component/ConfigurationModal";

import ConfigurationComponent from "./component/ConfigurationComponent";

const ConfigurationsContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [configuration, setConfiguration] = useState<any>();

  const handleToggleWithConfigurationReset = () => {
    handleToggle();
    if (configuration) {
      setConfiguration(undefined);
    }
  };

  const handleEditConfiguration = (value: GridCellParams) => {
    setConfiguration(value);
    handleToggle();
  };

  return (
    <>
      {isOpen && (
        <ConfigurationModal
          isOpen={isOpen}
          toggleModal={handleToggleWithConfigurationReset}
          configuration={configuration}
        />
      )}
      <ConfigurationComponent
        toggleModal={handleToggleWithConfigurationReset}
        handleEditConfiguration={handleEditConfiguration}
      />
    </>
  );
};

export default ConfigurationsContainer;
