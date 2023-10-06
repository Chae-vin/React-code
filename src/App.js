import "./App.css";
import { Route, Routes } from "react-router-dom";
import Singer from "./Singer";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Complete the Lyrics</h1>
      <Routes>
        <Route path="/singer*" element={<Singer />} />
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
          <Route path="fourth" element={<Fourth />} />
      </Routes>
    </div>
  );
}

export default App;
