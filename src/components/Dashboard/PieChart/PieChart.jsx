import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/material";
import { data } from "./Data";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";

function ProgressProvider({ valueStart, valueEnd, children }) {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    if(value != valueEnd){
    const range = valueEnd - valueStart;
    const increment = valueEnd > valueStart ? 1 : -1;
    const stepTime = Math.abs(Math.floor(1 * (valueEnd - valueStart) / 10));

    const timer = setInterval(() => {
      setValue((prevValue) => prevValue + increment);
    }, stepTime);

    if (Math.abs(valueEnd - valueStart) > range) {
      clearInterval(timer);
      setValue(valueEnd);
    }

    return () => clearInterval(timer);
  }
  }, [value]);

  return children(value);
}
export const PieChart = () => (

  
  <Box
    sx={{
      height: "500px",
      width: "100%",
      display: "flex",
      backgroundColor: "white",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    }}
  >
    <div style={{ height: "50% !important", margin: "auto", display: "flex", }}>
    <ProgressProvider valueStart={0} valueEnd={66}>
  {(value) => <CircularProgressbar styles={{backgroundColor: "linear-gradient(red, yellow)"}} value={value} />}
</ProgressProvider>
    {/* <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    /> */}
    </div>
  </Box>
);
