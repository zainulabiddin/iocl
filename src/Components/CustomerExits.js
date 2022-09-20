import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CustomerExits = (props) => {
  const [memberNumber1, setMemberNumber1] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  // const goHome = () => {
  //   navigate("/accruepoint");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/GetMemberBalance",
        {
          MemberNumber: memberNumber1,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.ErrorMessage === "Please pass Mobile or Member Number") {
          navigate("/Accruepoint", { state: location.state.MemberNumber });
        } else {
          alert("Please fill Mobile Number");
        }
      })
      .catch((err) => console.log(err));
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
              Customer Mobile Number {location.state.mobile} already exists in
              Loyalty System
            </p>
          </div>
          <div className="col-md-12 text-center">
            <button
              onClick={handleSubmit}
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
