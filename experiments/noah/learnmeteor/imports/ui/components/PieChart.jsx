import React from "react";
import { Pie } from "react-chartjs-2"

function PieChart({ data }) {
    return (
        <div className="PieChart">
            <Pie
                data={data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "test Pie Chart"
                        }
                    }
                }}
            />
        </div>
    )
}

export default PieChart;