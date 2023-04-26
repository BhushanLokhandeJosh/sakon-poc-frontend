import { Form, Formik } from "formik";
import React from "react";

const options = [{ key: "finance", vale: "finance" }];

const FilterBox = () => {
  const initialValues = {
    name: "department",
  };
  const onsubmit = () => {
    console.log("hi");
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onsubmit}>
        <Form></Form>
      </Formik>
    </div>
  );
};

export default FilterBox;
