import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import "./style.css";
import MultiSelect from "../FormComponents/MultiSelect";
import { useGetDepartments } from "../../hooks/useFetchAllConfig";
import CustomSelect from "../FormComponents/CustomSelect";
import FilterForm from "./FilterForm";

interface IFilterBoxProps {
  filterBody: JSX.Element;
}

const FilterBox = ({ filterBody }: IFilterBoxProps) => {
  return <div className="filter-body">{filterBody}</div>;
};

export default FilterBox;
