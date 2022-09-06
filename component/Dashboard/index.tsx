import React from "react";
import { Box, Paper } from "@material-ui/core";
import Masonry from "react-masonry-css";
import { DefaultInfoCard } from "./shared/InfoCards";
import {
  balanceSheet,
  barGraph,
  curveChart,
  infoCard,
  lineChart,
} from "./shared/queryConfig";
import { ReportsHalfPieChart } from "./shared/Charts/Pie/HalfCurve";
import { BarChart } from "./shared/Charts/Bar/index";
import { LineChart } from "./shared/Charts/Line/index";
import { TableCards } from "./shared/TableCards";

export const Dashboard = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };    
  return (
    <React.Fragment>
      <Paper
        className="search-wraper"
        elevation={0}
      >
        <Box className="dashboard-layout">
          <Box py={3} px={2}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="statistics-dashboard"
              columnClassName="statistics-dashboard-grid-column"
            >
              <div>
                <DefaultInfoCard config={infoCard[0]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[1]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[2]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[3]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[4]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[5]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[6]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[7]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[8]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[9]}  />
              </div>
              <div>
                <DefaultInfoCard config={infoCard[10]}  />
              </div>
              <div>
                <ReportsHalfPieChart config={curveChart[0]}  />
              </div>
              <div>
                <ReportsHalfPieChart config={curveChart[1]}  />
              </div>
              <div>
                <ReportsHalfPieChart config={curveChart[2]}  />
              </div>
              <div>
                <BarChart config={barGraph[0]}  />
              </div>
              <div>
                <LineChart config={lineChart[0]}  />
              </div>
              <div>
                <LineChart config={lineChart[1]}  />
              </div>
              <div>
                <LineChart config={lineChart[2]}  />
              </div>
              <div>
                <TableCards config={balanceSheet[0]}  />
              </div>
            </Masonry>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};
