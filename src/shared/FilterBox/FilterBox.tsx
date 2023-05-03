import React from "react";
import { useGetDepartments } from "../../hooks/useFetchAllConfig";
import "./style.css";
import Select from "react-select";
import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import MultiSelect from "../FormComponents/MultiSelect";
import CustomSelect from "../FormComponents/CustomSelect";

const FilterBox = () => {
  //   const { data } = props;
  const { data, isLoading, isError } = useGetDepartments();
  console.log("in a filter ", data);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error...</>;
  }

  const initialValues = {
    schedulingStatus: "",
    department: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ height: "200px" }}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <div className="scheduling-container">
              <div>
                <label htmlFor="schedulingStatus">Scheduling Status : </label>
              </div>
              <div className="status-container">
                <label>
                  <Field
                    type="radio"
                    name="schedulingStatus"
                    value="scheduled"
                  ></Field>
                  Scheduled
                </label>
              </div>
              <div>
                <label>
                  <Field
                    type="radio"
                    name="schedulingStatus"
                    value="not-scheduled"
                  ></Field>
                  Not Scheduled
                </label>
              </div>
            </div>
          </div>

          <div className="department-container">
            <div>
              <label htmlFor="department"> Department :</label>
            </div>
            <div className="select-box-container">
              <MultiSelect
                options={data}
                placeholder="Select One"
                component={CustomSelect}
                isMulti={false}
                name="department"
              />
            </div>
          </div>

          <div className="reset-submit">
            <Button type="reset" color="error" variant="contained">
              Reset
            </Button>
            <Button type="submit" variant="contained">
              Apply
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBox;
