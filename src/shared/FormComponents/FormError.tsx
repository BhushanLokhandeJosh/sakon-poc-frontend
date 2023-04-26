import { ErrorComponentProps } from "./types";

import "./styles/styles.css";

const FormError = (props:ErrorComponentProps) => {
  const {children} = props;
  return <div className="error-message">{children}</div>;
};

export default FormError;

