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
      marginTop: "1rem",
      fontWeight: "bold",
    },
    button: {
      margin: "2% 4% 0% 0%",
      padding: "1rem",
      height: "2.5rem",
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
