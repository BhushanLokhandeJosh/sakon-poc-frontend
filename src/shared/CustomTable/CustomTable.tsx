import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, Button } from "@mui/material";

import SearchBox from "./SearchBox";
import { dataGridStyleForColumnSortArrow } from "./constant";
import { IFormikProps, IObjectWithAnyFields, MAX_WIDTH } from "../types";

import "./style.css";

import FormikModalComponent from "../FormikModalComponent/component";
import useToggle from "../CustomHooks/useToggle";

interface ICustomTableProps {
  columnHeaders: GridColDef[];
  useCustomFetch: any;
  initialValues?: any;
  validationSchema?: any;
  tableClassName?: string;
  /**
   * pass id or any other parameters to the query to fetch query related data.
   */
  queryArguments?: IObjectWithAnyFields;
  searchConfiguration: {
    isSearchBoxVisible: boolean;
    searchBoxClassName?: string;
    searchBoxFilterBoxClassName?: string;
  };
  filterConfiguration?:
    | {
        isFilterVisible: true;
        filterBodyTitle?: string;
        getFormFilterBody: (formik: IFormikProps<any>) => JSX.Element;
      }
    | {
        isFilterVisible: false;
        filterBodyTitle?: never;
        getFormFilterBody?: never;
      };
}

const CustomTable = (props: ICustomTableProps) => {
  const {
    columnHeaders,
    useCustomFetch,
    initialValues,
    validationSchema,
    tableClassName,
    searchConfiguration,
    filterConfiguration,
    queryArguments,
  } = props;

  //for search properties.
  const isSearchBoxVisible = searchConfiguration?.isSearchBoxVisible || false;
  const searchBoxClassName =
    searchConfiguration?.searchBoxClassName || "search-style";
  const searchBoxFilterBoxClassName =
    searchConfiguration?.searchBoxFilterBoxClassName ||
    "search-filter-container";

  //for filter properties.
  const isFilterVisible = filterConfiguration?.isFilterVisible || false;
  const filterBodyTitle = filterConfiguration?.filterBodyTitle || "";
  const getFormFilterBody = filterConfiguration?.getFormFilterBody;

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
    queryArguments,
  });

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error...</>;
  }

  return (
    <Box>
      <div className={searchBoxFilterBoxClassName}>
        {isFilterVisible && getFormFilterBody && (
          <Box>
            <Button variant="contained" onClick={handleToggle}>
              <FilterListIcon />
            </Button>
            <FormikModalComponent
              isOpen={isOpen}
              initialValues={initialValues}
              //TODO :->  WE WILL HANDLE WHOLE FILTER BOX IN SEPRATE COMPONENT IN WHICH WE WILL
              //REMOVE VALIDATIONSCHEMA OR KEEP IT OPTIONAL AS PER REQUIREMENTS.
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              toggleModal={handleToggle}
              modalTitle={filterBodyTitle}
              formClassName="form-align-style"
              modalClassName="modal-align-style"
              maxwidth={MAX_WIDTH.SM}
              getFormBody={getFormFilterBody}
              submitButtonLabel="Apply"
            />
          </Box>
        )}
        {isSearchBoxVisible && (
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchBoxStyle={searchBoxClassName}
          />
        )}
      </div>

      <div className={tableClassName}>
        <DataGrid
          disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
          disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
          rows={data}
          columns={columnHeaders}
          sx={dataGridStyleForColumnSortArrow}
        />
      </div>
    </Box>
  );
};
CustomTable.defaultProps = {
  tableClassName: "table-default-style",
};
export default CustomTable;