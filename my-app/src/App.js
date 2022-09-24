import React from 'react';
import './App.css';
import Launch from './Pages/Launch';
import {Browse} from "./Pages/Browse";
import {MyItems} from "./Pages/MyItems";
import {MyAccount} from "./Pages/MyAccount";
import {ItemsRequested} from "./Pages/ItemsRequested";
import {UploadItem} from "./Pages/UploadItem";
import {ViewItem} from "./Pages/ViewItem";
import {ViewMyItem} from "./Pages/ViewMyItem";
import {Resources} from "./Pages/Resources";
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
          <Route exact path="/ViewItem" element={<ViewItem />}/>
          <Route exact path="/Resources" element={<Resources />}/>
          <Route exact path="/ViewMyItem" element={<ViewMyItem />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;