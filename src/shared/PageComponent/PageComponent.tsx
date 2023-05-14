import { Box, Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  pageTitle: string;
  buttonLabel?: string;
  pageBody: ReactNode;
}

const PageComponent = (props: IProps) => {
  const { pageTitle, buttonLabel, pageBody } = props;
  const styles = {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      marginTop: "15px",
      fontWeight: "15px",
    },
    button: {
      margin: "2% 4% 0% 0%",
      padding: "10px",
      height: "30px",
    },
  };

  return (
    <Box>
      <Box sx={styles.root}>
        <Typography variant="h4" sx={styles.title}>
          {pageTitle}
        </Typography>

        {buttonLabel && (
          <Button variant="contained" sx={styles.button}>
            {buttonLabel}
          </Button>
        )}
      </Box>
      {pageBody}
    </Box>
  );
};

export default PageComponent;
