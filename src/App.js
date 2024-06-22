import './App.css';
import Navbar from './components/Navbar';
// import About from './components/about';
import TextForm from './components/textform';
import React, { useState } from 'react';
import Alert from './components/alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'pink';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'; // Resetting background color for light mode
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light mode";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" home =" Home"aboutText="about" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
