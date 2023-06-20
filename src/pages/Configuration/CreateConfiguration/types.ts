export interface IConfiguration {
  id?: any;
  configurationName: string;
  department: string;
  email: string;
  password: string;
  carrierName: string;
  sftpLogin: string;
  sftpPassword: string;
  sftpLocation: string;
  downloadPath: string;
  template: string | Blob;
  // template: FileList | null;
}

export interface IConfigurationFormInfo {
  toggleModal: () => void;
  isOpen: boolean;
  configuration: any;
}
