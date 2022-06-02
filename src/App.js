import logo from "./logo.svg";
import "./index.css";
import { MantineProvider } from "@mantine/core";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Path,
} from "react-router-dom";
import { Project, Home } from "./views";
import { Navbar } from "./components";

function App() {
  document.body.className = "bg-zinc-800 text-zinc-300 font-['Roboto']";
  

  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <Navbar />
        <div className="flex justify-center">
          <div className="container">
            <Routes>
              <Route path="/project/:id" element={<Project />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
