// import { AxiosError, AxiosResponse } from "axios";
// import LoginPage from "./LoginForm";
// import { toast } from "react-toastify";
// import { useLoginUser } from "../../../loginsignup-hooks";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { loginStart } from "../../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    console.log("Form Submitted", values);
    const loginCredentials = {
      email: values.email,
      password: values.password,
    };

    dispatch(loginStart(loginCredentials, navigate));
  };

  return <LoginForm onSubmitHandler={onSubmit} />;
};

export default LoginPageContainer;
