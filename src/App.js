import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IoclDetails from "./Components/IoclDetails";
import SearchCustomer from "./Components/SearchCustomer";
import CustomerExits from "./Components/CustomerExits";
import CustomerNotExits from "./Components/CustomerNotExits";
import OnboardCustomer from "./Components/OnboardCustomer";
import AccruePoint from "./Components/AccruePoint";
import OnboardSuccess from "./Components/OnboardSuccess";
import AccureSuccess from "./Components/AccureSuccess";

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
          <Route path="/onboardsuccess" element={<OnboardSuccess />} />
          <Route path="/accuresuccess" element={<AccureSuccess />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
