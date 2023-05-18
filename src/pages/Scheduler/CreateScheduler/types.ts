export interface ISchedulerProps {
  configurations: string[];
  schedularName: string;
  //Interval -> DAILY,WEEKLY,MONTHLY
  interval: string;
  timeZone: string;
  weekDay?: string[];
  monthDay?: string;
  timeDuration?: string;
}


export interface ICreateSchedulerProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}

export enum INTERVAL {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}
