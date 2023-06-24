// import { AxiosError, AxiosResponse } from "axios";
// import LoginPage from "./LoginForm";
// import { toast } from "react-toastify";
// import { useLoginUser } from "../../../loginsignup-hooks";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { loginStart } from "../../../../redux/actions/action";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  // const onSuccess = (value: AxiosResponse) => {
  //   toast.success("User Login Added Successfully...");
  // };

  // const onError = (values: AxiosError) => {
  //   toast.error(values.message);
  // };

  // const { mutate: loginUser } = useLoginUser({
  //   onSuccess,
  //   onError,
  // });

  const onSubmit = (values: any) => {
    console.log("Form Submitted", values);
    const loginCredentials = {
      email: values.email,
      password: values.password,
    };

    dispatch(loginStart(loginCredentials));

    // loginUser(values);
  };

  return <LoginForm onSubmitHandler={onSubmit} />;
};

export default LoginPageContainer;
