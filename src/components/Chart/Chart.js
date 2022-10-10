import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  
   const dataPointvalues = props.dataPoints.map( e => e.value); 
   const totalMaximum = Math.max(...dataPointvalues);
  //  console.log(totalMaximum)
    return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
