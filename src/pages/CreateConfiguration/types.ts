export interface InitialValuesProps {
  configurationName:string,
  department:string,
  email: string;
  password: string;
  carrierName: string;
  sftpLogin:string;
  sftpPassword:string;
  sftpLocation: string;
  downloadPath: string;
  template?: string;
}

export interface ConfigurationProps {
  isOpen:boolean;
  toggleModal:() => void;
  onSubmit: (values: InitialValuesProps) => void;
}

export interface ConfigurationFormProps {
  onSubmit: (values: InitialValuesProps) => void;
}

