export interface ISchedulerProps {
  id?: any;
  configurations: string[];
  schedularName: string;
  //Interval -> DAILY,WEEKLY,MONTHLY
  interval: string;
  timeZone: string;
  weekDay?: string;
  monthDay?: number;
  timeDuration?: string;
}

export interface ICreateSchedulerProps {
  configurationOptions?: { value: string; label: string }[];
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
  initialSchedulerValue: any;
}

export enum INTERVAL {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}
