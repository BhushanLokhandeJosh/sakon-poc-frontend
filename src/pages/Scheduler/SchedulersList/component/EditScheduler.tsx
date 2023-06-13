import EditIcon from "@mui/icons-material/Edit";
import { Tooltip, IconButton } from "@mui/material";

import { useUpdateScheduler } from "../../scheduler-hooks";
import useToggle from "../../../../shared/CustomHooks/useToggle";

import { FAILURE_MESSAGE, SCHEDULER_UPDATED_MESSAGE } from "../../constant";

import CreateSchedulerComponent from "../../CreateScheduler/component";

const EditScheduler = ({ scheduler }: any) => {
  const { isOpen, handleToggle } = useToggle();

  const initialData = {
    ...scheduler.row,
    configurations: scheduler.row.configuration,
    schedularName: scheduler.row.schedule_name,
    interval: scheduler.row.interval,
    timeDuration: scheduler.row.time,
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
