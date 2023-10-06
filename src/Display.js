import React from "react";
import { Grid } from "@mui/material";
import First from "./First";

export default function Display() {
  return (
    <>
      <Grid
        item
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          width: "1000px",
          border: "2px solid #808080",
          borderRadius: "5px",
        }}
      >
        <First />
      </Grid>
    </>
  );
}
