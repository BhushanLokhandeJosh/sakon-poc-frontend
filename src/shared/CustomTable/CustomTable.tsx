import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import useModal from "../CustomHooks/useModal";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import ModalComponent from "../ModalComponent/component";
import { dataGridStyleForColumnSortArrow } from "./constant";
import "./style.css";

interface ICustomTableProps {
  columnHeader: GridColDef[];
  filterBody?: JSX.Element;
  isFilterVisible: boolean;
  filterBodyTitle?: string;
  useCustomFetch: any;
}
function CustomTable(props: ICustomTableProps) {
  const { isOpen, toggleModal } = useModal();
  const {
    columnHeader,
    filterBody,
    isFilterVisible,
    filterBodyTitle,
    useCustomFetch,
  } = props;

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");

  useEffect(() => {
    if (searchTrigger !== searchValue) {
      const delayDebounceFn = setTimeout(() => {
        setSearchTrigger(searchValue);
      }, 200);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchValue, searchTrigger, setSearchTrigger]);

  const { data, isLoading, isError } = useCustomFetch({
    searchValue: searchTrigger,
  });
  console.log(data, "sccc");

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error...</>;
  }
  return (
    <>
      <div className="input-btn-container">
        {isFilterVisible && (
          <>
            <Button variant="contained" onClick={toggleModal}>
              <FilterListIcon />
            </Button>
            {filterBody && (
              <ModalComponent
                isOpen={isOpen}
                modalBody={<FilterBox filterBody={filterBody} />}
                modalTitle={filterBodyTitle}
                toggleModal={toggleModal}
                modalStyle="filter-modal-style"
              />
            )}
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
