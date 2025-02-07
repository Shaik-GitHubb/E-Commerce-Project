import React, { useState } from 'react';

const CheckoutForm = () => {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [pin,setPin]=useState("");
  const [cardnumber,setCardnumber]=useState("");
  const [expiry,setExpiry]=useState("");
  const [cvv,setCvv]=useState("");

  const data={fname,lname,address,city,state,pin,cardnumber,expiry,cvv};

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300">
          <h1 className="text-2xl font-bold text-black mb-4">Checkout</h1>

          {/* Shipping Address */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-black mb-2">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-black mb-1">First Name</label>
                <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300 " required/>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-black mb-1">Last Name</label>
                <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="block text-black mb-1">Address</label>
              <input type="text" id="address" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
            </div>

            <div className="mt-4">
              <label htmlFor="city" className="block text-black mb-1">City</label>
              <input type="text" id="city" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block text-black mb-1">State</label>
                <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
              </div>
              <div>
                <label htmlFor="zip" className="block text-black mb-1">PIN Code</label>
                <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">Payment Information</h2>
            <div className="mt-4">
              <label htmlFor="card_number" className="block text-black mb-1">Card Number</label>
              <input type="text" id="card_number" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="exp_date" className="block text-black mb-1">Expiration Date</label>
                <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-black mb-1">CVV</label>
                <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3 bg-gray-100 text-black border-gray-300" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
