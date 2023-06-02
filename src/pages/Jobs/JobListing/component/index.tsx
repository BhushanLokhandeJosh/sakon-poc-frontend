import { useFetchAllJobs } from "../../jobs-hooks";
import { DownloadJobColumns } from "./constants";

import "./style/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";

const JobListingContainer = () => {
  return (
    <PageComponent
      pageTitleClassName="page-title-style"
      pageTitle="Jobs"
      pageBody={
        <CustomTable
          isPaginationVisible={true}
          columnHeaders={DownloadJobColumns}
          useCustomFetch={useFetchAllJobs}
          isRefreshButtonVisible
          tableClassName="table-style"
        />
      }
    ></PageComponent>
  );
};

export default JobListingContainer;
