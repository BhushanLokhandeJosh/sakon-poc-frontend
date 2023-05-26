import CustomTable from "../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../shared/PageComponent/PageComponent";
import { useFetchAllJobs } from "../jobs-hooks";
import StepComponent from "./component";
import { getAllJobsColumns } from "./component/constants";

const StepContainer = () => {
  // return <StepComponent/>
  return (
    <PageComponent
      pageTitle="Jobs"
      pageBody={
        <CustomTable
          searchConfiguration={{
            isSearchBoxVisible: true,
          }}
          columnHeaders={getAllJobsColumns}
          useCustomFetch={useFetchAllJobs}
        />
      }
    />
  );
};

export default StepContainer;
