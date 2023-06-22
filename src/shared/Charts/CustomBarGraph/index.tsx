import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ICustomBargraphProps {
  width: number;
  height: number;
  data: Array<{ label: string; value: number }>;
}

const CustomBarGraph = ({ data, width, height }: ICustomBargraphProps) => {
  /**
   * considering data as actual data, and width and height required to manage bar graph.
   */
  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="error" fill="#82ca9d" />
    </BarChart>
  );
};

export default CustomBarGraph;
