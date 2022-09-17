import React from "react";
import { useNavigate } from "react-router-dom";

const AccureSuccess = (props) => {
  const history = useNavigate();
  const navigate = () => {
    history("/");
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
              Loyalty Points Successfully added for Customer Mobile Number
              9876543301.
              <br />
              New Loyalty Balance is 80
              <br />
              Transaction ID: 1-2ZYBT
              <br />
              Accrual: XR Base Points = 20; Amount Spent = 1500; INR=0
            </p>
          </div>
          <div className="col-md-5 offset-sm-4">
            <button
              onClick={navigate}
              className="btn btn-lg border-radius"
              type="button"
            >
              Go Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccureSuccess;
