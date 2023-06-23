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
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            columnHeaders={SignUpUserColumns(handleEditSignup)}
            useCustomFetch={useFetchSignupUserList}
          />
        }
      />
    </Box>
  );
};

export default SignUpUserListing;
