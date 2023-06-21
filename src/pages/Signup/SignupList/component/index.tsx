import { Box } from "@mui/material";

import { SignUpUserColumns } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchSignupUserList } from "../../signup-hooks";

const SignUpUserListing = ({ toggleModal, handleEditSignup }: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle="User Enquiry"
        buttonLabel="SignUp User"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={SignUpUserColumns(handleEditSignup)}
            useCustomFetch={useFetchSignupUserList}
            tableClassName=""
          />
        }
      />
    </Box>
  );
};

export default SignUpUserListing;
