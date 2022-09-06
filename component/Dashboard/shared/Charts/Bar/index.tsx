import React, { useRef } from "react";
import { Card, Box, Typography, Divider, Button } from '@material-ui/core';
import { Bar } from "react-chartjs-2";

export const BarChart = (props: any) => {
    const chartRef = useRef(null);
    const config = {
        type: 'bar',
        title: props?.config?.title,
        data: props?.config?.data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
  return (
    <React.Fragment>
      <Card className="info-card">
        <Box p={2} mx={3} justifyContent="center">
          
            <Bar
              ref={chartRef}
              data={config?.data}
              options={config?.options}
              legend={{ labels: [], display: false }}
              height={300}
            />
         
          <Typography variant="body1">{config?.title}</Typography>
        </Box>
      </Card>
    </React.Fragment>
  );
};
