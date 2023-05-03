import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllConfigColumns } from "../constants";
import "./styles/style.css";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import useFetchAllConfigurations from "../../../hooks/useFetchAllConfig";
import SearchBox from "../../../shared/SearchBox/SearchBox";
import FilterBox from "../../../shared/FilterBox/FilterBox";
import FilterListIcon from "@mui/icons-material/FilterList";
import ModalComponent from "../../../shared/ModalComponent/component";

interface IProps {
  data: any;
  searchValue: string;
  setSearchValue: Function;
}

export default function GetAllConfDataTable(props: IProps) {
  const { data, searchValue, setSearchValue } = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const initialValues = {
    schedulingStatus: "",
    department: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      {/* <div className="input-btn-container"> */}
      {/* <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FilterListIcon
            sx={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
        </button>
        <ModalComponent
          isOpen={isOpen}
          modalBody={
            <FilterBox
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
          }
          modalTitle="Filter Configurations"
          toggleModal={() => setIsOpen((prev) => !prev)}
          modalStyle="filter-modal-style"
        /> */}
      {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      {/* </div> */}
      <CustomTable
        data={data}
        columnHeader={getAllConfigColumns}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
  // return (
  // <div style={{ height: 600, width: "98%" }}>
  // <DataGrid
  // disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
  // disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
  // rows={data}
  // columns={getAllConfigColumns}
  // // pageSize={5}
  // // rowsPerPageOptions={[5]}
  // />
  // </div>
  // );
}
