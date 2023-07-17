import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { COLORS } from "./constants";
import RenderCustomizedLabel from "./RenderCustomizedLabel";
import { IChartDataOption } from "../../types";

interface ICustomPieChartProps {
  width: number;
  height: number;
  cx: number;
  cy: number;
  outerRadius: number;
  data: IChartDataOption[];
  dataKey: string;
}
const CustomPieChart = ({
  width,
  height,
  cx,
  cy,
  outerRadius,
  data,
  dataKey = "value",
}: ICustomPieChartProps) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={cx}
        cy={cy}
        labelLine={false}
        label={RenderCustomizedLabel}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey={dataKey}
      >
        {data.map((entry, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
