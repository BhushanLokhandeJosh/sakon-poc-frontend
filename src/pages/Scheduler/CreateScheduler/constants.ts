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
