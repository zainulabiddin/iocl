import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AccureSuccess = (props) => {
  const history = useNavigate();
  const location = useLocation();
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
              {location.state.mobile}.
              <br />
              New Loyalty Balance is {location.state.MemberBalance}
              <br />
              Transaction ID: {location.state.TxnId}
              <br />
              Accrual: {location.state.PointsAwarded}
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
