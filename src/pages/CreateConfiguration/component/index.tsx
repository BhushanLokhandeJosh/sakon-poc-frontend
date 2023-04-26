import React from "react";
import { Button } from "@mui/material";

import ModalComponent from "../../../shared/ModalComponent/component";

import ConfigurationForm from "./ConfigurationForm";

import { ConfigurationProps } from "../types";

import "./styles/styles.css";

const CreateConfigurationComponent = (props: ConfigurationProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <div>
      <Button
        variant="contained"
        color="info"
        onClick={toggleModal}
        sx={{
          marginTop:"5%",
          marginLeft:"50%"
        }}
      >
        Create Configuration
      </Button>

      <ModalComponent
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalTitle="Create Configuration"
        maxwidth="md"
        modalBody={<ConfigurationForm onSubmit={onSubmit} />}
      />
    </div>
  );
};

export default CreateConfigurationComponent;
