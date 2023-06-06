import React from "react";
import { useParams } from "react-router-dom";

const EditSchedule = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <h1>Heyy {params.id}</h1>
    </div>
  );
};

export default EditSchedule;
