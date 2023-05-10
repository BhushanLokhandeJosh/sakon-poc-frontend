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
