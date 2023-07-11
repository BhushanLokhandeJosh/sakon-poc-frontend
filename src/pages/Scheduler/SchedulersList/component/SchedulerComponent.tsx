import { Box } from "@mui/material";

import { useFetchAllSchedulers } from "../../scheduler-hooks";

import { SchedulerColumns } from "../constants";

import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useSelector } from "react-redux";

const SchedulerComponent = ({ toggleModal, handleEditScheduler }: any) => {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const id = loggedInUser?.id;
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
            queryArguments={id}
            tableClassName="scheduler-table-style"
          />
        }
      />
    </Box>
  );
};

export default SchedulerComponent;
