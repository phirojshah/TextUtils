// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('light');
  const ToggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(2 21 36)'
      showAlert("Dark Mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled", "Success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }


  setTimeout(() => {
    setAlert(null)
  }, 1500)

  return (
    <div >
      <Navbar mode={mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />

      <div className='container'>
        <TextForm heading="Enter text to analyze below" showAlert={showAlert} mode={mode} />

      </div>
      {/* <About/> */}
    </div>
  );
}

export default App;
