import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";

import useToggle from "../../../shared/CustomHooks/useToggle";

import SignUpUserListing from "./component";

const SignupContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [signUpUser, setSignUpUser] = useState<any>();

  const handleSignupReset = useCallback(() => {
    if (signUpUser) {
      setSignUpUser(undefined);
    }
    handleToggle();
  }, [signUpUser, handleToggle]);

  const handleEditSignup = useCallback(
    (value: GridCellParams) => {
      setSignUpUser(value);
      handleToggle();
    },
    [setSignUpUser]
  );

  return (
    <SignUpUserListing
      toggleModal={handleSignupReset}
      handleEditSignup={handleEditSignup}
    />
  );
};

export default SignupContainer;
