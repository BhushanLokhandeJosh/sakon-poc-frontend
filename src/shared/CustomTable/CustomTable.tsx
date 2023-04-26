import {
  DataGrid,
  FilterColumnsArgs,
  GetColumnForNewFilterArgs,
  GridColDef,
  GridToolbar,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React from "react";
import { getAllConfigColumns } from "../../pages/GetAllConfigurations/constants";
import { Box } from "@mui/material";
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

  const filterColumns = ({
    field,
    columns,
    currentFilters,
  }: FilterColumnsArgs) => {
    // remove already filtered fields from list of columns
    const filteredFields = currentFilters?.map((item) => item.field);
    return columns
      .filter(
        (colDef) =>
          colDef.filterable &&
          (colDef.field === field || !filteredFields.includes(colDef.field))
      )
      .map((column) => column.field);
  };

  const getColumnForNewFilter = ({
    currentFilters,
    columns,
  }: GetColumnForNewFilterArgs) => {
    const filteredFields = currentFilters?.map(({ field }) => field);
    const columnForNewFilter = columns
      .filter(
        (colDef) => colDef.filterable && !filteredFields.includes(colDef.field)
      )
      .find((colDef) => colDef.filterOperators?.length);
    return columnForNewFilter?.field ?? null;
  };

  return (
    <div style={{ height: 600, width: "98%" }}>
      <DataGrid
        {...data} //Not needed
        disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
        disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
        rows={data}
        columns={columnHeader}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          filterPanel: {
            filterFormProps: {
              filterColumns,
            },
            getColumnForNewFilter,
          },
        }}
        disableColumnSelector // Used to disable column selector.
        disableDensitySelector // Used to disable density selector.

        /*
        slotProps={{
          filterPanel: {
            filterFormProps: {
              //   filterColumns,
            },
            // getColumnForNewFilter,
          },
        }}
        slots={{ toolbar: QuickSearchToolbar }} //  =>Used for searching on UI using material UI library
        */

        // pageSize={5}
        // rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default CustomTable;
