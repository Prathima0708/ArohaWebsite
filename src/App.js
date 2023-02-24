import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { ThankYou } from "./components/ThankYou/ThankYou";
import GoogleAnalyticsStatus from "./components/GoogleAnalyticsStatus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
