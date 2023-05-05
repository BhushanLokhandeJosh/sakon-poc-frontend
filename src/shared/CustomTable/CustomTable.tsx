import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import useModal from "../CustomHooks/useModal";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import ModalComponent from "../ModalComponent/component";
import { dataGridStyleForColumnSortArrow } from "./constant";
import "./style.css";

interface ICustomTableProps<T> {
  data: T[];
  columnHeader: GridColDef[];
  searchValue: string;
  setSearchValue: Function;
  filterBody: JSX.Element;
  isFilterVisible: boolean;
  filterBodyTitle?: string;
}
function CustomTable<T>(props: ICustomTableProps<T>) {
  const { isOpen, toggleModal } = useModal();
  const {
    data,
    columnHeader,
    searchValue,
    setSearchValue,
    filterBody,
    isFilterVisible,
    filterBodyTitle,
  } = props;

  return (
    <>
      <div className="input-btn-container">
        {isFilterVisible && (
          <>
            <Button variant="contained" onClick={toggleModal}>
              <FilterListIcon />
            </Button>
            <ModalComponent
              isOpen={isOpen}
              modalBody={<FilterBox filterBody={filterBody} />}
              modalTitle={filterBodyTitle}
              toggleModal={toggleModal}
              modalStyle="filter-modal-style"
            />
          </>
        )}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="datagrid-container">
        <DataGrid
          disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
          disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
          rows={data}
          columns={columnHeader}
          sx={dataGridStyleForColumnSortArrow}
        />
      </div>
    </>
  );
}

export default CustomTable;
