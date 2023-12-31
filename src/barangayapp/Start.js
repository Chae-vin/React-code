import { Button } from "@mui/material";

export default function Start() {
  return (
    <div style={{ background: "#829CA6", height: "100vh" }}>
      <div
        style={{
          background: `url('fullbg.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: " center",
            height: "100%",
          }}
        >
          <div>
            <img
              style={{ width: "1000px", height: "auto" }}
              src={"2logos.png"}
              alt="2Logos"
            />
          </div>
          <div>
            <Button
              style={{
                background: "#213555",
                color: "#FFFFFF",
                borderRadius: "10px",
                width: "200px",
                height: "50px",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
