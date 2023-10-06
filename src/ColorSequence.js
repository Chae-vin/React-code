import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const colors = [
  "red",
  "orange",
  "yellow",
  "lightgreen",
  "green",
  "skyblue",
  "blue",
  "purple",
  "pink",
];
const initalColorCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function ColorSequence() {
  const [isRolling, setIsRolling] = useState(false);
  const [colorCount, setColorCount] = useState([...initalColorCount]);
  const [rollValue, setRollValue] = useState();

  useEffect(() => {
    let interval;
    if (isRolling) {
      interval = setInterval(() => {
        setRollValue(() => Math.floor(Math.random() * 9));
      }, 100);
    } else {
        clearInterval(interval);
        setColorCount((prevColorCount) => {
        const updatedCount = [...prevColorCount];
        updatedCount[rollValue]++;
        return updatedCount;
      });
    }

    return () => clearInterval(interval);
  }, [isRolling]);

  const stopRolling = () => {
    setIsRolling(!isRolling);
  };

  const resetCount = () => {
    setColorCount(colors.map(() => 0));
    setIsRolling(false);
    setRollValue(colors);
  };

  return (
    <div style={{ textAlign: "center"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "20px",
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ height: "40px", width: "40px", backgroundColor: color }}
          >
            {colorCount[index]}
          </div>
        ))}
      </div>

      <Grid container spacing={1} style={{ margin: "auto" }} xs="3">
        {colors.map((color, index) => (
          <Grid key={color} item xs={4}>
            <div
              style={{
                height: "150px",
                width: "150px",
                backgroundColor:
                  (isRolling && index === rollValue) || rollValue === index
                    ? "grey"
                    : color,
              }}
            ></div>
          </Grid>
        ))}
      </Grid>
      <div style={{marginTop: "50px"}}>
        <Button variant="contained" sx={{ m: 4 }} onClick={stopRolling}>
          {!isRolling ? "Start Rolling" : "Stop Rolling"}
        </Button>
        <Button variant="contained" sx={{ m: 4 }} onClick={resetCount}>
          Reset Count
        </Button>
      </div>
    </div>
  );
}
