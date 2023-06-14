export interface ISchedulerPayload {
  configurations: string[];
  schedularName: string;
  //Interval -> DAILY,WEEKLY,MONTHLY
  interval: string;
  timeZone: string;
  weekDay?: string;
  monthDay?: number;
  timeDuration?: string;
}

export interface IUpdateSchedulerpayload extends ISchedulerPayload {
  id: number;
}

export interface ICreateSchedulerProps {
  configurationOptions?: { value: string; label: string }[];
  onSubmit: (values: any) => void;
  initialSchedulerValue?: any;
}

export enum INTERVAL {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}
