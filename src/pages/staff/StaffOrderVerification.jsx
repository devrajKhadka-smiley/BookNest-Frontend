import React, { useState } from "react";

const StaffOrderVerification = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="h-screen overflow-auto flex items-start justify-center bg-white pt-12 pb-12">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Order Verification Panel
        </h2>

        {/* Stepper */}
        <div className="flex justify-center mb-8">
          <div className="w-80 bg-gray-100 rounded-md p-4 flex items-center justify-between">
            {/* Step 1 (Now Member ID Verification) */}
            <div
              className="flex flex-col items-center text-center w-1/3 relative cursor-pointer"
              onClick={() => setStep(1)}
            >
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  step === 1 ? "bg-[#359BA2] text-white" : "bg-gray-200 text-gray-700"
                } text-sm font-semibold z-10`}
              >
                1
              </div>
              <div className="absolute top-3 left-1/2 w-full h-0.5 bg-purple-300 -z-10" />
            </div>

            {/* Step 2 (Now Claim Code) */}
            <div
              className="flex flex-col items-center text-center w-1/3 cursor-pointer"
              onClick={() => setStep(2)}
            >
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  step === 2 ? "bg-[#359BA2] text-white" : "bg-gray-200 text-gray-700"
                } text-sm font-semibold`}
              >
                2
              </div>
            </div>

            {/* Step 3 (Now Order Details) */}
            <div
              className="flex flex-col items-center text-center w-1/3 cursor-pointer"
              onClick={() => setStep(3)}
            >
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  step === 3 ? "bg-[#359BA2] text-white" : "bg-gray-200 text-gray-700"
                } text-sm font-semibold`}
              >
                3
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Step 1: Member ID Verification */}
        {step === 1 && (
          <div className="border rounded-lg shadow-md px-8 py-8 bg-white">
            <label className="block text-base font-medium text-gray-700 mb-3">
              Member ID
            </label>
            <input
              type="text"
              placeholder="MM-0000000000"
              className="w-full border border-gray-300 rounded-md px-5 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#359BA2] focus:border-transparent mb-6"
            />

            <div className="flex justify-between">
              <button
                className="px-6 py-3 border border-black rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="px-8 py-3 bg-gray-500 text-white rounded-md text-base font-medium hover:bg-gray-600"
                onClick={() => setStep(2)}
              >
                Verify Member ID
              </button>
            </div>
          </div>
        )}

        {/* ✅ Step 2: OTP Claim Code */}
        {step === 2 && (
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
              <button
                className="px-6 py-3 border border-black rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="px-8 py-3 bg-gray-500 text-white rounded-md text-base font-medium hover:bg-gray-600"
                onClick={() => setStep(3)}
              >
                Verify Code
              </button>
            </div>
          </div>
        )}

        {/* ✅ Step 3: Order Details View */}
        {step === 3 && (
          <div className="border rounded-lg shadow-md px-8 py-8 bg-white space-y-6">
            {/* Order Details */}
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold mb-2">Order Details</h3>
              <div className="flex justify-between text-sm">
                <div>
                  <p>Order ID: Ord_12345</p>
                  <p>Order Date: 2024-05-05</p>
                </div>
                <div>
                  <p>User Name: Hello</p>
                  <p>Order Status: Pending</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold mb-2">Order Items</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">S.N</th>
                    <th className="border p-2">Book Name</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Unit Price</th>
                    <th className="border p-2">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 text-center">1</td>
                    <td className="border p-2">Very Good Book</td>
                    <td className="border p-2 text-center">2</td>
                    <td className="border p-2 text-center">250</td>
                    <td className="border p-2 text-center">500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                className="px-6 py-3 border border-black rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button className="px-8 py-3 bg-gray-500 text-white rounded-md text-base font-medium hover:bg-gray-600">
                Checkout Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffOrderVerification;
