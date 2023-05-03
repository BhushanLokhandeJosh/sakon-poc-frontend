import React from "react";
import SearchBox from "../../../shared/SearchBox/SearchBox";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import { getAllSchedulerColumns } from "../constants";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterBox from "../../../shared/FilterBox/FilterBox";
import ModalComponent from "../../../shared/ModalComponent/component";
import "./styles/style.css";
interface IProps {
  data: any;
  searchValue: string;
  setSearchValue: Function;
}
const GetAllSchedulersDataTable = (props: IProps) => {
  const { data, searchValue, setSearchValue } = props;

  return (
    <div>
      <div className="input-btn-container">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <CustomTable data={data} columnHeader={getAllSchedulerColumns} />
    </div>
  );
};

export default GetAllSchedulersDataTable;
