import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import {
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0b0b21";
      showAlert("Dark mode Enabled!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled!", "success")
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  };

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<div className="container my-3">
          <TextForms heading="TextUtils - word Counter Character Counter Remove extra spaces" showAlert={showAlert} mode={mode} />
        </div>} />
        <Route path="/about" element={<About about="About Us" mode={mode} />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      {/* <Alerts alert={alert}/> */}
    </>


  );
}

export default App;

