import React from "react";
import { InitialValuesProps, initialValues } from "./constants";
import { validationSchema } from "./constants";
import { useCreateConfiguration } from "../../hooks/useQueryhooks";
import CreateConfigurationComponent from "./component";
import { toast } from "react-toastify";

const CreateConfigContainer = () => {
  
  const onSuccess = async (values: any) => {
    toast.success("Configuration Added Successfully...");
  };

  const onError = (values: any) => {
    toast.error("Something Went Wrong...");
  };

  const { mutate: createConfiguration } = useCreateConfiguration({
    onSuccess,
    onError,
  });

  const onSubmit = async (values: InitialValuesProps) => {
    await createConfiguration({ ...values });
  };

  return (
    <div>
      <CreateConfigurationComponent
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default CreateConfigContainer;
