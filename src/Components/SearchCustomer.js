import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchCustomer = () => {
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/GetMemberBalance",
        {
          member_number: "",
          mobile: mobile,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.ErrorMessage === "Success") {
          navigate("/customerexits", { state: mobile });
        } else if (res.data.ErrorMessage === "No Mobile Found") {
          navigate("/customernotexits", { state: mobile });
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
          <div className="col-xs-12 col-md-12 col-sm-12 text-center">
            <div className="">
              <h2 className="Heading-text">IOCL Loyalty System</h2>
              <h3 className="">Search Customer</h3>

              <label
                htmlFor="inputPassword"
                className="col-md-12 text-center col-form-label mt-5"
              >
                Enter Customer Mobile Number<span>*</span>
              </label>
              <div className="col-md-6 offset-md-3 mt-1">
                <input
                  type="text"
                  value={mobile}
                  autoComplete="off"
                  onChange={(e) => setMobile(e.target.value)}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
              <div className="col-md-12 text-center mt-3">
                <button
                  onClick={handleSubmit}
                  className="btn btn-lg border-radius"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="col-md-12 text-center mt-3">
                <button
                  onClick={backHome}
                  className="btn btn-sm border-radius"
                  type="submit"
                >
                  Go Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCustomer;
