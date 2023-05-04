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
import FilterForm from "../../../shared/FilterBox/FilterForm";

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
      <CustomTable
        columnHeader={getAllConfigColumns}
        filterBody={
          <FilterForm
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        }
        {...props}
      />
    </div>
  );
}
