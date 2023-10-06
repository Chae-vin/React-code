import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import "./taskqueue.css";

function TaskQueue() {
  const [tasks, setTasks] = useState([]);
  const [highPriority, setHighPriority] = useState([]);
  const [regPriority1, setRegPriority1] = useState([]);
  const [regPriority2, setRegPriority2] = useState([]);
  const [regPriority3, setRegPriority3] = useState([]);

  const randomValue = Math.ceil(Math.random() * 100);

  useEffect(() => {
    const highPriorityInterval = setInterval(() => {
      setHighPriority((prevPriority) => {
        if (prevPriority.length > 0) {
          const updatedProgress = [...prevPriority];
          updatedProgress[0] -= 1;
          if (updatedProgress[0] === 0) {
            updatedProgress.shift();
          }
          return updatedProgress;
        }
        return prevPriority;
      });
    }, 50);

    const regPriority1Interval = setInterval(() => {
      setRegPriority1((prevPriority) => {
        if (prevPriority.length > 0) {
          const updatedProgress = [...prevPriority];
          updatedProgress[0] -= 1;
          if (updatedProgress[0] === 0) {
            updatedProgress.shift();
          }
          return updatedProgress;
        }
        return prevPriority;
      });
    }, 50);

    const regPriority2Interval = setInterval(() => {
      setRegPriority2((prevPriority) => {
        if (prevPriority.length > 0) {
          const updatedProgress = [...prevPriority];
          updatedProgress[0] -= 1;
          if (updatedProgress[0] === 0) {
            updatedProgress.shift();
          }
          return updatedProgress;
        }
        return prevPriority;
      });
    }, 50);

    const regPriority3Interval = setInterval(() => {
      setRegPriority3((prevPriority) => {
        if (prevPriority.length > 0) {
          const updatedProgress = [...prevPriority];
          updatedProgress[0] -= 1;
          if (updatedProgress[0] === 0) {
            updatedProgress.shift();
          }
          return updatedProgress;
        }
        return prevPriority;
      });
    }, 50);

    return () => {
      clearInterval(highPriorityInterval);
      clearInterval(regPriority1Interval);
      clearInterval(regPriority2Interval);
      clearInterval(regPriority3Interval);
    };
  }, [highPriority, regPriority1, regPriority2, regPriority3]);

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, randomValue]);
  };

  const admitTask = () => {
    const regPriority1Sum = regPriority1.reduce((sum, value) => sum + value, 0);
    const regPriority2Sum = regPriority2.reduce((sum, value) => sum + value, 0);
    const regPriority3Sum = regPriority3.reduce((sum, value) => sum + value, 0);

    if (tasks.length > 0 && tasks[0] % 5 === 0) {
      const redTask = tasks[0];
      setHighPriority((prevPriority) => [...prevPriority, redTask]);
      setTasks((prevTasks) => prevTasks.slice(1));
    } else {
      if (tasks.length > 0) {
        const blackTask = tasks[0];
        if (
          regPriority1Sum <= regPriority2Sum &&
          regPriority1Sum <= regPriority3Sum
        ) {
          setRegPriority1((prevPriority) => [...prevPriority, blackTask]);
        } else if (
          regPriority2Sum <= regPriority1Sum &&
          regPriority2Sum <= regPriority3Sum
        ) {
          setRegPriority2((prevPriority) => [...prevPriority, blackTask]);
        } else {
          setRegPriority3((prevPriority) => [...prevPriority, blackTask]);
        }
        setTasks((prevTasks) => prevTasks.slice(1));
      }
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ width: 1200, height: 1025, margin: "0 auto", border: "1px solid" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "50%",
          margin: "10px 10px 10px 10px",
          border: "1px solid",
        }}
      >
        <Grid item xs={5} sx={{ marginLeft: "0 auto" }}>
          <Button onClick={addTask} variant="contained">
            Add Random Task
          </Button>
          <h3>Task Queue</h3>
          <div className="tasks-box">
            {tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  fontSize: "18px",
                  border: "1px solid black",
                  marginTop: "30px",
                  marginRight: "1px",
                  marginBottom: "10px",
                  color: task % 5 === 0 ? "red" : "black",
                }}
              >
                {task}
              </div>
            ))}
          </div>
          <Button variant="contained" onClick={admitTask}>
            Admit Task
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{ width: 550, margin: "10px 10px 10px 10px", border: "1px solid" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: "250px",
            border: "1px solid red",
          }}
        >
          <div style={{ marginLeft: "10px" }}>
            <h3>High Priority Queue 1</h3>
            <p>Queue List:</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {highPriority.map((task, index) => (
              <div
                key={index}
                style={{
                  marginLeft: "5px",
                  border: "1px solid black",
                  color: "red",
                }}
              >
                {task}
              </div>
            ))}
          </div>

          <Grid item xs={8} sx={{ alignItems: "center" }}>
            <div style={{ marginLeft: "10px" }}>
              <p>Duration:</p>
            </div>
            <div style={{ width: "90%", height: "30px" }}>
              <div
                style={{
                  width: `${highPriority.length > 0 ? highPriority[0] : 0}%`,
                  height: "100%",
                  border: "2px solid red",
                  marginLeft: "10px",
                }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: "250px",
            border: "1px solid",
          }}
        >
          <div style={{ marginLeft: "10px" }}>
            <h3>Regular Queue 2</h3>
            <p>Queue List:</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {regPriority1.map((task, index) => (
              <div
                key={index}
                style={{
                  marginLeft: "5px",
                  border: "1px solid black",
                  marginRight: "1px",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                {task}
              </div>
            ))}
          </div>
          <Grid item xs={8} sx={{ alignItems: "center" }}>
            <div style={{ marginLeft: "10px" }}>
              <p>Duration:</p>
            </div>
            <div style={{ width: "90%", height: "30px" }}>
              <div
                style={{
                  width: `${regPriority1.length > 0 ? regPriority1[0] : 0}%`,
                  height: "100%",
                  border: "2px solid red",
                  marginLeft: "10px",
                }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ height: "250px", border: "1px solid" }}>
          <div style={{ marginLeft: "10px" }}>
            <h3>Regular Queue 3</h3>
            <p>Queue List:</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {regPriority2.map((task, index) => (
              <div
                key={index}
                style={{
                  marginLeft: "5px",
                  border: "1px solid black",
                  marginRight: "1px",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                {task}
              </div>
            ))}
          </div>
          <Grid item xs={8} sx={{ alignItems: "center" }}>
            <div style={{ marginLeft: "10px" }}>
              <p>Duration:</p>
            </div>
            <div style={{ width: "90%", height: "30px" }}>
              <div
                style={{
                  width: `${regPriority2.length > 0 ? regPriority2[0] : 0}%`,
                  height: "100%",
                  border: "2px solid red",
                  marginLeft: "10px",
                }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ height: "250px", border: "1px solid" }}>
          <div style={{ marginLeft: "10px" }}>
            <h3>Regular Queue 4</h3>
            <p>Queue List:</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {regPriority3.map((task, index) => (
              <div
                key={index}
                style={{
                  marginLeft: "5px",
                  border: "1px solid black",
                  marginRight: "1px",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                {task}
              </div>
            ))}
          </div>
          <Grid item xs={8} sx={{ alignItems: "center" }}>
            <div div style={{ marginLeft: "10px" }}>
              <p>Duration:</p>
            </div>
            <div style={{ width: "90%", height: "30px" }}>
              <div
                style={{
                  width: `${regPriority3.length > 0 ? regPriority3[0] : 0}%`,
                  height: "100%",
                  border: "2px solid red",
                  marginLeft: "10px",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TaskQueue;
