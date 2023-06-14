import { INTERVAL, ICreateSchedulerPayload } from "./types";

export const initialSchedulerValue: ICreateSchedulerPayload = {
  configurations: [],
  schedularName: "",
  interval: INTERVAL.DAILY,
  timeZone: "",
  monthDay: 0,
  weekDay: "",
  timeDuration: "12:00",
};
