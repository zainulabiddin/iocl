import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerExits = (props) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/accruepoint");
  };
  return (
    <>
      <div className="container containerR">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="Heading-text">IOCL Loyalty System</h2>
            <h3 className="">Search Customer</h3>
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col-md-12">
            <p className="text-center">
              Customer Mobile Number {props.mobile} already exists in Loyalty
              System
            </p>
          </div>
          <div className="col-md-5 offset-sm-4">
            <button
              onClick={goHome}
              className="btn btn-lg border-radius"
              type="button"
            >
              Accrue Loyalty Point
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerExits;
