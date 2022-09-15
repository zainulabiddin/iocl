import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerExits = (props) => {
  const history = useNavigate();
  const navigate = () => {
    history("/accruepoint");
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
              Customer Mobile Number {props.mobile} already exists in Loyalty
              System
            </p>
          </div>
          <div className="col-sm-5 offset-sm-3">
            <button
              onClick={navigate}
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
