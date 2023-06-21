import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
// ];

const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = ({
  width,
  height,
  cx,
  cy,
  outerRadius,
  data,
  label,
}: any) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={cx}
        cy={cy}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry: any, index: any) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        {/* <Label
          value={label}
          position="outside"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        /> */}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
