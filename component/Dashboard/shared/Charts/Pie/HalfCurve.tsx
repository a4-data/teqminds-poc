import React, { useRef } from "react";
import { Card, Box, Typography, Divider } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

export const ReportsHalfPieChart = (props: any) => {
  const chartRef = useRef(null);

  const config = {
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Votes",
            data: props?.config?.data,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
            borderColor: ["#FF6384", "#36A2EB", "#FFCD56"],
            borderWidth: 1,
          },
        ],
      }, 
  }

  const graphOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
};
  return (
    <React.Fragment>
      <Card className="info-card">
        <Box p={2} mx={3} justifyContent="center">
          <Typography variant="caption">{props?.config?.title}</Typography>

          <Doughnut
            ref={chartRef}
            data={config?.data}
            options={graphOptions}
            legend={{ labels: [], display: false }}
          />
          <Typography variant="h6" className="half-curve-value">
            13.0
          </Typography>
          <Typography variant="body1">
            PY 61.2
          </Typography>
          <Typography variant="body2" className="text-body2">Target 59.0%</Typography>
        </Box>
      </Card>
    </React.Fragment>
  );
};
