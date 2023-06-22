type data = Array<{ name: string; value: number }>;

export interface ICustomPieChartProps {
  width: number;
  height: number;
  cx: number;
  cy: number;
  outerRadius: number;
  data: data;
  dataKey?: string;
}
