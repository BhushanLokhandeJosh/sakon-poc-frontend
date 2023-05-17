export interface ConfigurationsList {
  id: string;
  email: string;
  carrierName: string;
  configurationName: string;
  department: string;
  schedulingStatus: string;
}

export interface ConfigurationFilterFormInitialValues {
  schedulingStatus: string;
  department: string;
}
