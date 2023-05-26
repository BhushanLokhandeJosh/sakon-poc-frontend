import { INTERVAL, ISchedulerProps } from "./types";

export const initialSchedulerValue: ISchedulerProps = {
  configurations: [],
  schedularName: "",
  interval: INTERVAL.DAILY,
  timeZone: "",
  monthDay: 0,
  weekDay: "",
  timeDuration: "12:00",
};
