import React from "react";
import "./style.css";

interface IProps {
  searchValue?: string;
  setSearchValue: Function;
}

const SearchBox = (props: IProps) => {
  const { searchValue, setSearchValue } = props;
  return (
    <div>
      <input
        className="search"
        type="text"
        value={searchValue}
        placeholder="Search..."
        onChange={(e: any) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
