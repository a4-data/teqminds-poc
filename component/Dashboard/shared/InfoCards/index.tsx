import React from "react";
import { Card, Box, Typography, Divider } from "@material-ui/core";

export const DefaultInfoCard = (props: any) => {
  const { title, value } = props.config;

  return (
    <React.Fragment>
      <Card className="info-card">
        <Box p={2} mx={3} display="flex" justifyContent="center">
          <Box justifyContent="center" alignItems="center">
            <Typography variant="body1">{title}</Typography>
          </Box>
        </Box>
        <Divider variant="middle" className="default-bg-color" />
        <Box p={2} mx={3} textAlign="center">
          <Typography variant="body1">{value}</Typography>
        </Box>
      </Card>
    </React.Fragment>
  );
};
