import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCustomer = () => {
  const [mobile, setMobile] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //   }
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      "https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/GetMemberBalance",
      {
        method: "post",
        body: JSON.stringify({ mobile, ErrorMessage }),
        headers: {
          "Content-Type": "application/json",
          //   Accept: "*/*",
        },
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result.ErrorMessage);
    mobile === "9876543301"
      ? history("/customerexits")
      : history("/customernotexits");
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
          <label
            htmlFor="inputPassword"
            className="col-4 col-xs-4 col-sm-5 col-md-4 col-form-label textR"
          >
            Enter Customer Mobile Number <span>*</span>
          </label>
          <div className="col-4 col-xs-4 col-sm-5 col-md-3">
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
              id="inputPassword"
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
        {ErrorMessage}
        {/* </div> */}
        {/* {mobile === "8096958087"
          ? history("/customerexits")
          : history("/customernotexits")} */}
      </div>
    </>
  );
};

export default SearchCustomer;
