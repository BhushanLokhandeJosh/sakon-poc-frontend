import { Box } from "@mui/material";

import { SignUpUserColumns, USER_ENQUIRY } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchSignupUserList } from "../../signup-hooks";

const SignUpUserListing = ({ toggleModal, handleEditSignup }: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle={USER_ENQUIRY}
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            columnHeaders={SignUpUserColumns(handleEditSignup)}
            useCustomFetch={useFetchSignupUserList}
            tableClassName="signup-table"
          />
        }
      />
    </Box>
  );
};

export default SignUpUserListing;
