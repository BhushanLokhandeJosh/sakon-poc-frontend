import { Button } from "@mui/material";
import { ReactNode } from "react";

import "./style/styles.css";
interface IProps {
  pageTitle: string;
  buttonLabel?: string;
  pageBody: ReactNode;
  pageHeadingClassName: string;
  pageTitleClassName: string;
  pageButtonClassName: string;
}

const PageComponent = (props: IProps) => {
  const {
    pageTitle,
    buttonLabel,
    pageBody,
    pageHeadingClassName,
    pageTitleClassName,
    pageButtonClassName,
  } = props;
  return (
    <div>
      <div className={pageHeadingClassName}>
        <h1 className={pageTitleClassName}>{pageTitle}</h1>
        {buttonLabel && (
          <Button variant="contained" className={pageButtonClassName}>
            {buttonLabel}
          </Button>
        )}
      </div>
      {pageBody}
    </div>
  );
};

PageComponent.defaultProps = {
  pageRootClassName: "page-heading",
  pageTitleClassName: "page-title",
  pageButtonClassName: "page-button",
};

export default PageComponent;
