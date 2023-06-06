import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { getTimeFromNow } from "./helper";

import { IFormikProps, IObjectWithAnyFields } from "../../../shared/types";
import CustomColumnPopover from "../../../shared/ColumnPopover/CustomColumnPopover";
import { Link, useNavigate } from "react-router-dom";
import { GET } from "../../../services/api/axios";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import { useFetchSingleScheduler } from "../scheduler-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";
import FormikModalComponent from "../../../shared/FormikModalComponent/component";
import SchedulerForm from "../CreateScheduler/component/SchedulerForm";
import { ISchedulerProps } from "../CreateScheduler/types";
import { initialSchedulerValue } from "../CreateScheduler/constants";
import { validationSchema } from "../CreateScheduler/helpers";
import { useEffect, useState } from "react";

const EditSchedule = ({ job }: any) => {
  console.log(job, "....");
  const { isOpen, handleToggle } = useToggle();
  const [configOptions, setConfigOptions] =
    useState<{ value: string; label: string }[]>();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const initialData = {
    ...job.row,
    configurations: job.row.configuration,
    schedularName: job.row.schedule_name,
    interval: job.row.interval,
    timeDuration: job.row.time,
  };
  console.log("initialData", initialData);

  return (
    <>
      <Tooltip title="Edit" placement="top">
        <IconButton onClick={handleToggle}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <FormikModalComponent
        isOpen={isOpen}
        toggleModal={handleToggle}
        modalTitle="Edit Scheduler"
        getFormBody={(formik: IFormikProps<ISchedulerProps>) => (
          <SchedulerForm formik={formik} configurationOptions={configOptions} />
        )}
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};

export const SchedulerColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "schedule_name",
    headerName: "Schedule Name",
    width: 300,

    headerAlign: "center",
    align: "center",
  },
  {
    field: "interval",
    headerName: "Frequency",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "configuration",
    headerName: "Configuration",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params: IObjectWithAnyFields) => {
      return <CustomColumnPopover arr={params?.row.configuration} />;
    },
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      const currentTime = params?.row.created_at;
      const date = new Date(params?.value);

      return (
        <Tooltip
          title={date.toLocaleString("en-us", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          placement="top"
          arrow
        >
          <TableCell>{getTimeFromNow(currentTime)}</TableCell>
        </Tooltip>
      );
    },
  },
  {
    field: "edit",
    headerName: "Edit",
    description: "Edit actions column.",
    sortable: false,
    width: 50,
    renderCell: (params: GridCellParams) => {
      return <EditSchedule job={params} />;
      // const navigate = useNavigate();
      // const handleEdit = (shceduleId: any) => {
      //   // <Link to={`job-details/${parseInt(param.id)}`}>{param.id}</Link>
      // };
    },
  },
];
