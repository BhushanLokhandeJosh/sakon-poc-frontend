import React, { ReactElement } from "react";
import "./styles/style.css";


interface IProps {
  children ?:string;
}

const FormError = (props:IProps) => {
  const {children} = props;
  return <div className="error-message">{children}</div>;
};

export default FormError;
