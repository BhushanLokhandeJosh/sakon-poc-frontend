import { IFormikProps } from "../../../shared/types";

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
  onSubmit: (values: ISchedulerProps) => void;
}
