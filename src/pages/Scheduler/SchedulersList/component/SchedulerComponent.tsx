import { Box } from "@mui/material";

import { useFetchAllSchedulers } from "../../scheduler-hooks";

import { SchedulerColumns } from "../constants";

import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";

const SchedulerComponent = ({ toggleModal, handleEditScheduler }: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle="Schedulers"
        buttonLabel="Create Scheduler"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={SchedulerColumns(handleEditScheduler)}
            useCustomFetch={useFetchAllSchedulers}
            tableClassName="scheduler-table-style"
          />
        }
      />
    </Box>
  );
};

export default SchedulerComponent;
