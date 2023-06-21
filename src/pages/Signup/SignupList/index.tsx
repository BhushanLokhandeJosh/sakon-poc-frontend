import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import SignUpUserListing from "./component";
import SignUpModal from "./component/SignUpModal";

const SignupContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [signupuser, setSignupuser] = useState<any>();

  const handleSignupReset = () => {
    if (signupuser) {
      setSignupuser(undefined);
    }
    handleToggle();
  };

  const handleEditSignup = (value: GridCellParams) => {
    setSignupuser(value);
    handleToggle();
  };

  return (
    <Box>
      {isOpen && (
        <SignUpModal
          isOpen={isOpen}
          toggleModal={handleSignupReset}
          signupuser={signupuser}
        />
      )}
      <SignUpUserListing
        toggleModal={handleSignupReset}
        handleEditSignup={handleEditSignup}
      />
    </Box>
  );
};

export default SignupContainer;
