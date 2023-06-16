import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { validationSchema } from "../../SchedulerModal/helpers";
import {
  useFetchAllSchedulers,
  useScheduleConfiguration,
  useUpdateScheduler,
} from "../../scheduler-hooks";

import { initialSchedulerValue } from "../../SchedulerModal/constants";

import { IFormikProps } from "../../../../shared/types";
import {
  ICreateSchedulerPayload,
  ICreateSchedulerProps,
} from "../../SchedulerModal/types";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import SchedulerForm from "../../SchedulerModal/component/SchedulerForm";
import { useQueryClient } from "react-query";
import { GET_ALL_SCHEDULERS } from "../../constant";

const SchedulerModal = ({
  isOpen: isSchedulerModalOpen,
  toggleModal,
  scheduler,
}: ICreateSchedulerProps) => {
  const [configurationOptions, setConfigurationOptions] =
    useState<{ value: string; label: string }[]>();

  const queryClient = useQueryClient();

  const isEdit = scheduler ? true : false;
  let schedulerInitialData;

  const { data } = useFetchAllSchedulers({
    is_scheduled: false,
  });

  useEffect(() => {
    if (isEdit) {
      let arr = [];
      const length = scheduler?.configuration?.length;

      for (let i = 0; i < length; i++) {
        arr.push({
          value: scheduler?.id,
          label: scheduler?.configuration[i],
        });
      }
      setConfigurationOptions(arr);
    } else {
      let arr = [];

      for (let i = 0; i < data?.length; i++) {
        arr.push({
          value: JSON.stringify(data[i].id),
          label: data[i].configuration[0],
        });
      }
      setConfigurationOptions(arr);
    }
  }, [data]);

  if (isEdit) {
    schedulerInitialData = {
      ...scheduler,
      configurations: configurationOptions,
      schedularName: scheduler?.schedule_name,
      interval: scheduler?.interval,
      timeDuration: scheduler?.time,
    };
  }

  const initialSchedulervalues = isEdit
    ? schedulerInitialData
    : initialSchedulerValue;

  const onSuccess = async (values: AxiosResponse) => {
    isEdit
      ? toast.success("Scheduler Updated Successfully...")
      : toast.success("Scheduler Added Successfully...");

    queryClient.invalidateQueries(GET_ALL_SCHEDULERS);
    toggleModal();
  };
  const onError = (values: AxiosError) => {
    toast.error("Something Went Wrong...");
  };

  const { mutate: createScheduler } = useScheduleConfiguration({
    onSuccess,
    onError,
  });

  const { mutate: updateScheduler } = useUpdateScheduler({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    // TODO: Currently, there is only one employee defined. Therefore hardcoded as "1".
    values.emp = "1";
    isEdit ? updateScheduler(values) : createScheduler(values);
  };

  return (
    <FormikModalComponent
      isOpen={isSchedulerModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit Scheduler" : "Create Scheduler"}
      getFormBody={(formik: IFormikProps<ICreateSchedulerPayload>) => (
        <SchedulerForm
          formik={formik}
          configurationOptions={configurationOptions}
        />
      )}
      initialValues={initialSchedulervalues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default SchedulerModal;
