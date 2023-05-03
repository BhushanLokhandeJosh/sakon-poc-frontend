export interface initialProps {
  configurations: string[];
  schedularName: string;
  interval: string;
  timeZone: string;

  weekDay?: string[];
  monthDay?: string;

  timeDuration?: string;
}
