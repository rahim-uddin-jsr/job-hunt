import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import Header from "../../sheared/Header";

const data = [
  {
    assignmentNumber: "A 1",
    Total_Mark: 60,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 2",
    Total_Mark: 60,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 3",
    Total_Mark: 58,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 4",
    Total_Mark: 60,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 5",
    Total_Mark: 60,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 6",
    Total_Mark: 60,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 7",
    Total_Mark: 60,
    fullMark: 60,
  },
  {
    assignmentNumber: "A 8",
    Total_Mark: 60,
    fullMark: 60,
  },
];
const Statistics = () => {
  return (
    <>
      <Header>Statistics</Header>
      <div className="flex flex-col  justify-center items-center">
        <h2 className="text-3xl">Assignment Marks</h2>
        <RadarChart
          cx={250}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="assignmentNumber" />
          <PolarRadiusAxis />
          <Radar
            dataKey="Total_Mark"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>
      </div>
    </>
  );
};

export default Statistics;
