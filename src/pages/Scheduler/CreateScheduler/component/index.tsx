import { Box, Button } from "@mui/material";

import { ICreateSchedulerProps, ISchedulerProps } from "../types";

import { validationSchema } from "../helpers";
import { initialSchedulerValue } from "../constants";

import "./styles/styles.css";

import SchedulerForm from "./SchedulerForm";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";

const CreateScheduler = (props: ICreateSchedulerProps) => {
  const { configurationOptions,isOpen: isSchedulerModalOpen, toggleModal, onSubmit } = props;

  return (
    <Box>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 70%" }}
      >
        Create Scheduler
      </Button>

      {isSchedulerModalOpen && (
        <FormikModalComponent
          isOpen={isSchedulerModalOpen}
          toggleModal={toggleModal}
          modalTitle="Create Scheduler"
          getFormBody={(formik: IFormikProps<ISchedulerProps>) => (
            <SchedulerForm formik={formik} configurationOptions={configurationOptions} />
          )}
          initialValues={initialSchedulerValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      )}
    </Box>
  );
};

export default CreateScheduler;
