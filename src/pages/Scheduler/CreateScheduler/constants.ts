import { INTERVAL, ISchedulerProps } from "./types";

export const initialSchedulerValue: ISchedulerProps = {
  configurations: [],
  schedularName: "",
  interval: INTERVAL.DAILY,
  timeZone: "",
  monthDay: "",
  weekDay: [],
  timeDuration: "12:00",
};

