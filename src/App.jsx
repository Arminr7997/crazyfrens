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

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
