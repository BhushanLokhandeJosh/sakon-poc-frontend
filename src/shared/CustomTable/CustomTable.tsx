import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IProps {
  data: any;
  columnHeader: GridColDef[];
}
const CustomTable = (props: IProps) => {
  const { data, columnHeader } = props;

  return (
    <div style={{ height: "520px", width: "auto", marginRight: "20px" }}>
      <DataGrid
        // {...data} //Not needed
        disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
        disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
        rows={data}
        columns={columnHeader}
        sx={{
          ".MuiDataGrid-iconButtonContainer": {
            visibility: "visible",
          },
          ".MuiDataGrid-sortIcon": {
            opacity: "inherit !important",
          },
        }}
      />
    </div>
  );
};

export default CustomTable;
