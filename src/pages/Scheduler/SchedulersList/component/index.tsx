import { Box, Button } from "@mui/material";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import {
  ICreateSchedulerProps,
  ISchedulerProps,
} from "../../CreateScheduler/types";
import { useFetchAllSchedulers } from "../../scheduler-hooks";
import { SchedulerColumns } from "../constants";

import "./styles/style.css";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import SchedulerForm from "../../CreateScheduler/component/SchedulerForm";
import { initialSchedulerValue } from "../../CreateScheduler/constants";
import { validationSchema } from "../../CreateScheduler/helpers";

const SchedulerComponent = (props: ICreateSchedulerProps) => {
  const {
    configurationOptions,
    isOpen: isSchedulerModalOpen,
    toggleModal,
    onSubmit,
  } = props;
  return (
    <Box>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "2% 0% -2% 78%" }}
      >
        Create Scheduler
      </Button>

      {isSchedulerModalOpen && (
        <FormikModalComponent
          isOpen={isSchedulerModalOpen}
          toggleModal={toggleModal}
          modalTitle="Create Scheduler"
          getFormBody={(formik: IFormikProps<ISchedulerProps>) => (
            <SchedulerForm
              formik={formik}
              configurationOptions={configurationOptions}
            />
          )}
          initialValues={initialSchedulerValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      )}
      <PageComponent
        pageTitle="Schedulers"
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
