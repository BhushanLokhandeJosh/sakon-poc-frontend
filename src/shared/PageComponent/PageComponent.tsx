import { Button } from "@mui/material";
import { ReactNode } from "react";

import "./style/styles.css";
interface IProps {
  pageTitle: string;
  buttonLabel?: string;
  pageBody: ReactNode;
  pageHeadingStyle: string;
  pageTitleStyle: string;
  pageButtonStyle: string;
}

const PageComponent = (props: IProps) => {
  const {
    pageTitle,
    buttonLabel,
    pageBody,
    pageHeadingStyle,
    pageTitleStyle,
    pageButtonStyle,
  } = props;
  return (
    <div>
      <div className={pageHeadingStyle}>
        <h1 className={pageTitleStyle}>{pageTitle}</h1>
        {buttonLabel && (
          <Button variant="contained" className={pageButtonStyle}>
            {buttonLabel}
          </Button>
        )}
      </div>
      {pageBody}
    </div>
  );
};

PageComponent.defaultProps = {
  pageRootStyle: "page-heading-style",
  pageTitleStyle: "page-title-style",
  pageButtonStyle: "page-button-style",
};

export default PageComponent;
