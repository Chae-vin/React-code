import { Button, Modal, Paper } from "@mui/material";
import React, { useState } from "react";
import "./Signup.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Login from "./Login";

export default function Signup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignup = () => {
    // Perform validation here
    // For demonstration, we'll just show a popup with the input values
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
    setShowLogin(true); // Show the login component
  };

  return (
    <div>
      {showLogin ? (
        <Login />
      ) : (
        <div className="main-div">
          <div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <img
                src={"2logos.png"}
                alt="Logo"
                style={{ width: "800px", height: "auto" }}
              />
            </div>
            <div>
              <Paper
                elevation={3}
                className="paper-style"
              >
                <div
                  style={{
                    padding: "20px",
                    margin: "30px",
                    borderRight: "5px solid #213555",
                  }}
                >
                  <div style={{ marginRight: "23px" }}>
                    <h1 className="title">Username:</h1>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="long-input"
                    ></input>
                    <h1 className="title">Email:</h1>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="long-input"
                    ></input>
                    <h1 className="title">Password:</h1>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="long-input"
                    ></input>
                  </div>
                </div>
                <div style={{ marginLeft: "12px" }}>
                  <div
                    style={{
                      marginTop: "50px",
                      display: "flex",
                    }}
                  >
                    <h1 className="title">Firstname:</h1>
                    <h1 className="title" style={{ marginLeft: "70px" }}>
                      Lastname:
                    </h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="short-input"
                      style={{ marginRight: "20px" }}
                    ></input>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="short-input"
                    ></input>
                  </div>

                  <div>
                    <h1 className="title">Address:</h1>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="long-input"
                    ></input>
                    <h1 className="title">Date of Birth:</h1>
                    <input
                      type="text"
                      id="birthdate"
                      name="birthdate"
                      placeholder="MM/DD/YYYY"
                      className="long-input"
                    ></input>
                    <h1 className="title">Gender:</h1>
                    <div style={{ textAlign: "center", color: "#213555" }}>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="gender"
                          name="gender-radio"
                        >
                          <FormControlLabel
                            value="male"
                            control={<Radio sx={{ color: "#213555" }} />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio sx={{ color: "#213555" }} />}
                            label="Female"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </Paper>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleSignup}
                  style={{
                    color: "#FFFFFF",
                    background: "#213555",
                    borderRadius: "10px",
                    width: "200px",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Signup
                </Button>
              </div>
              {/* Popup Modal for Verification */}
              <Modal open={showPopup} onClose={handleClosePopup}>
                <div className="popup">
                  {/* Display input values for verification */}
                  <h2>Please Wait for Verification</h2>
                  <p>
                    We are currently verifying your information. <br></br>Please
                    wait for the email confirmation.
                    <br></br>
                    Thank you for your patience!
                  </p>

                  {/* Close button */}
                  <Button
                    variant="contained"
                    onClick={handleClosePopup}
                    style={{
                      color: "#FFFFFF",
                      background: "#213555",
                      borderRadius: "10px",
                      width: "150px",
                      fontWeight: "bold",
                      marginTop: "20px",
                    }}
                  >
                    Done
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
