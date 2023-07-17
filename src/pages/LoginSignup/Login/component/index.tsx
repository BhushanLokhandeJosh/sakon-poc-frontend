import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { loginStart } from "../../../../redux/actions/authActions";
import { ILoginPayload } from "../types";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: ILoginPayload) => {
    const loginCredentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginStart(loginCredentials));
  };

  return <LoginForm onSubmitHandler={onSubmit} />;
};

export default LoginPageContainer;
