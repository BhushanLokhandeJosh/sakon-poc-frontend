export interface IConfiguration {
  configurationName: string;
  department: "";
  email: string;
  password: string;
  carrierName: string;
  sftpLogin: string;
  sftpPassword: string;
  sftpLocation: string;
  downloadPath: string;
  template: string | Blob;
}

export interface IConfigurationFormInfo {
  toggleModal: () => void;
  isOpen: boolean;
  configuration: any;
}
