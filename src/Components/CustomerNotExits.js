import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CustomerNotExits = () => {
  const history = useNavigate();
  const location = useLocation();
  const home = () => {
    history("/");
  };
  const onboard = () => {
    history("/onboardcustomer");
  };
  return (
    <>
      <div className="container containerR">
        <div className="row">
          <div className="col-sm-12">
            <div className="">
              <div className="col-xs-12">
                <div className="text-center">
                  <h2 className="Heading-text">IOCL Loyalty System</h2>
                  <h3 className="">Search Customer</h3>
                </div>
              </div>

              <div className="col-12 col-xs-12 col-sm-12 mt-5">
                <p className="text-center">
                  Customer Mobile Number {location.state} dose not exists in
                  Loyalty System
                </p>
              </div>
              <div className="col-md-12 text-center mt-3">
                <button
                  onClick={onboard}
                  className="btn btn-lg border-radius"
                  type="button"
                >
                  Onboard Customer
                </button>
              </div>
              <div className="col-md-12 text-center mt-3">
                <button
                  onClick={home}
                  className="btn btn-sm border-radius"
                  type="button"
                >
                  Customer Not Interested Go Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerNotExits;
