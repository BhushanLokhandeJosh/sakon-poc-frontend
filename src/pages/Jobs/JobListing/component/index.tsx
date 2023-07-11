import { useFetchAllJobs } from "../../jobs-hooks";
import { DownloadJobColumns } from "./constants";

import "./style/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useSelector } from "react-redux";

const JobListingContainer = () => {

   //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const id = loggedInUser?.id;
  return (
    <PageComponent
      pageTitle="Jobs"
      pageBody={
        <CustomTable
          // isPaginationVisible={true}
          columnHeaders={DownloadJobColumns}
          useCustomFetch={useFetchAllJobs}
          queryArguments={id}
          isRefreshButtonVisible
          tableClassName="table-style"
        />
      }
    ></PageComponent>
  );
};

export default JobListingContainer;
