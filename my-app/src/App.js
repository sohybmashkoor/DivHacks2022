import React from 'react';
import './App.css';
import Launch from './Pages/Launch';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Launch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
