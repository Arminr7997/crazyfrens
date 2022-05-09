import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//styles
import "./App.css";
import "@/assets/scss/index.scss";
//containers
import MainLayout from "./containers/MainLayout";
//pages
import Login from "./pages/auth/Login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import NotFound from "./pages/errors/NotFound";
//web3
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function App() {
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, "any");
    library.pollingInterval = 15000;
    return library;
  };

  return (
    <Fragment>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
          <Routes>
            <Route index path="/auth" element={<Login />} />

            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Web3ReactProvider>
    </Fragment>
  );
}

export default App;
