import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { IOption } from "../../types";

interface IProps {
  /**
   * considering data as actual data.
   */
  data: IOption<number>[];
  /**
   *  Width are required to manage bar graph horizontally.
   */
  width: number;
  /**
   *  Height are required to manage bar graph vertically.
   */
  height: number;
}

const CustomBarGraph = ({ data, width, height }: IProps) => {
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
