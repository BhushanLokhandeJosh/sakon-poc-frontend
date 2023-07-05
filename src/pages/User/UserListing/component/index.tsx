import { Box } from "@mui/material";

import "./styles/styles.css";

import PageComponent from "../../../../shared/PageComponent/PageComponent";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { useFetchUserList } from "../../user-hooks";
import { UserColumns } from "../../constants";
import { useSelector } from "react-redux";

const UserListing = ({ toggleModal, handleEditUser }: any) => {
   //@ts-ignore
   const { loggedInUser } = useSelector((state) => state.AuthReducer);
   const id = loggedInUser?.org_id;
   console.log("UserListing",id);
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
            queryArguments={id}
            useCustomFetch={useFetchUserList}
            tableClassName="user-listing-style"
          />
        }
      />
    </Box>
  );
};

export default UserListing;
