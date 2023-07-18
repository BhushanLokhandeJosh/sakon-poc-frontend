import React from "react";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { Box } from "@mui/material";
import { BUTTON_LABEL, PAGE_TITLE, departmentColumns } from "../../constants";
import { useFetchDepartment } from "../../department-hooks";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/reducer/rootReducer";

const DepartmentListing = ({ toggleModal, handleEditDepartment }: any) => {
  const { loggedInUser } = useSelector(
    (state: IRootState) => state.AuthReducer
  );
  const id = loggedInUser?.id;

  return (
    <PageComponent
      pageTitle={PAGE_TITLE}
      buttonLabel={BUTTON_LABEL}
      handleButtonAction={toggleModal}
      pageBody={
        <CustomTable
          searchConfiguration={{ isSearchBoxVisible: true }}
          columnHeaders={departmentColumns(handleEditDepartment)}
          queryArguments={id}
          useCustomFetch={useFetchDepartment}
        />
      }
    />
  );
};

export default DepartmentListing;
