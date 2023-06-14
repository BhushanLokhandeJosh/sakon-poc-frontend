import { INTERVAL, ISchedulerPayload } from "./types";

export const initialSchedulerValue: ISchedulerPayload = {
  configurations: [],
  schedularName: "",
  interval: INTERVAL.DAILY,
  timeZone: "",
  monthDay: 0,
  weekDay: "",
  timeDuration: "12:00",
};
