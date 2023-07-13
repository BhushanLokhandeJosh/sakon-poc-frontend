import { Box, Button } from "@mui/material";

import useToggle from "../../shared/CustomHooks/useToggle";

import LoginPageContainer from "./Login/component";
import SignupPageContainer from "./Signup/component";

const LoginContainer = () => {
  const { isOpen:isLoginPage, handleToggle } = useToggle();

  const togglePage = () => {
    handleToggle();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {!isLoginPage ? (
        <LoginPageContainer />
      ) : (
        <SignupPageContainer toggleModal={togglePage} isOpen={isLoginPage} />
      )}
      <Box sx={{marginLeft:"15rem",marginTop:"2rem"}}>
        {!isLoginPage ? "Don't have an account?" : "Already have an account?"}
        <Button
          variant="contained"
          onClick={togglePage}
          style={{ marginLeft: "2rem" }}
        >
          {!isLoginPage ? "Sign up" : "Log in"}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginContainer;
