import { Box } from "@mui/material";

import "./styles/styles.css";

import PageComponent from "../../../../shared/PageComponent/PageComponent";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { useFetchUserList } from "../../user-hooks";
import { userColumns } from "../../constants";

const UserListing = ({ toggleModal, handleEditUser }: any) => {
  return (
    <PageComponent
      pageTitle="User"
      buttonLabel="Create User"
      handleButtonAction={toggleModal}
      pageBody={
        <CustomTable
          searchConfiguration={{ isSearchBoxVisible: true }}
          columnHeaders={userColumns(handleEditUser)}
          useCustomFetch={useFetchUserList}
          tableClassName="user-listing-style"
        />
      }
    />
  );
};

export default UserListing;
