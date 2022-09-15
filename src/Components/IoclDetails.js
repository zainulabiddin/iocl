import React from "react";
import { useNavigate } from "react-router-dom";

const IoclDetails = () => {
  const history = useNavigate();
  const search = () => {
    history("/searchcustomer");
  };
  const onboard = () => {
    history("/onboardcustomer");
  };
  const accrue = () => {
    history("/accruepoint");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mt-5">
            <h2 className="Heading-text">IOCL Loyalty System</h2>
          </div>
        </div>
        <div className="row">
          <div className="d-grid gap-4 col-7 col-xs-7 col-sm-6 col-md-4 mx-auto mt-5">
            <button
              onClick={search}
              className="btn btn-lg border-radius"
              type="button"
            >
              Search Customer
            </button>
            <button
              disabled
              onClick={onboard}
              className="btn btn-lg border-radius"
              type="button"
            >
              Onboard Customer
            </button>
            <button
              disabled
              onClick={accrue}
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

export default IoclDetails;
