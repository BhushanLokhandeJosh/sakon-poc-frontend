import { useState } from "react";
import LoginPage from "./Login/component";
import SignupPage from "./Signup/component";
import "../../App.css";
import { Box } from "@mui/material";
import { Direction } from "react-toastify/dist/utils";

const LoginContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  const togglePage = () => {
    setShowLogin(!showLogin);
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
      {showLogin ? <LoginPage /> : <SignupPage />}
      <p>
        {showLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={togglePage} style={{ marginLeft: "2rem" }}>
          {showLogin ? "Sign up" : "Log in"}
        </button>
      </p>
    </Box>
  );
};

export default LoginContainer;
