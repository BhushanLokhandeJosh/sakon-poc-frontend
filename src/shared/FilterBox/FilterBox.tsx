import React from "react";
import { useGetDepartments } from "../../hooks/useFetchAllConfig";
import "./style.css";
import Select from "react-select";
import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";

const FilterBox = () => {
  //   const { data } = props;

  interface Values {}
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
  };
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ height: "200px" }}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="status">Scheduling Status : </label>
          </div>
          <label>
            <Field
              type="radio"
              name="scheduling-status"
              value="scheduled"
            ></Field>
            Scheduled
          </label>
          <label>
            <Field
              type="radio"
              name="scheduling-status"
              value="not-scheduled"
            ></Field>
            Not Scheduled
          </label>
          <label htmlFor="department"> Department</label>
          {/* <Field name="department" as="select"> */}
          {/* <option value="department"> */}{" "}
          <Select
            options={data}
            placeholder="Select One"
            name="department"
            isClearable={true}
          />
          {/* </option> */}
          {/* </Field> */}
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

      {/* <form action="">
        <div className="scheduling-container">
          <div>
            <label htmlFor="status">Scheduling Status : </label>
          </div>
          <div className="status-container">
            <div>
              <input
                type="radio"
                id="scheduled"
                name="status"
                value="scheduled"
              />
              <label htmlFor="scheduled">Scheduled</label>
            </div>
            <div>
              <input
                type="radio"
                id="notSchduled"
                name="status"
                value="notScheduled"
              />
              <label htmlFor="notScheduled">Not Scheduled</label>
            </div>
          </div>
        </div>

        <div className="department-container">
          <div>
            <label htmlFor="department">Department : </label>
          </div>
          <div className="select-box-container">
            <Select
              options={data}
              placeholder="Select One"
              isClearable={true}
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
      </form> */}
    </div>
  );
};

export default FilterBox;

// import { Form, Formik } from "formik";
// import React from "react";

// const options = [{ key: "finance", vale: "finance" }];

// const FilterBox = () => {
//   const initialValues = {
//     name: "department",
//   };
//   const onsubmit = () => {
//     console.log("hi");
//   };
//   return (
//     <div>
//       <Formik initialValues={initialValues} onSubmit={onsubmit}>
//         <Form></Form>
//       </Formik>
//     </div>
//   );
// };

// export default FilterBox;
