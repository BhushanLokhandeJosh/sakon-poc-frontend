import React, { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps, IOption } from "../../../../shared/types";
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
  isOpen:isOrganizationModalOpen,
  toggleModal,
  organization,
}: IOrganizationModalProps) => {
  const queryClient = useQueryClient();

  const [serviceProviders, setServiceProviders] = useState<
    IOption<string>[]
  >();

  const { data } = useFetchServiceProviders();

  const isEdit = organization ? true : false;

  let updateOrganizationValues;

  useEffect(() => {
    if (isEdit) {
      let arr = [];
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
      setServiceProviders(arr);
    }
  }, [data]);

  updateOrganizationValues = useMemo(() => {
    if(isEdit) {
      const obj = {
      id: organization?.id,
      name: organization.name,
      department_count: organization.department_count,
      service_providers: organization.service_providers,
      }
      return obj;
    }
  },[]);

   
  let organizationProps = isEdit ? {
       initialValue:updateOrganizationValues,
       modalTitle: "Edit Organization"
    }:{
        initialValue:initialOrganizationValues,
        modalTitle: "Create Organization"
  };

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
    !isEdit ? createOrganization(values) : updateOrganization(values);
  };

  return (
    <FormikModalComponent
      isOpen={isOrganizationModalOpen}
      toggleModal={toggleModal}
      modalTitle={organizationProps.modalTitle}
      getFormBody={(formik: IFormikProps<IOrganizationPayload>) => (
        <OrganizationForm formik={formik} serviceProviders={serviceProviders} />
      )}
      initialValues={
        organizationProps.initialValue
      }
      validationSchema={organizationValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default OrganizationModal;
