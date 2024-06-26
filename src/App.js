import React, { useState } from 'react'

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = "white";
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amzing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      document.title = "TextUtils-Light Mode";

    }
  }

  return (
    <>
      {/* {we uses exact path for exact rendering because react uses partial rendering} */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} /> 

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character counter, Remove extra spaces" mode={mode} />} />

          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
