import * as Yup from "yup";
import { INTERVAL } from "./types";

export const validationSchema = Yup.object({
  configurations: Yup.array().min(1).required("Choose configurations"),
  schedularName: Yup.string().required("Schedular Name Required"),
  interval: Yup.string().required("Day Interval Required"),
  timeZone: Yup.string().required("TimeZone Required"),

  monthDay: Yup.number().when("interval", {
    is: (val: any) => val === INTERVAL.DAILY || val === INTERVAL.WEEKLY,
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.required("Month Required"),
  }),

  weekDay: Yup.string().when("interval", {
    is: (val: any) => val === INTERVAL.DAILY || val === INTERVAL.MONTHLY,
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.min(1).required("Select Weekdays"),
  }),

  timeDuration: Yup.string().required("Time Duration Required"),
});

export const Interval = [
  {
    label: "Daily",
    value: INTERVAL.DAILY,
  },
  {
    label: "Weekly",
    value: INTERVAL.WEEKLY,
  },
  {
    label: "Monthly",
    value: INTERVAL.MONTHLY,
  },
];

export const dayOfWeek = [
  {
    label: "Monday",
    value: "MON",
  },
  {
    label: "Tuesday",
    value: "TUE",
  },
  {
    label: "Wednesday",
    value: "WED",
  },
  {
    label: "Thursday",
    value: "THURS",
  },
  {
    label: "Friday",
    value: "FRI",
  },
  {
    label: "Saturday",
    value: "SAT",
  },
  {
    label: "Sunday",
    value: "SUN",
  },
];

//Date of month will be taken from backend based on Month in which logged
//in Happen.
const dayOfMonth = () => {
  let date = new Date();
  let lastDateOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const allDayOfMonths = [];
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const obj = {
      label: `${i}`,
      value: i,
    };
    allDayOfMonths.push(obj);
  }
  return allDayOfMonths;
};

export const DaysOfMonth = dayOfMonth();

export const timeZones = [
  {
    label: "Europe/France",
    value: "Europe/France",
  },
  {
    label: "Europe/Rome",
    value: "Europe/Rome",
  },
  {
    label: "Europe/Berlin",
    value: "Europe/Berlin",
  },
  {
    label: "Asia/kolkata",
    value: "Asia/kolkata",
  },
  {
    label: "Asia/Beijing",
    value: "Asia/Beijing",
  },
  {
    label: "Asia/Tokyo",
    value: "Asia/Tokyo",
  },
  {
    label: "Asia/Jakarta",
    value: "Asia/Jakarta",
  },
  {
    label: "Asia/Bangkok",
    value: "Asia/Bangkok",
  },
];
