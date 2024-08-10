import Shortner from "./Shortner";

import brandRecognition from "../../src/assets/images/icon-brand-recognition.svg";
import detailedRecords from "../../src/assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../../src/assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="bg-gray-200 pt-10 ">
      <Shortner />
      <div className="flex flex-col justify-center items-center w-full font-bold mt-20">
        <div className="flex flex-col justify-between items-center w-1/2 h-28 m-auto">
          <h1 className="text-5xl">Advanced Statistics</h1>
          <h1 className="text-gray-400 w-3/4 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </h1>
        </div>
        <div className="flex w-3/4 justify-between font-light mt-10 mb-10">
          <div className="bg-white w-80 p-5 text-justify rounded-md">
            <div className="bg-purple-950 w-12 h-12 p-3 rounded-full">
              <img src={brandRecognition} alt="Brand Recognition" />
            </div>
            <h1 className="font-bold text-xl mt-5">Brand Recognition</h1>
            <p className="mt-5">
              Solopreneurship is a business model where an individual takes on
              the role of the founder, manager, and operator of their business
              without relying on a team or co-founders. Unlike traditional
              entrepreneurs who may seek to build large companies with extensive
              staff, solopreneurs prefer to maintain full control over their
              business operations
            </p>
          </div>
          <div className="bg-white w-80 p-5 text-justify rounded-md">
            <div className="bg-purple-950 w-12 h-12 p-3 rounded-full">
              <img src={detailedRecords} alt="Detailed Records" />
            </div>
            <h1 className="font-bold text-xl mt-5">Detailed Records</h1>
            <p className="mt-5">
              Solopreneurship is a business model where an individual takes on
              the role of the founder, manager, and operator of their business
              without relying on a team or co-founders. Unlike traditional
              entrepreneurs who may seek to build large companies with extensive
              staff, solopreneurs prefer to maintain full control over their
              business operations
            </p>
          </div>
          <div className="bg-white w-80 p-5 text-justify rounded-md">
            <div className="bg-purple-950 w-12 h-12 p-3 rounded-full">
              <img src={fullyCustomizable} alt="Fully-Customizable" />
            </div>
            <h1 className="font-bold text-xl mt-5">Fully Customizable</h1>
            <p className="mt-5">
              Solopreneurship is a business model where an individual takes on
              the role of the founder, manager, and operator of their business
              without relying on a team or co-founders. Unlike traditional
              entrepreneurs who may seek to build large companies with extensive
              staff, solopreneurs prefer to maintain full control over their
              business operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
