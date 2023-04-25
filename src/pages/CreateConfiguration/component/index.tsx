import React, { useState } from "react";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ConfigurationForm from "./ConfigurationForm";

import { IProps } from "../constants";
import "./styles/style.css";

const CreateConfigurationComponent = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const { initialValues, validationSchema, onSubmit } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="create-button"
        color="info"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "blue",
          marginTop: "5%",
          marginLeft: "50%",
        }}
      >
        Create Configuration
      </Button>
      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "20px" }}>
        <DialogTitle
          sx={{
            fontSize: "25px",
            textDecorationLine: "underline",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Configuration Form
        </DialogTitle>
        <ConfigurationForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
};

export default CreateConfigurationComponent;
