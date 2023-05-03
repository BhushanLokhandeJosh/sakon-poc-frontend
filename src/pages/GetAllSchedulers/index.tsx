import React, { useEffect, useState } from "react";
import { useFetchAllSchedulers } from "../../hooks/useFetchAllSchedulers";
import GetAllSchedulerComponent from "./component";

const GetAllSchedulers = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const { data, isLoading, isError } = useFetchAllSchedulers({
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

  console.log(data);

  return (
    <>
      <GetAllSchedulerComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={data}
      />
    </>
  );
};

export default GetAllSchedulers;
