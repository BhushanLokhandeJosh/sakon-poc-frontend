import { Box } from "@mui/material";

import "./styles/styles.css";

import PageComponent from "../../../../shared/PageComponent/PageComponent";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { useFetchUserList } from "../../organization-hooks";
import { UserColumns } from "../../constants";

const UserListing = ({ toggleModal, handleEditUser }: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle="User"
        buttonLabel="Create User"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={UserColumns(handleEditUser)}
            useCustomFetch={useFetchUserList}
            tableClassName="user-listing-style"
          />
        }
      />
    </Box>
  );
};

export default UserListing;
