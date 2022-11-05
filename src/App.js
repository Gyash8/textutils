import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let darkMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#08256A";
      showAlert("Dark Mode is enabled", "success");
      document.title = "Textutils -Dark Mode";
      // setInterval(() => {
      //   document.title="This is best website"
      // }, 2000);
      // setInterval(() => {
      //   document.title="install Now"
      // }, 1800);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled", "success");
      document.title = "Textutils -Light Mode";
    }
  };
  let redMode = () => {
    if (mode === "light") {
      setmode("red");
      document.body.style.backgroundColor = "#A42C2C";
      showAlert("Red Mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled", "success");
    }
  };
  let blackMode = () => {
    if (mode === "light") {
      setmode("red");
      document.body.style.backgroundColor = "#484141";
      showAlert("Black Mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TEXTUTILS"
        aboutText="About us"
        mode={mode}
        darkMode={darkMode}
        redMode={redMode}
        blackMode={blackMode}
      />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={  <TextForm
              showAlert={showAlert}
              heading="Enter Text To Analyze Below"
              mode={mode}
            /> }/>
          <Route exact path="/about" element={<About/>}/>
        
        </Routes>
        
      </div>
      </Router>
        
      
    </>
  );
}

export default App;
