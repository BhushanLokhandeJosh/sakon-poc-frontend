import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { validationSchema } from "../../SchedulerModal/helpers";
import { useFetchAllSchedulers } from "../../scheduler-hooks";

import { IFormikProps } from "../../../../shared/types";
import {
  ICreateSchedulerProps,
  ISchedulerPayload,
} from "../../SchedulerModal/types";

import { initialSchedulerValue } from "../../SchedulerModal/constants";
import { SchedulerColumns } from "../constants";

import "./styles/style.css";

import useToggle from "../../../../shared/CustomHooks/useToggle";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import SchedulerForm from "../../SchedulerModal/component/SchedulerForm";

const SchedulerComponent = ({ onSubmit }: ICreateSchedulerProps) => {
  const { isOpen: isSchedulerModalOpen, handleToggle: toggleModal } =
    useToggle();
  const [configOptions, setConfigOptions] =
    useState<{ value: string; label: string }[]>();
  const { data, isLoading, isError } = useFetchAllSchedulers({
    is_scheduled: false,
  });

  useEffect(() => {
    setConfigOptions(
      data?.map((obj: any) => ({
        value: JSON.stringify(obj.id),
        label: obj.ConfigurationName,
      }))
    );
  }, [data]);

  return (
    <Box>
      {isSchedulerModalOpen && (
        <FormikModalComponent
          isOpen={isSchedulerModalOpen}
          toggleModal={toggleModal}
          modalTitle="Create Scheduler"
          getFormBody={(formik: IFormikProps<ISchedulerPayload>) => (
            <SchedulerForm
              formik={formik}
              configurationOptions={configOptions}
            />
          )}
          initialValues={initialSchedulerValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      )}
      <PageComponent
        pageTitle="Schedulers"
        buttonLabel="Create Scheduler"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={SchedulerColumns}
            useCustomFetch={useFetchAllSchedulers}
            tableClassName="scheduler-table-style"
          />
        }
      />
    </Box>
  );
};

export default SchedulerComponent;
