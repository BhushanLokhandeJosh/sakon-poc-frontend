import React from "react";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { Box } from "@mui/material";
import { DepartmentColumns } from "../../constants";
import { useFetchDepartment } from "../../department-hooks";
import { useSelector } from "react-redux";

const DepartmentListing = ({ toggleModal, handleEditDepartment }: any) => {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
   const id = loggedInUser?.id;
   console.log("UserListing",loggedInUser);
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
            queryArguments={id}
            useCustomFetch={useFetchDepartment}
          />
        }
      />
    </Box>
  );
};

export default DepartmentListing;
