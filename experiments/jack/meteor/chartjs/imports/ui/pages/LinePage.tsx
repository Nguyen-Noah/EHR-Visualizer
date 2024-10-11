import LineChart from "../components/LineChart";
import React from "react";

function LinePage(){
	const datasets: any[] = [
		{
			label: "first",
			data: [1,2,3,4,5,6,7,8,9,10]
		},
		{
			label: "second",
			data: [10,9,8,7,6,5,4,3,2,1]
		}
	]

	const ez = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	return (
		<>
			<h1>Line Chart</h1>
      	<LineChart datasets={datasets} title="lines" xAxisLabels={ez}></LineChart>
		</>
	)
}

export default LinePage;