import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchCustomer = () => {
  const [mobile, setMobile] = useState("");
  const history = useNavigate();

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
          // alert("Please fill the Mobile Number");
          history("/customerexits");
        } else {
          history("/customernotexits");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container containerR">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="">
              <h2 className="Heading-text">IOCL Loyalty System</h2>
              <h2 className="">Search Customer</h2>

              <label
                htmlFor="inputPassword"
                className="col-md-6 col-form-label textL mt-5"
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
              <div className="col-md-4 offset-md-4 mt-3">
                <button
                  onClick={handleSubmit}
                  className="btn btn-lg border-radius"
                  type="submit"
                >
                  Submit
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
