import { Button } from "@mui/material";

import SchedulerForm from "./SchedulerForm";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";

import { IFormikProps } from "../../../../shared/types";
import { ISchedulerProps } from "../types";
import { initialSchedulerValue, validationSchema } from "../helpers";

import "./styles/styles.css";

const CreateSchedulerComponent = (props: any) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 50%" }}
      >
        Create Scheduler
      </Button>

      <FormikModalComponent
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalTitle="Create Scheduler"
        getFormBody={(formik: IFormikProps<ISchedulerProps>) => {
          return <SchedulerForm formik={formik} />;
        }}
        initialValues={initialSchedulerValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        formClassName="form"
      />
    </>
  );
};

export default CreateSchedulerComponent;
