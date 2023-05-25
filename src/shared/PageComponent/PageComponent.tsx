import { Box, Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import "../PageComponent/style/styles.css";

interface IProps {
  pageTitle: string;
  buttonLabel?: string;
  pageBody: ReactNode;
  pageRootClassName: string;
  pageTitleClassName: string;
  pageButtonClassName: string;
}

const PageComponent = (props: IProps) => {
  const {
    pageTitle,
    buttonLabel,
    pageBody,
    pageRootClassName,
    pageTitleClassName,
    pageButtonClassName,
  } = props;

  return (
    <>
      <div className={pageRootClassName}>
        <div className={pageTitleClassName}>{pageTitle}</div>
        {buttonLabel && (
          <Button variant="contained" className={pageButtonClassName}>
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
