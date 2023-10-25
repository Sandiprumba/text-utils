import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route>
          <Route
            exact
            path="/about"
            element={<About mode={mode} title="About" />}
          />
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils- Word Counter,Character Counter"
                mode={mode}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

/* <div>
  {/* <Navbar title="React" about="About" /> */

//   <Navbar
//     changeColor={changeColor}
//     title="react"
//     mode={mode}
//     toggleMode={toggleMode}
//   />
//   <Alert alert={alert} />
//   <TextForm showAlert={showAlert} heading="lets rock and roll" />
//   <About title="About-Us" />
// </div>; */}
