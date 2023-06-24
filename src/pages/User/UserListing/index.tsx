import useToggle from "../../../shared/CustomHooks/useToggle";

// import { IUserPayload } from "./types";
import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import UserListing from "./component";
import UserModal from "./component/UserModal";

const UserContainer = ({ loggedInUser }: any) => {
  const { isOpen, handleToggle } = useToggle();
  const [user, setUser] = useState<any>();

  const handleUserReset = () => {
    if (user) {
      setUser(undefined);
    }
    handleToggle();
  };

  const handleEditUser = (value: GridCellParams) => {
    setUser(value);
    handleToggle();
  };

  return (
    <Box>
      {isOpen && (
        <UserModal
          isOpen={isOpen}
          toggleModal={handleUserReset}
          user={user}
          loggedInUser={loggedInUser}
        />
      )}
      <UserListing
        toggleModal={handleUserReset}
        handleEditUser={handleEditUser}
      />
    </Box>
  );
};

export default UserContainer;
