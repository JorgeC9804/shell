import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import Session from "./pages/Session";
import Owner from "./moduls/Owner";
import Client from "./pages/Client";
import Employee from "./pages/Employee";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/session/:namesession" element={<Session />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
