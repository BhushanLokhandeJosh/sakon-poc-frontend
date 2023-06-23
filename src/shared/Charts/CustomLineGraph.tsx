import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Example = () => {
  const [data, setData] = useState([]);
  const [frequency, setFrequency] = useState("daily");

  useEffect(() => {
    fetchData();
  }, [frequency]);

  const fetchData = () => {
    // Mock data for daily, weekly, monthly status
    const dailyData: any = [
      { name: "Sun", error: 10 },
      { name: "Mon", error: 5 },
      { name: "Tue", error: 8 },
      { name: "Wed", error: 12 },
      { name: "Thu", error: 7 },
      { name: "Fri", error: 9 },
      { name: "Sat", error: 6 },
    ];

    const weeklyData: any = [
      { name: "W1", error: 25 },
      { name: "W2", error: 18 },
      { name: "W3", error: 30 },
      { name: "W4", error: 15 },
    ];

    const monthlyData: any = [
      { name: "Jan", error: 80 },
      { name: "Feb", error: 65 },
      { name: "Mar", error: 50 },
      { name: "Apr", error: 40 },
      { name: "May", error: 55 },
      { name: "Jun", error: 70 },
      { name: "Jul", error: 60 },
      { name: "Aug", error: 45 },
      { name: "Sep", error: 70 },
      { name: "Oct", error: 35 },
      { name: "Nov", error: 50 },
      { name: "Dec", error: 75 },
    ];

    // Set data based on the selected frequency
    switch (frequency) {
      case "daily":
        setData(dailyData);
        break;
      case "weekly":
        setData(weeklyData);
        break;
      case "monthly":
        setData(monthlyData);
        break;
      default:
        setData([]);
    }
  };

  const handleFrequencyChange = (event: any) => {
    setFrequency(event.target.value);
    console.log(event.target.value);
  };

  const getTickFormatter = () => {
    switch (frequency) {
      case "daily":
        return (tick: any) => tick;
      case "weekly":
        return (tick: any) => tick.slice(0, 3); // Assuming tick is the full week name, e.g., 'Week 1'
      case "monthly":
        return (tick: any) => tick.slice(0, 3); // Assuming tick is the full month name, e.g., 'January'
      default:
        return (tick: any) => tick;
    }
  };

  return (
    <div>
      <div>
        <label>Frequeny: </label>
        <select value={frequency} onChange={handleFrequencyChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        width={1000}
        height={300}
        data={data}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickFormatter={getTickFormatter()} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="error" fill="#82ca9d" />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Example;
