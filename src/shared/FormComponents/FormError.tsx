import "./styles/styles.css";

interface IErrorComponentProps {
  children?: string;
}
const FormError = (props: IErrorComponentProps) => {
  const { children: message } = props;
  return <div className="error-message">{message}</div>;
};

export default FormError;
