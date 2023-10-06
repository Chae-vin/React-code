import React, { useState, useEffect } from 'react';
import './Task.css';

function Task() {
  const [randomTasks, setRandomTasks] = useState([]);
  const [regularQueue2, setRegularQueue2] = useState([]);
  const [regularQueue3, setRegularQueue3] = useState([]);
  const [regularQueue4, setRegularQueue4] = useState([]);
  const [highPriorityQueue, setHighPriorityQueue] = useState([]);
  const maxQueueSize = 15;
  const taskDuration = 2000; // 2 seconds

  const addRandomTask = () => {
    if (randomTasks.length >= maxQueueSize) {
      alert('Please admit tasks. The queue is full.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * 200) + 1;
    const isHighPriority = Math.random() < 0.3; // 30% chance of high priority
    setRandomTasks((prevTasks) => [
      ...prevTasks,
      { number: randomNumber, highPriority: isHighPriority },
    ]);
  };

  const admitTask = () => {
    if (randomTasks.length === 0) {
      return;
    }

    const taskToAdmit = randomTasks[0];

    // Calculate the sums of tasks in the regular queues
    const queueSums = {
      regularQueue2: regularQueue2.reduce((sum, task) => sum + task.number, 0),
      regularQueue3: regularQueue3.reduce((sum, task) => sum + task.number, 0),
      regularQueue4: regularQueue4.reduce((sum, task) => sum + task.number, 0),
    };

    const minQueue = Object.keys(queueSums).reduce((a, b) =>
      queueSums[a] < queueSums[b] ? a : b
    );

    if (taskToAdmit.highPriority) {
      setHighPriorityQueue([...highPriorityQueue, taskToAdmit]);
    } else {
      switch (minQueue) {
        case 'regularQueue2':
          setRegularQueue2([...regularQueue2, taskToAdmit]);
          break;
        case 'regularQueue3':
          setRegularQueue3([...regularQueue3, taskToAdmit]);
          break;
        case 'regularQueue4':
          setRegularQueue4([...regularQueue4, taskToAdmit]);
          break;
        default:
          break;
      }
    }

    setRandomTasks(randomTasks.slice(1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (highPriorityQueue.length > 0) {
        // Process tasks in High Priority Queue
        // Assuming taskDuration is in milliseconds
        setTimeout(() => {
          // Remove the processed task
          setHighPriorityQueue(highPriorityQueue.slice(1));
        }, taskDuration);
      } else if (regularQueue2.length > 0) {
        // Process tasks in Regular Queue 2
        // Assuming taskDuration is in milliseconds
        setTimeout(() => {
          // Remove the processed task
          setRegularQueue2(regularQueue2.slice(1));
        }, taskDuration);
      } else if (regularQueue3.length > 0) {
        // Process tasks in Regular Queue 3
        // Assuming taskDuration is in milliseconds
        setTimeout(() => {
          // Remove the processed task
          setRegularQueue3(regularQueue3.slice(1));
        }, taskDuration);
      } else if (regularQueue4.length > 0) {
        // Process tasks in Regular Queue 4
        // Assuming taskDuration is in milliseconds
        setTimeout(() => {
          // Remove the processed task
          setRegularQueue4(regularQueue4.slice(1));
        }, taskDuration);
      }
    }, taskDuration);

    return () => clearInterval(timer);
  }, [highPriorityQueue, regularQueue2, regularQueue3, regularQueue4]);

  return (
    <div className="app">
      {/* Left Container */}
      <div className="left-container">
        <div className="button-container">
          <button onClick={addRandomTask}>Add Random Task</button>
        </div>
        <div className="label-container">
          <label>Task Queue</label>
        </div>
        <div className="random-tasks-container">
          {randomTasks.slice(0, maxQueueSize).map((task, index) => (
            <div
              key={index}
              className={`random-task-box ${task.highPriority ? 'high-priority' : ''}`}
            >
              {task.number}
            </div>
          ))}
          {randomTasks.length > maxQueueSize && (
            <div className="admit-tasks-message">Please Admit Tasks</div>
          )}
        </div>
        <div className="button-container">
          <button onClick={admitTask}>Admit Task</button>
        </div>
      </div>

      {/* Right Container */}
  <div className="right-container">
    <div className="queue-column"></div>
      <div className="task-container">
          <h2>High Priority Queue 1</h2>
          <div className="label">Queue List:</div>
          <div className="queue-list-container">
            {highPriorityQueue.map((task, index) => (
              <div key={index} className="queue-task">
                {task.number}
              </div>
            ))}
          </div>
          {highPriorityQueue.length > 0 && <div className="timer"></div>}
        </div>

        {/* Regular Queue 2 */}
        <div className="task-container">
          <h2>Regular Queue 2</h2>
          <div className="label">Queue List:</div>
          <div className="queue-list-container">
            {regularQueue2.map((task, index) => (
              <div key={index} className="queue-task">
                {task.number}
              </div>
            ))}
          </div>
          {regularQueue2.length > 0 && <div className="timer"></div>}
        </div>

        {/* Regular Queue 3 */}
        <div className="task-container">
          <h2>Regular Queue 3</h2>
          <div className="label">Queue List:</div>
          <div className="queue-list-container">
            {regularQueue3.map((task, index) => (
              <div key={index} className="queue-task">
                {task.number}
              </div>
            ))}
          </div>
          {regularQueue3.length > 0 && <div className="timer"></div>}
        </div>

        {/* Regular Queue 4 */}
        <div className="task-container">
          <h2>Regular Queue 4</h2>
          <div className="label">Queue List:</div>
          <div className="queue-list-container">
            {regularQueue4.map((task, index) => (
              <div key={index} className="queue-task">
                {task.number}
              </div>
            ))}
          </div>
          {regularQueue4.length > 0 && <div className="timer"></div>}
        </div>
      </div>
    </div>
  );
}

export default Task;