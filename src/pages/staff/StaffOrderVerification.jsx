import React from "react";

const StaffOrderVerification = () => {
  return (
    <div className="h-screen overflow-hidden flex items-start justify-center bg-white pt-12">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Order Verification Panel
        </h2>

        {/* Stepper */}
        <div className="flex justify-center mb-8">
          <div className="w-80 bg-gray-100 rounded-md p-4 flex items-center justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center w-1/3 relative">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#359BA2] text-white text-sm font-semibold z-10">
                1
              </div>
              <div className="absolute top-3 left-1/2 w-full h-0.5 bg-purple-300 -z-10" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center w-1/3">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
                2
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center w-1/3">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
                3
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="border rounded-lg shadow-md px-8 py-8 bg-white">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Enter Claim Code
          </label>
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit  OTP"
            className="w-full border border-gray-300 rounded-md px-5 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#359BA2] focus:border-transparent mb-6"
          />

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="px-6 py-3 border border-black rounded-md text-base font-medium hover:bg-gray-100">
              Back
            </button>
            <button className="px-8 py-3 bg-gray-500 text-white rounded-md text-base font-medium hover:bg-gray-600">
              Verify Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOrderVerification;
