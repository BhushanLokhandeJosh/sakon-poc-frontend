import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { dataGridStyleForColumnSortArrow } from "./constant";
import SearchBox from "./SearchBox";
import ModalComponent from "../ModalComponent/component";
import "./style.css";
import FormikModalComponent from "../FormikModalComponent/component";
import useToggle from "../CustomHooks/useToggle";
import { MAX_WIDTH } from "../types";
import { ConfigFilterFormInitialValues } from "../../pages/GetAllConfigurations/types";

interface ICustomTableProps {
  columnHeaders: GridColDef[];
  isFilterVisible: boolean;
  filterBodyTitle?: string;
  useCustomFetch: any;
  filterData?: any;
  toggleFilterModal?: any;
  getFormFilterBody?: any;
  isOpen?: any;
  initialValues?: any;
  onSubmit?: any;
  handleSubmit?: any;
}

const useStyles = makeStyles({
  datagridContainer: {
    height: "520px",
    width: "auto",
    marginRight: "20px",
  },
});

const CustomTable = (props: ICustomTableProps) => {
  const {
    columnHeaders,
    isFilterVisible,
    useCustomFetch,
    toggleFilterModal,
    getFormFilterBody,
    initialValues,
  } = props;

  const [searchValue, setSearchValue] = useState<string>(""); //Used whenever user try to search anything then automatically useEffect runs and also again hit customFetch to call api to get the data.
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const classes = useStyles();
  const { isOpen, handleToggle } = useToggle();
  const [filterData, setFilterData] = useState<any>({});

  const onSubmit = (values: ConfigFilterFormInitialValues) => {
    setFilterData({
      departmentValue: values?.department,
      schedulingStatusValue: values?.schedulingStatus === "scheduled",
    });
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
    ...filterData,
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
              onSubmit={onSubmit}
              toggleModal={toggleFilterModal}
              modalTitle="filter config"
              formClassName="form-align-style"
              modalClassName="modal-align-style"
              maxwidth={MAX_WIDTH.SM}
              getFormBody={getFormFilterBody}
              submitButtonLabel="Apply"
            />
          </>
        )}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={classes.datagridContainer}>
        <DataGrid
          disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
          disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
          rows={data}
          columns={columnHeaders}
          sx={dataGridStyleForColumnSortArrow}
        />
      </div>
    </>
  );
};

export default CustomTable;
