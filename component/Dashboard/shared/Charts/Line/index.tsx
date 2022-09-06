import React, { useRef } from "react";
import { Card, Box, Typography, Divider } from "@material-ui/core";
import { Line } from "react-chartjs-2";

export const LineChart = (props: any) => {
  const chartRef = useRef(null);

  return (
    <React.Fragment>
      <Card className="info-card">
        <Box p={2} mx={3} justifyContent="center">
          <Line
            ref={chartRef}
            data={props?.config?.data}
            legend={{ labels: [], display: false }}
            height={300}
          ></Line>

          <Typography variant="body1">{props?.config?.title}</Typography>
        </Box>
      </Card>
    </React.Fragment>
  );
};
