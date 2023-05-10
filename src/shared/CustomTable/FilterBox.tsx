import "./style.css";
interface IFilterBoxProps {
  filterBody: JSX.Element;
}

const FilterBox = ({ filterBody }: IFilterBoxProps) => {
  return <div className="filter-body">{filterBody}</div>;
};

export default FilterBox;
