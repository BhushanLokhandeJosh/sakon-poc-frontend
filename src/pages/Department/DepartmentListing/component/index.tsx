import React from "react";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { Box } from "@mui/material";
import { DepartmentColumns } from "../../constants";
import { useFetchDepartment } from "../../department-hooks";

const DepartmentListing = ({ toggleModal, handleEditDepartment }: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle="Department"
        buttonLabel="Create Department"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={DepartmentColumns(handleEditDepartment)}
            useCustomFetch={useFetchDepartment}
            tableClassName="department-listing-style"
          />
        }
      />
    </Box>
  );
};

export default DepartmentListing;
