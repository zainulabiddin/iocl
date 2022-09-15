import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerNotExits = (props) => {
  const history = useNavigate();
  const home = () => {
    history("/");
  };
  const onboard = () => {
    history("/onboardcustomer");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mt-5">
            <h2 className="Heading-text">IOCL Loyalty System</h2>
            <h2 className="">Search Customer</h2>
          </div>
        </div>

        <div className="mt-5 row justify-content-center">
          <div className="col-sm-6 offset-sm-2">
            <p>
              Customer Mobile Number {props.mobile} dose not exists in Loyalty
              System
            </p>
          </div>
          <div className="col-sm-5 offset-sm-3">
            <button
              onClick={onboard}
              className="btn btn-lg border-radius"
              type="button"
            >
              Onboard Customer
            </button>
          </div>
          <div className="col-sm-5 offset-sm-1 mt-3">
            <button
              onClick={home}
              className="btn btn-lg border-radius"
              type="button"
            >
              Customer Not Interested Go Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerNotExits;
