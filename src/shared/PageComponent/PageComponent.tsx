import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  pageTitle: string;
  buttonLable?: string | boolean;
  pageBody?: ReactNode;
  //   searchValue: string;
  //   setSearchValue: Function;
  //   data: any;
}
const PageComponent = (props: IProps) => {
  const { pageTitle, buttonLable, pageBody } = props;
  return (
    //todo work on mtrl ui css
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontWeight: "15px" }}>{pageTitle}</h2>

        {buttonLable ? (
          <Button
            variant="contained"
            style={{ margin: "2% 4% 0% 0%", padding: "10px", height: "30px" }}
          >
            {buttonLable}
          </Button>
        ) : (
          false
        )}
      </div>

      {/*todo what should we render when button lable is not there */}
      {pageBody}
    </div>
  );
};

export default PageComponent;
