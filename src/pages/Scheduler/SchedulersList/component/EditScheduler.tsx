import useToggle from "../../../../shared/CustomHooks/useToggle";
import { useEffect, useState } from "react";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import SchedulerForm from "../../CreateScheduler/component/SchedulerForm";
import EditIcon from "@mui/icons-material/Edit";
import { ISchedulerProps } from "../../CreateScheduler/types";
import { useQueryClient } from "react-query";
import {
  FAILURE_MESSAGE,
  GET_ALL_SCHEDULERS,
  SCHEDULER_UPDATED_MESSAGE,
} from "../../constant";
import { toast } from "react-toastify";
import { IFormikProps } from "../../../../shared/types";
import { Tooltip, IconButton } from "@mui/material";
import { validationSchema } from "../../CreateScheduler/helpers";
import {
  useFetchAllSchedulers,
  useUpdateScheduler,
} from "../../scheduler-hooks";
import CreateSchedulerComponent from "../../CreateScheduler/component";

const EditScheduler = ({ job }: any) => {
  const { isOpen, handleToggle } = useToggle();

  const initialData = {
    ...job.row,
    configurations: job.row.configuration,
    schedularName: job.row.schedule_name,
    interval: job.row.interval,
    timeDuration: job.row.time,
  };

  return (
    <>
      <Tooltip title="Edit" placement="top">
        <IconButton onClick={handleToggle}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <CreateSchedulerComponent
        useCustomHook={useUpdateScheduler}
        initialSchedulerValue={initialData}
        isOpen={isOpen}
        handleToggle={handleToggle}
        successMessage={SCHEDULER_UPDATED_MESSAGE}
        errorMessage={FAILURE_MESSAGE}
      />
    </>
  );
};
export default EditScheduler;
