import React, { useState } from "react";
import axios from "axios";

function OnboardCustomer() {
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [DOB, setDOB] = useState("");
  const [vehicle, setVehicle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/MemberService",
        {
          firstName,
          lastName,
          DOB,
          mobile,
          vehicle,
        }
      )
      .then((res) => console.log(`Posting data`, res))
      .catch((err) => alert(err.ErrorMessage));

    // mobile === "9876543301"
    //   ? history("/customerexits")
    //   : history("/customernotexits");
  };
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mt-5">
              <h2 className="Heading-text">IOCL Loyalty System</h2>
              <h2 className="">Onboard Customer</h2>
            </div>
          </div>

          <div className="mt-5 row justify-content-center">
            <label
              htmlFor="inputPassword1"
              className="col-sm-6 col-form-label textR"
            >
              Enter Customer First Name <span>*</span>
            </label>
            <div className="col-sm-6">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                className="form-control"
                id="inputPassword1"
              />
            </div>

            <label
              htmlFor="inputPassword2"
              className="col-sm-6 col-form-label textR mt-3"
            >
              Enter Customer Last Name
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                className="form-control"
                id="inputPassword2"
              />
            </div>

            <label
              htmlFor="inputPassword3"
              className="col-sm-6 col-form-label textR mt-3"
            >
              Enter Customer DOB <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="date"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                className="form-control"
                id="inputPassword3"
              />
            </div>

            <label
              htmlFor="inputPassword4"
              className="col-sm-6 col-form-label textR mt-3"
            >
              Enter Customer Mobile Number <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="form-control"
                id="inputPassword4"
              />
            </div>

            <label
              htmlFor="inputPassword5"
              className="col-sm-6 col-form-label textR mt-3"
            >
              Enter Customer Vehicle Number <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="form-control"
                id="inputPassword5"
              />
            </div>

            {/* <div className="row justify-content-center mt-3"> */}
            <div className="col-3 offset-3 col-md-3 offset-md-3 col-sm-3 offset-sm-1 col-3 offset-1 mt-3">
              <button
                onClick={handleSubmit}
                className="btn btn-lg border-radius"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>

          {/* </div> */}
          {/* {mobile === "8096958087"
          ? history("/customerexits")
          : history("/customernotexits")} */}
        </div>
      </div>
    </>
  );
}

export default OnboardCustomer;
