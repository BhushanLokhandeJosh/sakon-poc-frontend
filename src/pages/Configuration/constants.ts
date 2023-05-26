import { ConfigurationFilterFormInitialValues } from "./GetAllConfigurations/types";
import { IConfiguration } from "./CreateConfiguration/types";

export const configurationInitialValues: ConfigurationFilterFormInitialValues =
  {
    schedulingStatus: "",
    department: "",
  };

//url's
export const GET_ALL_CONFIGURATIONS = "getAllConfigurations";
export const DEPARTMENTS = "departments";

export const initialConfigurationValues: IConfiguration = {
  configurationName: "",
  department: "",
  email: "",
  password: "",
  carrierName: "",
  sftpLogin: "",
  sftpPassword: "",
  sftpLocation: "",
  downloadPath: "",
  template: "",
};
