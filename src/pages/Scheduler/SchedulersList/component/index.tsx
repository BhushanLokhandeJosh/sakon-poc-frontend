import { Box, Button } from "@mui/material";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import {
  ICreateSchedulerProps,
  ISchedulerProps,
} from "../../ModalScheduler/types";
import { useFetchAllSchedulers } from "../../scheduler-hooks";
import { SchedulerColumns } from "../constants";

import "./styles/style.css";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import SchedulerForm from "../../ModalScheduler/component/SchedulerForm";
import { initialSchedulerValue } from "../../ModalScheduler/constants";
import { validationSchema } from "../../ModalScheduler/helpers";
import useToggle from "../../../../shared/CustomHooks/useToggle";

const SchedulerComponent = (props: ICreateSchedulerProps) => {
  const { isOpen: isSchedulerModalOpen, handleToggle: toggleModal } =
    useToggle();

  const { configurationOptions, onSubmit } = props;
  return (
    <Box>
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
