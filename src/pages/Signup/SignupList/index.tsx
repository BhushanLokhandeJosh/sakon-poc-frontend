import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import SignUpUserListing from "./component";
import SignUpModal from "./component/SignUpModal";

const SignupContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [signupuser, setSignupuser] = useState<any>();

  const handleSignupReset = useCallback(() => {
    if (signupuser) {
      setSignupuser(undefined);
    }
    handleToggle();
  }, [handleToggle, signupuser]);

  const handleEditSignup = useCallback(
    (value: GridCellParams) => {
      setSignupuser(value);
      handleToggle();
    },
    [handleToggle, signupuser]
  );

  return (
    <SignUpUserListing
      toggleModal={handleSignupReset}
      handleEditSignup={handleEditSignup}
    />
  );
};

export default SignupContainer;
