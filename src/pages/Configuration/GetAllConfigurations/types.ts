// export type TConfiguration = {
//   id: string;
//   email: string;
//   carrierName: string;
//   configurationName: string;
//   department: string;
//   schedulingStatus: string;
// };

// export interface GetAllConfig {
//   data: TConfiguration[];
//   isLoading: boolean;
//   isError: boolean;
// }

export interface ConfigFilterFormInitialValues {
  schedulingStatus: string;
  department: string;
}
