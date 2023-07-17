import { SignUpUserColumns, USER_ENQUIRY } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchSignupUserList } from "../../signup-hooks";

const SignUpUserListing = ({ toggleModal, handleEditSignup }: any) => {
  return (
    <PageComponent
      pageTitle={USER_ENQUIRY}
      handleButtonAction={toggleModal}
      pageBody={
        <CustomTable
          columnHeaders={SignUpUserColumns(handleEditSignup)}
          useCustomFetch={useFetchSignupUserList}
        />
      }
    />
  );
};

export default SignUpUserListing;
