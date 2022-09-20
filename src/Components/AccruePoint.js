import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function AccruePoint() {
  const initialValues1 = {
    memberNumber: "",
    amount: "",
    points: "1",
    process: "null",
    product: "Petrol",
    transactionType: "Accrual",
    txnNumber: "IOCL_0079",
    dealerCode: "D1012",
  };

  const [userValues1, setUserValues1] = useState(initialValues1);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValues1({ ...userValues1, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        " https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/CreateTransaction",
        {
          member_number: location.state,
          amount: userValues1.amount,
          points: userValues1.points,
          process: userValues1.process,
          product: userValues1.product,
          transaction_type: userValues1.transactionType,
          txn_number: userValues1.txnNumber,
          dealer_code: userValues1.dealerCode,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.ErrorMessage === "No Member Found") {
          alert("No Member Found", res.data.ErrorMessage);
        } else if (res.data.ErrorMessage === "Duplicate Transaction") {
          alert("Duplicate Transaction", res.data.ErrorMessage);
        } else if (res.data.ErrorMessage === "Success") {
          alert("Success", res.data.ErrorMessage);
          let obj1 = {
            mobile: res.data.mobile,
            TxnId: res.data.TxnId,
            PointsAwarded: res.data.PointsAwarded,
            MemberBalance: res.data.MemberBalance,
          };
          navigate("/accuresuccess", { state: obj1 });
        } else {
          alert("All fileds Required", res.data.ErrorMessage);
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
            <h3 className="">Accrue Loyalty Point</h3>
          </div>
        </div>

        <div className="mt-5 row">
          <label
            htmlFor="inputPassword1"
            className="col-12 col-md-6 col-form-label textRT"
          >
            Enter Customer Membership Number (Auto populated from previous
            transaction results otherwise empty, non editable) <span>*</span>
          </label>
          <div className="col-md-6">
            <input
              type="text"
              disabled
              name="memberNumber"
              value={location.state}
              onChange={handleChange}
              className="form-control"
              id="inputPassword1"
            />
          </div>

          <label
            htmlFor="inputPassword2"
            className="col-md-6 col-form-label textR"
          >
            Amount of Fuel Purchased <span>*</span>
          </label>
          <div className="col-md-6 inputMob">
            <input
              type="text"
              name="amount"
              value={userValues1.amount}
              onChange={handleChange}
              className="form-control"
              id="inputPassword2"
            />
          </div>

          <label
            htmlFor="inputPassword3"
            className="col-md-6 col-form-label textR"
          >
            Points (Populated By Default, non editable)
          </label>
          <div className="col-md-6 inputMob">
            <input
              type="text"
              placeholder="1"
              disabled
              name="points"
              value={userValues1.points}
              onChange={handleChange}
              className="form-control"
              id="inputPassword3"
            />
          </div>

          <label
            htmlFor="inputPassword4"
            className="col-md-6 col-form-label textR"
          >
            Process (Populated By Default, non editable)
          </label>
          <div className="col-md-6 inputMob">
            <input
              type="text"
              placeholder="null"
              disabled
              name="process"
              value={userValues1.process}
              onChange={handleChange}
              className="form-control"
              id="inputPassword4"
            />
          </div>

          <label
            htmlFor="inputPassword5"
            className="col-md-6 col-form-label textR"
          >
            Select Fuel Type <span>*</span>
          </label>
          <div className="col-md-6 inputMob">
            <select
              name="product"
              value={userValues1.product}
              className="custom-select form-select"
              id="inputPassword5"
              onChange={handleChange}
            >
              <option>
                <i className="fa fa-angle-double-right"></i>Select
              </option>
              <option value="Diesel">Diesel</option>
              <option selected value="Petrol">
                Petrol
              </option>
            </select>
          </div>

          <label
            htmlFor="inputPassword6"
            className="col-md-6 col-form-label textR"
          >
            Select Transaction Type <span>*</span>
          </label>
          <div className="col-md-6 inputMob">
            <select
              className="custom-select form-select"
              name="transactionType"
              value={userValues1.transactionType}
              id="inputPassword6"
              onChange={handleChange}
            >
              <option>
                <i className="fa fa-angle-double-right"></i>Select
              </option>
              <option selected value="Accrual">
                Accrual
              </option>
            </select>
          </div>

          <label
            htmlFor="inputPassword7"
            className="col-md-6 col-form-label textR"
          >
            Select Transaction Number <span>*</span>
          </label>
          <div className="col-md-6 inputMob">
            <input
              type="text"
              name="txnNumber"
              value={userValues1.txnNumber}
              onChange={handleChange}
              className="form-control"
              id="inputPassword7"
            />
          </div>

          <label
            htmlFor="inputPassword8"
            className="col-md-6 col-form-label textR"
          >
            Enter Dealer Code <span>*</span>
          </label>
          <div className="col-md-6 inputMob">
            <input
              type="text"
              disabled
              value={userValues1.dealerCode}
              name="dealerCode"
              onChange={handleChange}
              className="form-control"
              id="inputPassword8"
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
    </>
  );
}

export default AccruePoint;
