import React from "react";
import "./style.css";
import { makeStyles } from "@mui/styles";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
}

const styles = makeStyles({
  search: {
    padding: "8px",
    marginRight: "5px",
  },
});

const SearchBox = (props: IProps) => {
  const { searchValue, setSearchValue } = props;
  const classes = styles();
  return (
    <input
      className={classes.search}
      type="text"
      value={searchValue}
      placeholder="Search..."
      onChange={(e: any) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBox;
