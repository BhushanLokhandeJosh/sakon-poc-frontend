import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import ModalComponent from "../ModalComponent/component";
import { Button } from "@mui/material";
import useModal from "../CustomHooks/useModal";
import "./style.css";
// import "./style.css";
// import { Box } from "@mui/material";

interface IProps<T> {
  data: T[];
  columnHeader: GridColDef[];
  searchValue: string;
  setSearchValue: Function;
  filterBody: JSX.Element;
}
function CustomTable<T>(props: IProps<T>) {
  const { isOpen, toggleModal } = useModal();
  const { data, columnHeader, searchValue, setSearchValue, filterBody } = props;

  return (
    <>
      <div className="input-btn-container">
        <Button variant="contained" onClick={toggleModal}>
          <FilterListIcon />
        </Button>
        <ModalComponent
          isOpen={isOpen}
          modalBody={<FilterBox filterBody={filterBody} />}
          modalTitle="Filter Configurations"
          toggleModal={toggleModal}
          modalStyle="filter-modal-style"
        />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="datagrid-container">
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
}

export default CustomTable;
