import { useEffect, useState } from "react";
import useFetchAllConfigurations from "../../hooks/useFetchAllConfig";
import GetAllConfigurationComponent from "./component";

const GetAllConfigurations = () => {
  const [searchValue, setSearchValue] = useState<any>("");
  const [searchTrigger, setSearchTrigger] = useState<any>("");

  const { data, isLoading, isError } = useFetchAllConfigurations({
    searchValue: searchTrigger,
  });

  useEffect(() => {
    if (searchTrigger !== searchValue) {
      const delayDebounceFn = setTimeout(() => {
        setSearchTrigger(searchValue);
      }, 200);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchValue, searchTrigger, setSearchTrigger]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <GetAllConfigurationComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={data}
      />
    </>
  );
};

export default GetAllConfigurations;
