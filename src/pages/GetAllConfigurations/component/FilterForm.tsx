import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import MultiSelect from "../../../shared/FormComponents/MultiSelect";
import CustomSelect from "../../../shared/FormComponents/CustomSelect";
import { Button } from "@mui/material";
import { useGetDepartments } from "../../../hooks/useFetchAllConfig";
import { ConfigFilterFormInitialValues } from "../types";

interface FilterFormProps {
  initialValues: ConfigFilterFormInitialValues;
  handleSubmit: (values: ConfigFilterFormInitialValues) => void;
}

function FilterForm(props: FilterFormProps) {
  const { initialValues, handleSubmit } = props;
  const { data, isLoading, isError } = useGetDepartments();
  console.log(
    "in a filter component ",
    initialValues,
    "handleSubmit",
    handleSubmit
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error...</>;
  }

  return (
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
  );
}

export default FilterForm;
