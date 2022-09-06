import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

export const TableCards = (props: any) => {
  return (
    <React.Fragment>
      <Card className="info-card">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props?.config?.title}
          </Typography>

          <Grid container>
            {props?.config?.tableData.map((item: any, index: number) => {
              return (
                <React.Fragment key={`element-wrapper-${index}`}>
                  <Grid
                    item
                    lg={6}
                    xs={6}
                    sm={6}
                    key={`element-title-${index}`}
                    style={{ fontWeight: item?.isBold === "true" ? "bold" : "normal" }}
                    className="mb-3"
                  >
                    <Typography variant="caption">{item?.label}</Typography>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={6}
                    sm={6}
                    key={`element-value-${index}`}
                    className="mb-3"
                  >
                    <Typography variant="caption">{item?.value}</Typography>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    key={`element-divider-${index}`}
                    className="mb-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <Divider
                      className="default-bg-color"
                      orientation="horizontal"
                    />
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
