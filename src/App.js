import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-220414577-1"
        ></script>
        <script></script>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
