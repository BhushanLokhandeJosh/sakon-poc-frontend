import React from "react";

import { Button} from "@mui/material";
import "./styles/styles.css";

import ModalComponent from "../../../shared/ModalComponent/component";
import SchedulerForm from "./SchedulerForm";

const CreateSchedulerComponent = (props: any) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <>
      <Button
        variant="contained"
        color="info"
        onClick={toggleModal}
        sx={{marginTop:"5%",marginLeft:'50%'}}
      >
        Create Scheduler
      </Button>

      <ModalComponent
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalTitle="Create Scheduler"
        maxwidth="md"
        modalBody={<SchedulerForm onSubmit={onSubmit} toggleModal={toggleModal}/>}
      />
      
    </>
  );
};

export default CreateSchedulerComponent;
