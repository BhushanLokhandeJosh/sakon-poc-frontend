import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import LineGraph from "../../../shared/Charts/CustomLineGraph";

const DashboardComponent = () => {
  const data1 = [
    { name: "Success", value: 400 },
    { name: "Failures", value: 300 },
  ];
  const data2 = [
    { name: "Success", value: 300 },
    { name: "Failures", value: 400 },
  ];
  const data3 = [
    { time: "12:00 AM", error: 0 },
    { time: "03:00 AM", error: 2 },
    { time: "06:00 AM", error: 1 },
    { time: "09:00 AM", error: 4 },
    { time: "12:00 PM", error: 3 },
    { time: "03:00 PM", error: 2 },
    { time: "06:00 PM", error: 1 },
    { time: "09:00 PM", error: 0 },
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <span
          style={{
            marginTop: "7%",
            position: "relative",
            left: "15%",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Uploads
        </span> */}

        <CustomPieChart
          width={600}
          height={450}
          cx={400}
          cy={250}
          outerRadius={150}
          data={data1}
          label="upload"
        />
        {/* <span
          style={{
            marginTop: "7%",
            position: "relative",
            left: "15%",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Downloads
        </span> */}

        <CustomPieChart
          width={600}
          height={450}
          cx={400}
          cy={250}
          outerRadius={150}
          data={data2}
          label={"download"}
        />
      </div>

      <div style={{ marginLeft: "15%" }}>
        {/* <span
          style={{ marginRight: "100%", fontSize: "16px", fontWeight: "bold" }}
        >
          Jobs
        </span> */}
        <LineGraph width={1000} height={400} data={data3}></LineGraph>
      </div>
    </>
  );
};

export default DashboardComponent;
