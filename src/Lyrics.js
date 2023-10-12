import "./App.css";
import { Routes, Route} from "react-router-dom";
import Singer from "./Singer";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

function Lyrics() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Complete the Lyrics</h1>

      <Routes>
        <Route path="singer" element={<Singer />}>
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
          <Route path="fourth" element={<Fourth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Lyrics;
