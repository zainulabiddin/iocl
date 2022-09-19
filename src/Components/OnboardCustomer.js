import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OnboardCustomer() {
  const initialValues = {
    mobile: "",
    firstName: "",
    lastName: "",
    dob: "",
    vehicle: "",
  };
  const [userValues, setUserValues] = useState(initialValues);
  const tooladded = {
    mobile: userValues.mobile,
    add: "Added",
  };
  const toolupdated = {
    mobile: userValues.mobile,
    update: "Updated",
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let d = new Date(userValues.dob);

    let date = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
    console.log(date);

    axios
      .post(
        "https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/MemberService",
        {
          first_name: userValues.firstName,
          last_name: userValues.lastName,
          dob: date,
          mobile: userValues.mobile,
          vehicle: userValues.vehicle,
        }
      )
      .then((res) => {
        console.log("Respose", res);
        if (res.data.ErrorMessage === "Member Created Sucessfully") {
          alert("Created Sucessfully", res.data.ErrorMessage);
          navigate(
            "/onboardsuccess",
            // { state: userValues.mobile },
            { state: tooladded }
          );
        } else if (res.data.ErrorMessage === "Member Details Updated") {
          alert("Updated Succesfully", res.data.ErrorMessage);
          navigate(
            "/onboardsuccess",

            { state: toolupdated }
          );
        } else if (res.data.ErrorMessage === "Member update Failed") {
          alert("Member update Failed", res.data.ErrorMessage);
        } else if (
          userValues.mobile === "" &&
          userValues.firstName === "" &&
          userValues.dob === "" &&
          userValues.vehicle === ""
        ) {
          alert("All fields required");
        } else if (res.data.ErrorMessage === "Mobile Not Found") {
          alert("All Fields required");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container containerR">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="Heading-text">IOCL Loyalty System</h2>
            <h3 className="">Onboard Customer</h3>
          </div>
        </div>

        <div className="mt-5 row">
          <label
            htmlFor="inputPassword1"
            className="col-sm-6 col-form-label inputMob textR"
          >
            Enter Customer First Name <span>*</span>
          </label>
          <div className="col-sm-6 inputMob">
            <input
              type="text"
              name="firstName"
              value={userValues.firstName}
              onChange={handleChange}
              className="form-control"
              id="inputPassword1"
            />
          </div>

          <label
            htmlFor="inputPassword2"
            className="col-sm-6 col-form-label inputMob textR"
          >
            Enter Customer Last Name
          </label>
          <div className="col-sm-6 inputMob">
            <input
              type="text"
              name="lastName"
              value={userValues.lastName}
              onChange={handleChange}
              className="form-control"
              id="inputPassword2"
            />
          </div>

          <label
            htmlFor="inputPassword3"
            className="col-sm-6 col-form-label inputMob textR"
          >
            Enter Customer DOB <span>*</span>
          </label>
          <div className="col-sm-6 inputMob">
            <input
              type="date"
              name="dob"
              value={userValues.dob}
              onChange={handleChange}
              className="form-control"
              id="inputPassword3"
            />
          </div>

          <label
            htmlFor="inputPassword4"
            className="col-sm-6 col-form-label inputMob textR"
          >
            Enter Customer Mobile Number <span>*</span>
          </label>
          <div className="col-sm-6 inputMob">
            <input
              type="text"
              name="mobile"
              value={userValues.mobile}
              onChange={handleChange}
              className="form-control"
              id="inputPassword4"
            />
          </div>

          <label
            htmlFor="inputPassword5"
            className="col-sm-6 col-form-label inputMob textR"
          >
            Enter Customer Vehicle Number <span>*</span>
          </label>
          <div className="col-sm-6 inputMob">
            <input
              type="text"
              name="vehicle"
              value={userValues.vehicle}
              onChange={handleChange}
              className="form-control"
              id="inputPassword5"
            />
          </div>

          {/* <div className="row justify-content-center mt-3"> */}
          <div className="col-md-12 text-center mt-3">
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
    </>
  );
}

export default OnboardCustomer;
