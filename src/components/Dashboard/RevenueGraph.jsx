import { Card, CardContent, CardMedia,Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

export const RevenueGraph = ({ data }) => (
  <>
    {/* <Card style={{ height: "500px", Foverflow: "visible" }}>
      <CardContent> */}
      <Box sx={{height:"100%",width:"100%",backgroundColor:"white"}}>

        <ResponsiveLine
          itemHeight="1000px"
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Box>

      {/* </CardContent>
    </Card> */}
  </>
);
// import React from 'react';
// import { Card, CardContent } from '@material-ui/core';
// import { Line } from '@nivo/line';

// const data = [
//   { x: new Date("2020-01-01"), y: 20 },
//   { x: new Date("2020-02-01"), y: 30 },
//   { x: new Date("2020-03-01"), y: 10 },
//   { x: new Date("2020-04-01"), y: 40 }
// ];

// export const RevenueGraph = () => (
//     <Card>
//         <CardContent>
//             <Line
//                 width={500}
//                 height={400}
//                 data={[
//                     {
//                         id: 'data1',
//                         data: data,
//                     },
//                 ]}
//                 xScale={{
//                     type: 'time',
//                     format: '%Y-%m-%d',
//                 }}
//                 xFormat="time:%Y-%m-%d"
//                 yScale={{
//                     type: 'linear',
//                     min: 'auto',
//                     max: 'auto',
//                 }}
//                 margin={{
//                     top: 50,
//                     right: 50,
//                     bottom: 50,
//                     left: 50,
//                 }}
//                 axisBottom={{
//                     format: '%b %d',
//                 }}
//             />
//         </CardContent>
//     </Card>
// );
