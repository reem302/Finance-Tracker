import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import LogIn from "./components/logIn/logIn";
import Register from "./components/register/register";
import AboutUs from "./components/aboutUs/aboutUs";
import ContactUs from "./components/contactUs/contactUs";
import HomePage from "./components/homePage/homePage";
import PaymentTracker from "./components/paymentTracker/paymentTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="paymentTracker" element={<PaymentTracker />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
