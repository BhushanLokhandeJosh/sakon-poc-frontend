import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

import {
  formDataMapping,
  validationSchema,
} from "../../CreateConfiguration/helpers";
import {
  useCreateConfiguration,
  useFetchConfigurationById,
  useGetDepartments,
  useUpdateConfiguration,
} from "../../config-hooks";

import {
  CONFIGURATION_SUCCESS_MESSAGE,
  CONFIGURATION_UPDATED_MESSAGE,
  GET_ALL_CONFIGURATIONS,
  initialConfigurationValues,
} from "../../constants";

import { IFormikProps } from "../../../../shared/types";
import {
  IConfiguration,
  IConfigurationFormInfo,
} from "../../CreateConfiguration/types";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import ConfigurationForm from "../../CreateConfiguration/component/ConfigurationForm";
import { useSelector } from "react-redux";
import { useFetchDepartment } from "../../../Department/department-hooks";
import { useEffect, useState } from "react";

const ConfigurationModal = ({
  isOpen: isConfigurationModalOpen,
  toggleModal,
  configuration,
}: IConfigurationFormInfo) => {
    //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const [selectDepartmentOptions,setSelectDepartmentOptions] = useState<{ label: string; value:string}[]>([]);

  const id = configuration?.id;

  let deptArray:any = [];

  console.log("configurationsssss",configuration);

  const queryClient = useQueryClient();

  const{ data:departmentnames, isLoading, isError }=useFetchDepartment({
    searchValue:"",
    queryArguments:loggedInUser.id
  });

 const {data:configurationDetails} = useFetchConfigurationById({queryArguments:id});
 console.log(configurationDetails,"daataaa");
 

  const isEdit = configuration ? true : false;
  let configurationInitialData;
  
  useEffect(() => {
   
    if(departmentnames) {
      const length = departmentnames?.length;
      for(let i = 0 ; i < length ; i++) {
        const obj = {
          label: departmentnames[i].name,
          value: departmentnames[i].id
        }
        deptArray.push(obj);
      }
      setSelectDepartmentOptions(deptArray);
    }
    },[departmentnames])

  if (isEdit) {
    configurationInitialData = {
      ...configuration,
      configurationName: configuration?.configurationName,
      department: selectDepartmentOptions,
      email: configuration?.email,
        password: configurationDetails[0]?.password,
      carrierName: configuration?.carrierName,
        sftpLogin: configurationDetails[0]?.sftp_login,
        sftpPassword: configurationDetails[0]?.sftp_password,
        sftpLocation: configurationDetails[0]?.sftp_path,
        downloadPath: configurationDetails[0]?.website_url,
      template: configuration?.template,
    };
  }

  const initialConfigurationValue = isEdit
    ? configurationInitialData
    : initialConfigurationValues;

  const onSuccess = (value: AxiosResponse) => {
    isEdit
      ? toast.success(CONFIGURATION_UPDATED_MESSAGE)
      : toast.success(CONFIGURATION_SUCCESS_MESSAGE);

    queryClient.invalidateQueries([GET_ALL_CONFIGURATIONS]);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message); //"Something Went Wrong..."
  };
  const { mutate: createConfiguration } = useCreateConfiguration({
    onSuccess,
    onError,
  });

  const { mutate: updateConfiguration } = useUpdateConfiguration({
    onSuccess,
    onError,
  });

  if(isLoading){
    return <>Loading...</>
  }
  if(isError){
    return <>Error...</>
  }
  const onSubmit = (values: IConfiguration) => {
    const formData = formDataMapping(values,loggedInUser);
    isEdit ? updateConfiguration(values) : createConfiguration(formData);
  };

  return (
    <FormikModalComponent
      isOpen={isConfigurationModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit Configuration" : "Create Configuration"}
      getFormBody={(formik: IFormikProps<IConfiguration>) => (
        <ConfigurationForm formik={formik} selectDepartmentOptions={selectDepartmentOptions}/>
      )}
      initialValues={initialConfigurationValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default ConfigurationModal;
