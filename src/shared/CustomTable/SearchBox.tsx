import "./style.css";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
  searchBoxStyle: string;
}

const SearchBox = (props: IProps) => {
  const { searchValue, setSearchValue, searchBoxStyle } = props;

  return (
    <input
      className={searchBoxStyle}
      type="text"
      value={searchValue}
      placeholder="Search..."
      onChange={(e: any) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBox;
