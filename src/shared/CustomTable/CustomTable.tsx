import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import ModalComponent from "../ModalComponent/component";

// import "./style.css";
// import { Box } from "@mui/material";

interface IProps {
  data: any;
  columnHeader: GridColDef[];
  searchValue: string;
  setSearchValue: Function;
  filterBody: JSX.Element;
}
const CustomTable = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, columnHeader, searchValue, setSearchValue, filterBody } = props;

  return (
    <>
      <div className="input-btn-container">
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FilterListIcon
            sx={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
        </button>
        <ModalComponent
          isOpen={isOpen}
          modalBody={<FilterBox filterBody={filterBody} />}
          modalTitle="Filter Configurations"
          toggleModal={() => setIsOpen((prev) => !prev)}
          modalStyle="filter-modal-style"
        />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
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
    </>
  );
};

export default CustomTable;
