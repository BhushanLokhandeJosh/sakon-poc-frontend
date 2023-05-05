import ModalComponent from "../../../shared/ModalComponent/component";
import ConfigurationForm from "./ConfigurationForm";

import { IConfigurationFormProps } from "../types";

import "./styles/styles.css";

const CreateConfigurationComponent = (props: IConfigurationFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <div>
      <button className="config-button-style" onClick={toggleModal}>
        Create Configuration
      </button>

      <ModalComponent
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalTitle="Create Configuration"
        maxwidth="md"
        modalBody={
          <ConfigurationForm onSubmit={onSubmit} toggleModal={toggleModal} />
        }
      />
    </div>
  );
};

export default CreateConfigurationComponent;
