import "./style.css";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
}

const SearchBox = (props: IProps) => {
  const { searchValue, setSearchValue } = props;

  return (
    <input
      className="filter-style"
      type="text"
      value={searchValue}
      placeholder="Search..."
      onChange={(e: any) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBox;
