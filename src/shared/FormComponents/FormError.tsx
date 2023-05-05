import "./styles/styles.css";

interface IErrorComponentProps {
  message?: string;
}

const FormError = (props: IErrorComponentProps) => {
  const { message } = props;
  return <div className="error-message">{message}</div>;
};

export default FormError;
