import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import { IOrganizationModalProps, IOrganizationPayload } from "../types";
import OrganizationForm from "./OrganizationForm";
import {
  CREATE_ORGANIZATION_MESSAGE,
  ERROR_MESSAGE,
  GET_ALL_ORGANIZATION,
  UPDATE_ORGANIZATION_MESSAGE,
  initialOrganizationValues,
} from "../../constants";
import { organizationValidationSchema } from "../helpers";
import {
  useCreateOrganization,
  useFetchServiceProviders,
  useUpdateOrganization,
} from "../../organization-hooks";
import { AxiosError, AxiosResponse } from "axios";

const OrganizationModal = ({
  isOpen: isModalOpen,
  toggleModal,
  organization,
}: IOrganizationModalProps) => {

  const [serviceProviders, setServiceProviders] = useState<
    {
      label: string;
      value: string;
    }[]
  >();

  const { data } = useFetchServiceProviders();

  const queryClient = useQueryClient();

  const isEdit = organization ? true : false;

  let updateOrganizationValues;

  useEffect(() => {
    if (isEdit) {
      let arr: any = [];
      const length = organization.service_providers.length;

      for (let i = 0; i < length; i++) {
        arr.push({
          value: organization?.service_providers[i],
          label: organization?.service_providers[i],
        });
      }
      setServiceProviders(arr);
    } else {
      let arr = [];
      const length = data?.results.length;

      for (let i = 0; i < length; i++) {
        arr.push({
          value: data?.results[i].name,
          label: data?.results[i].name,
        });
      }

      console.log("Serviec array", arr);
      setServiceProviders(arr);
    }
  }, [data]);

  if (isEdit) {
    updateOrganizationValues = {
      id: organization.id,
      name: organization.name,
      department_count: organization.department_count,
      service_providers: organization.service_providers,
    };
  }

  const onSuccess = async (values: AxiosResponse) => {
    isEdit
      ? toast.success(UPDATE_ORGANIZATION_MESSAGE)
      : toast.success(CREATE_ORGANIZATION_MESSAGE);
    queryClient.invalidateQueries(GET_ALL_ORGANIZATION);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(ERROR_MESSAGE);
    toggleModal();
  };

  const { mutate: createOrganization } = useCreateOrganization({
    onSuccess,
    onError,
  });

  const { mutate: updateOrganization } = useUpdateOrganization({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    // TODO: Currently, there is only one employee defined. Therefore hardcoded as "1".
    !isEdit ? createOrganization(values) : updateOrganization(values);
  };

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit Organization" : "Create Organization"}
      getFormBody={(formik: IFormikProps<IOrganizationPayload>) => (
        <OrganizationForm formik={formik} serviceProviders={serviceProviders} />
      )}
      initialValues={
        !isEdit ? initialOrganizationValues : updateOrganizationValues
      }
      validationSchema={organizationValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default OrganizationModal;
