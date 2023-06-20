import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { formDataMapping } from "../CreateConfiguration/helpers";
import { useCreateConfiguration } from "../config-hooks";

import { IConfiguration } from "../CreateConfiguration/types";

import {
  CONFIGURATION_SUCCESS_MESSAGE,
  GET_ALL_CONFIGURATIONS,
} from "../constants";

import useToggle from "../../../shared/CustomHooks/useToggle";
import ConfigurationComponent from "./component/ConfigurationComponent";
import { useState } from "react";
import { boolean } from "yup";
import { GridCellParams } from "@mui/x-data-grid";
import ConfigurationModal from "./component/ConfigurationModal";

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
