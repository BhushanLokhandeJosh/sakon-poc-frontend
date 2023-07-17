import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";

import useToggle from "../../../shared/CustomHooks/useToggle";

import SignUpUserListing from "./component";

const SignupContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [signupuser, setSignupuser] = useState<any>();

  const handleSignupReset = useCallback(() => {
    if (signupuser) {
      setSignupuser(undefined);
    }
    handleToggle();
  }, [signupuser, handleToggle]);

  const handleEditSignup = useCallback(
    (value: GridCellParams) => {
      setSignupuser(value);
      handleToggle();
    },
    [setSignupuser]
  );

  return (
    <SignUpUserListing
      toggleModal={handleSignupReset}
      handleEditSignup={handleEditSignup}
    />
  );
};

export default SignupContainer;
