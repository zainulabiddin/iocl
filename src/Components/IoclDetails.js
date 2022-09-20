import React from "react";
import { useNavigate } from "react-router-dom";

const IoclDetails = () => {
  const history = useNavigate();
  const search = () => {
    history("/searchcustomer");
  };
  // const onboard = () => {
  //   history("/onboardcustomer");
  // };
  // const accrue = () => {
  //   history("/accruepoint");
  // };
  return (
    <>
      <div className="container containerR">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="">
              <h2 className="Heading-text">IOCL Loyalty System</h2>
              <div className="col-md-12 text-center mt-5">
                <button
                  onClick={search}
                  className="btn btn-lg border-radius"
                  type="button"
                >
                  Search Customer
                </button>
                {/* <button
                  disabled
                  onClick={onboard}
                  className="btn btn-lg border-radius"
                  type="button"
                >
                  Onboard Customer
                </button> */}
                {/* <button
                  disabled
                  onClick={accrue}
                  className="btn btn-lg border-radius"
                  type="button"
                >
                  Accrue Loyalty Point
                </button> */}
              </div>
              <div className="col-md-12 text-center mt-3">
                {/* <iframe
              src="https://cpd-cpd4iocl.iocldemo-087848a71e03129c5fc8052c9aef35b0-0000.eu-gb.containers.appdomain.cloud/cognosanalytics/cpd4iocl/bi/?perspective=dashboard&amp;pathRef=.public_folders%2FIOCLDemoV2%2FSVOC_V1&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000182a606a5b2_00000000"
              width="100%"
              height="200"
              frameborder="0"
              gesture="media"
              allow="encrypted-media"
              allowfullscreen=""
            ></iframe> */}
                <a
                  href="https://cpd-cpd4iocl.iocldemo-087848a71e03129c5fc8052c9aef35b0-0000.eu-gb.containers.appdomain.cloud/cognosanalytics/cpd4iocl/bi/?perspective=dashboard&pathRef=.public_folders%2FIOCLDemoV2%2FSVOC_V1&action=view&mode=dashboard&subView=model00000182a606a5b2_00000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-sm border-radius">
                    Customer 390
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoclDetails;
