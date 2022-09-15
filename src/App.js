import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IoclDetails from "./Components/IoclDetails";
import SearchCustomer from "./Components/SearchCustomer";
import CustomerExits from "./Components/CustomerExits";
import CustomerNotExits from "./Components/CustomerNotExits";
import OnboardCustomer from "./Components/OnboardCustomer";
import AccruePoint from "./Components/AccruePoint";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IoclDetails />} />
          <Route path="/searchcustomer" element={<SearchCustomer />} />
          <Route path="/customerexits" element={<CustomerExits />} />
          <Route path="/customernotexits" element={<CustomerNotExits />} />
          <Route path="/onboardcustomer" element={<OnboardCustomer />} />
          <Route path="/accruepoint" element={<AccruePoint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
