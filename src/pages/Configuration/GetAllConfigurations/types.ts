export interface GetAllConfig {
  id: string;
  email: string;
  carrierName: string;
  configurationName: string;
  department: string;
  schedulingStatus: string;
}

export interface ConfigFilterFormInitialValues {
  schedulingStatus: string;
  department: string;
}
