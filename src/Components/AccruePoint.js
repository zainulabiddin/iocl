import React, { useState } from "react";
import axios from "axios";

function AccruePoint() {
  const [memberNumber, setMemberNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [points, setPoints] = useState(1);
  const [process, setProcess] = useState(null);
  const [product, setProduct] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [txnNumber, setTxnNumber] = useState("");
  const [dealerCode, setDealerCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/CreateTransaction",
        {
          memberNumber,
          amount,
          points,
          process,
          product,
          transactionType,
          txnNumber,
          dealerCode,
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
              <h2 className="">Accrue Loyalty Point</h2>
            </div>
          </div>

          <div className="mt-5 row justify-content-center">
            <label
              htmlFor="inputPassword1"
              className="col-sm-6 col-form-label textRT"
            >
              Enter Customer Membership Number
              <br />
              (Auto populated from previous <br />
              transaction results otherwise empty, <br />
              non editable) <span>*</span>
            </label>
            <div className="col-sm-6">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={memberNumber}
                onChange={(e) => setMemberNumber(e.target.value)}
                className="form-control"
                id="inputPassword1"
              />
            </div>

            <label
              htmlFor="inputPassword2"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Enter Transaction Amount <span>*</span>
            </label>
            <div className="col-sm-6 mt-2">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                id="inputPassword2"
              />
            </div>

            <label
              htmlFor="inputPassword3"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Points (Populated By Default, non editable)
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                placeholder="1"
                disabled
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                className="form-control"
                id="inputPassword3"
              />
            </div>

            <label
              htmlFor="inputPassword4"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Process (Populated By Default, non editable)
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                placeholder="null"
                disabled
                value={process}
                onChange={(e) => setProcess(e.target.value)}
                className="form-control"
                id="inputPassword4"
              />
            </div>

            <label
              htmlFor="inputPassword5"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Select Fuel Type <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <select
                class="custom-select form-select"
                id="inputPassword5"
                onChange={(e) => setProduct(e.target.value)}
              >
                <option selected>
                  <i class="fa fa-angle-double-right"></i>Select
                </option>
                <option value="Fuel">Fuel</option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
              </select>
            </div>

            <label
              htmlFor="inputPassword6"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Select Transaction Type <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <select
                class="custom-select form-select"
                id="inputPassword6"
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option selected>
                  <i class="fa fa-angle-double-right"></i>Select
                </option>
                <option value="Accrual">Accrual</option>
                <option value="Accrual 1">Accrual 1</option>
                <option value="Accrual 2">Accrua 2</option>
              </select>
            </div>

            <label
              htmlFor="inputPassword7"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Select Transaction Number <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={txnNumber}
                onChange={(e) => setTxnNumber(e.target.value)}
                className="form-control"
                id="inputPassword7"
              />
            </div>

            <label
              htmlFor="inputPassword8"
              className="col-sm-6 col-form-label textR mt-2"
            >
              Enter Dealer Code <span>*</span>
            </label>
            <div className="col-sm-6 mt-3">
              <input
                style={{ width: "15rem" }}
                type="text"
                value={dealerCode}
                onChange={(e) => setDealerCode(e.target.value)}
                className="form-control"
                id="inputPassword8"
              />
            </div>

            {/* <div className="row justify-content-center mt-3"> */}
            <div className="col-3 offset-3 col-md-3 offset-md-3 col-sm-3 offset-sm-1 col-3 offset-1 mt-3 mb-5">
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

export default AccruePoint;
