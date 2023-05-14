import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, Button } from "@mui/material";

import SearchBox from "./SearchBox";
import { dataGridStyleForColumnSortArrow } from "./constant";
import { IObjectWithAnyFields, MAX_WIDTH } from "../types";

import "./style.css";

import FormikModalComponent from "../FormikModalComponent/component";
import useToggle from "../CustomHooks/useToggle";

interface ICustomTableProps {
  isFilterVisible: boolean;
  columnHeaders: GridColDef[];
  filterBodyTitle?: string;
  useCustomFetch: any;
  initialValues?: any;
  validationSchema?: any;
  getFormFilterBody?: any;
}

const CustomTable = (props: ICustomTableProps) => {
  const {
    isFilterVisible,
    columnHeaders,
    filterBodyTitle,
    useCustomFetch,
    initialValues,
    validationSchema,
    getFormFilterBody,
  } = props;

  const [searchValue, setSearchValue] = useState<string>(""); //Used whenever user try to search anything then automatically useEffect runs and also again hit customFetch to call api to get the data.
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const { isOpen, handleToggle } = useToggle();
  const [filterData, setFilterData] = useState<any>({});

  const onSubmit = (values: IObjectWithAnyFields) => {
    setFilterData(values);
    handleToggle();
  };

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
    filterData,
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
            <FormikModalComponent
              isOpen={isOpen}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              toggleModal={handleToggle}
              modalTitle={filterBodyTitle}
              formClassName="form-align-style"
              modalClassName="modal-align-style"
              maxwidth={MAX_WIDTH.SM}
              getFormBody={getFormFilterBody}
              showResetButton={true}
              submitButtonLabel="Apply"
            />
          </>
        )}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <Box sx={{ height: "650px", width: "auto", marginRight: "20px" }}>
        <DataGrid
          disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
          disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
          rows={data}
          columns={columnHeaders}
          sx={dataGridStyleForColumnSortArrow}
        />
      </Box>
    </>
  );
};

export default CustomTable;
