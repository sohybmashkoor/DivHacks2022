import React from 'react';
import './App.css';
import Launch from './Pages/Launch';
import {Browse} from "./Pages/Browse";
import {MyItems} from "./Pages/MyItems";
import {MyAccount} from "./Pages/MyAccount";
import {ItemsRequested} from "./Pages/ItemsRequested";
import {UploadItem} from "./Pages/UploadItem";
import EditMyItem from "./Pages/EditMyItem";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Launch />} />
          <Route exact path="/Browse" element={<Browse />} />
          <Route exact path="/MyItems" element={<MyItems />} />
          <Route exact path="/MyAccount" element={<MyAccount />} />
          <Route exact path="/ItemsRequested" element={<ItemsRequested />} />
          <Route exact path="/UploadItem" element={<UploadItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;