import { Button } from "@mui/material";
import { ReactNode } from "react";
import "../PageComponent/style/styles.css";

interface IProps {
  pageTitle?: string;
  buttonLabel?: string;
  pageBody?: ReactNode;
  pageRootClassName?: string;
  pageTitleClassName?: string;
  pageButtonClassName?: string;
  handleButtonAction?: () => void;
}

const PageComponent = (props: IProps) => {
  const {
    pageTitle,
    buttonLabel,
    pageBody,
    pageRootClassName,
    pageTitleClassName,
    pageButtonClassName,
    handleButtonAction,
  } = props;

  return (
    <>
      <div className={pageRootClassName}>
        <div className={pageTitleClassName}>{pageTitle}</div>
        {buttonLabel && (
          <Button
            sx={{ margin: "2% 2% -4%", padding: "1%" }}
            variant="contained"
            className={pageButtonClassName}
            onClick={handleButtonAction}
          >
            {buttonLabel}
          </Button>
        )}
      </div>
      {pageBody}
    </>
  );
};

PageComponent.defaultProps = {
  pageRootClassName: "root",
  pageTitleClassName: "title",
  pageButtonClassName: "button",
};

export default PageComponent;
