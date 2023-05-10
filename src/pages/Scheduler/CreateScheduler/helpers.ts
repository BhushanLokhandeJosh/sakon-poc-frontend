import * as Yup from "yup";
import { ISchedulerProps } from "./types";

export const initialSchedulerValue: ISchedulerProps = {
  configurations: [],
  schedularName: "",
  interval: "DAILY",
  timeZone: "",
  monthDay: "",
  weekDay: [],
  timeDuration: "12:00",
};

export const validationSchema = Yup.object({
  configurations: Yup.array().min(1).required("Choose configurations"),
  schedularName: Yup.string().required("Schedular Name Required"),
  interval: Yup.string().required("Day Interval Required"),
  timeZone: Yup.string().required("TimeZone Required"),

  monthDay: Yup.string().when("interval", {
    is: (val: any) => val === "DAILY" || val === "WEEKLY",
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.required("Month Required"),
  }),

  weekDay: Yup.array().when("interval", {
    is: (val: any) => val === "DAILY" || val === "MONTHLY",
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.min(1).required("Select Weekdays"),
  }),

  timeDuration: Yup.string().required("Time Duration Required"),
});

export const Interval = [
  {
    label: "Daily",
    value: "DAILY",
  },
  {
    label: "Weekly",
    value: "WEEKLY",
  },
  {
    label: "Monthly",
    value: "MONTHLY",
  },
];

export const minuteInterval = () => {
  const allOptions = [];
  for (let i = 5; i <= 60; i = i + 5) {
    const obj = {
      label: `${i}`,
      value: `00:${i}`,
    };
    allOptions.push(obj);
  }
  return allOptions;
};

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

export const dayOfMonth = () => {
  const allDayOfMonths = [];
  for (let i = 1; i < 31; i++) {
    const obj = {
      label: `${i}`,
      value: `${i}`,
    };
    allDayOfMonths.push(obj);
  }

  return allDayOfMonths;
};

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

export const configurationOptions = [
  {
    value: "1",
    label: "Josh/DEBU/Verizone",
  },
  {
    value: "2",
    label: "Josh/JASBU/Idea",
  },
  {
    value: "3",
    label: "Josh/BFSIBU/Airtel",
  },
  {
    value: "4",
    label: "Josh/HROPBU/Vodafone",
  },
  {
    value: "5",
    label: "Josh/SFBU/Jio",
  },
];
