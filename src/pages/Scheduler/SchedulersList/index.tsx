import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";

import useToggle from "../../../shared/CustomHooks/useToggle";
import SchedulerModal from "./component/SchedulerModal";
import SchedulerComponent from "./component/SchedulerComponent";

const SchedulersContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [scheduler, setScheduler] = useState<any>();

  //Used
  const handleToggleWithSchedulerReset = () => {
    handleToggle();
    if (scheduler) {
      setScheduler(undefined);
    }
  };

  const handleEditScheduler = (value: GridCellParams) => {
    setScheduler(value);
    handleToggle();
  };

  return (
    <>
      {isOpen && (
        <SchedulerModal
          isOpen={isOpen}
          toggleModal={handleToggleWithSchedulerReset}
          scheduler={scheduler}
        />
      )}
      <SchedulerComponent
        toggleModal={handleToggleWithSchedulerReset}
        handleEditScheduler={handleEditScheduler}
      />
    </>
  );
};

export default SchedulersContainer;
