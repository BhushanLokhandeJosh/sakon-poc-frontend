import "../../App.css";
import { Box, Button } from "@mui/material";

import useToggle from "../../shared/CustomHooks/useToggle";
import LoginPageContainer from "./Login/component";
import SignupPageContainer from "./Signup/component";

const LoginContainer = () => {
  const { isOpen, handleToggle } = useToggle();

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
      {!isOpen ? (
        <LoginPageContainer />
      ) : (
        <SignupPageContainer toggleModal={togglePage} isOpen={isOpen} />
      )}
      <p style={{ marginTop: "1rem", color: "black" }}>
        {!isOpen ? "Don't have an account?" : "Already have an account?"}
        <Button
          variant="contained"
          onClick={togglePage}
          style={{ marginLeft: "2rem" }}
        >
          {!isOpen ? "Sign up" : "Log in"}
        </Button>
      </p>
    </Box>
  );
};

export default LoginContainer;
