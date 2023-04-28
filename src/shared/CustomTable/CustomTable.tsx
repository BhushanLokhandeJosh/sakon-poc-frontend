import {
  DataGrid,
  FilterColumnsArgs,
  GetColumnForNewFilterArgs,
  GridColDef,
  GridToolbar,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import { getAllConfigColumns } from "../../pages/GetAllConfigurations/constants";
import { Box, Hidden } from "@mui/material";
import useFetchAllConfigurations from "../../hooks/useFetchAllConfig";
// import "./style.css";
// import { Box } from "@mui/material";

interface IProps {
  data: any;
  columnHeader: GridColDef[];
}
const CustomTable = (props: IProps) => {
  const { data, columnHeader } = props;

  /*
  function QuickSearchToolbar() {
  return (
  <Box
  sx={{
  p: 0.5,
  pb: 0,
  }}
  >
  <GridToolbarQuickFilter />
  </Box>
  );
  }
  */
  /*
  const filterColumns = ({
    field,
    columns,
    currentFilters,
  }: FilterColumnsArgs) => {
    // remove already filtered fields from list of columns
    const filteredFields = currentFilters?.map((item) => item.field);
    return columns
      .filter(
        (colDef: any) =>
          colDef.filterable &&
          (colDef.field === field || !filteredFields.includes(colDef.field))
      )
      .map((column: any) => column.field);
  };

  const getColumnForNewFilter = ({
    currentFilters,
    columns,
  }: GetColumnForNewFilterArgs) => {
    const filteredFields = currentFilters?.map(({ field }) => field);
    const columnForNewFilter = columns
      .filter(
        (colDef: any) =>
          colDef.filterable && !filteredFields.includes(colDef.field)
      )
      .find((colDef: any) => colDef.filterOperators?.length);
    return columnForNewFilter?.field ?? null;
  }; 
  */

  // const [searchValue, setSearchValue] = useState<string>("");
  // const [searchTrigger, setSearchTrigger] = useState<any>("");

  // const { data, isLoading, isError } = useFetchAllConfigurations({
  //   searchValue: searchTrigger,
  // });

  // console.log("sssss", data);

  return (
    <div style={{ height: "520px", width: "auto", marginRight: "20px" }}>
      <DataGrid
        // {...data} //Not needed
        disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
        disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
        rows={data}
        columns={columnHeader}
        // slots={{ toolbar: GridToolbar }}
        // slotProps={{
        // filterPanel: {
        // filterFormProps: {
        // filterColumns,
        // },
        // getColumnForNewFilter,
        // },
        // }}
        // disableColumnSelector // Used to disable column selector.
        // disableDensitySelector // Used to disable density selector.
        sx={{
          ".MuiDataGrid-iconButtonContainer": {
            visibility: "visible",
          },
          ".MuiDataGrid-sortIcon": {
            opacity: "inherit !important",
          },
        }}
        // showCellVerticalBorder
        // showColumnVerticalBorder

        /*
  slotProps={{
  filterPanel: {
  filterFormProps: {
  // filterColumns,
  },
  // getColumnForNewFilter,
  },
  }}
  slots={{ toolbar: QuickSearchToolbar }} // =>Used for searching on UI using material UI library
  */

        // pageSize={1}
        // rowsPerPageOptions={[2]}
      />
    </div>
  );
};

export default CustomTable;
