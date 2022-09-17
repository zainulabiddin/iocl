import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerSuccess = (props) => {
  const history = useNavigate();
  const navigate = () => {
    history("/accruepoint");
  };
  return (
    <>
      <div className="container containerR">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="Heading-text">IOCL Loyalty System</h2>
            <h3 className="">Onboard Customer</h3>
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col-md-12">
            <p className="text-center">
              Customer Mobile Number {props.mobile} Successfully added/updated
              in Loyalty System
            </p>
          </div>
          <div className="col-md-5 offset-sm-4">
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

export default CustomerSuccess;
