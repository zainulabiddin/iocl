import React, { Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import IoclDetails from "./Components/IoclDetails";
// import SearchCustomer from "./Components/SearchCustomer";
// import CustomerExits from "./Components/CustomerExits";
// import CustomerNotExits from "./Components/CustomerNotExits";
// import OnboardCustomer from "./Components/OnboardCustomer";
// import AccruePoint from "./Components/AccruePoint";
// import OnboardSuccess from "./Components/OnboardSuccess";
// import AccureSuccess from "./Components/AccureSuccess";

const IoclDetails = React.lazy(() => import("./Components/IoclDetails.js"));
const SearchCustomer = React.lazy(() =>
  import("./Components/SearchCustomer.js")
);
const CustomerNotExits = React.lazy(() =>
  import("./Components/CustomerNotExits.js")
);
const CustomerExits = React.lazy(() => import("./Components/CustomerExits.js"));
const OnboardCustomer = React.lazy(() =>
  import("./Components/OnboardCustomer.js")
);
const AccruePoint = React.lazy(() => import("./Components/AccruePoint.js"));
const OnboardSuccess = React.lazy(() =>
  import("./Components/OnboardSuccess.js")
);
const AccureSuccess = React.lazy(() => import("./Components/AccureSuccess.js"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                height: "500px",
                zIndex: "999999",
              }}
            >
              Loading ...
            </h1>
          }
        >
          <Routes>
            <Route exact path="/" element={<IoclDetails />} />
            <Route exact path="/searchcustomer" element={<SearchCustomer />} />

            <Route exact path="/customerexits" element={<CustomerExits />} />
            <Route
              exact
              path="/customernotexits"
              element={<CustomerNotExits />}
            />

            <Route
              exact
              path="/onboardcustomer"
              element={<OnboardCustomer />}
            />
            <Route exact path="/accruepoint" element={<AccruePoint />} />
            <Route exact path="/onboardsuccess" element={<OnboardSuccess />} />
            <Route exact path="/accuresuccess" element={<AccureSuccess />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
