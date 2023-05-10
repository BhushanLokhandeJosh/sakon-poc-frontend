import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import ModalComponent from "../ModalComponent/component";
import { dataGridStyleForColumnSortArrow } from "./constant";
import "./style.css";
import FormikModalComponent from "../FormikModalComponent/component";
import useToggle from "../CustomHooks/useToggle";

interface ICustomTableProps {
  columnHeader: GridColDef[];
  filterBody?: JSX.Element;
  isFilterVisible: boolean;
  filterBodyTitle?: string;
  useCustomFetch: any;
  filterData?: any;
}
function CustomTable(props: ICustomTableProps) {
  const { isOpen, handleToggle } = useToggle();
  const {
    columnHeader,
    filterBody,
    isFilterVisible,
    filterBodyTitle,
    useCustomFetch,
    filterData,
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
    departmentValue: filterData?.department,
    schedulingStatusValue: filterData?.schedulingStatus === "scheduled",
  });

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
            <Button variant="contained" onClick={handleToggle}>
              <FilterListIcon />
            </Button>
            {/* {filterBody && (
              <ModalComponent
                isOpen={isOpen}
                modalBody={<FilterBox filterBody={filterBody} />}
                modalTitle={filterBodyTitle}
                toggleModal={handleToggle}
                modalPosition="filter-modal-style"
              />
            )} */}
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
