import React, { useEffect, useState } from "react";
import { useCart } from "../Store/cartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const CheckoutForm = () => {
  const { cart, totalPrice, totalItems } = useCart();
  const [address, setAddress] = useState([]);
  const [paymentMethod,setPaymentMethod] = useState("");
  const navigate =useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/address/get", { withCredentials: true })
      .then((res) => res.data.data[0])
      .then((val) => {
        console.log("val", val);
        setAddress(val);
      });
  }, []);

  const handlePaymentMethod=(e)=>{
    setPaymentMethod(e.target.value);
  }

  const placeOrder = ()=>{
    if(!paymentMethod){
      toast.error("Please select a payment method", {position:"top-center",autoClose:1500,hideProgressBar:false,closeOnClick:false,pauseOnHover:true,draggable:true,progress:undefined,theme:"light",transition:Bounce});
      return;
    }
    toast.success("Order placed successfully", {position:"top-center",autoClose:1500,hideProgressBar:false,closeOnClick:false,pauseOnHover:true,draggable:true,progress:undefined,theme:"light",transition:Bounce});
    navigate("/");
  }

  return (
    <div className="p-6 flex flex-col gap-6 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 text-center">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Order Summary
          </h3>
          <div className="flex flex-col gap-4 ">
            {cart?.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">
              Delivery Address
            </h3>
            <p className="text-gray-700">
              {address.address || "No Address Found"}
            </p>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Price Details
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Price ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Discount</span>
              <span className="text-green-600">₹0</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-2">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">
              Payment Method
            </h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="phonepe"
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  onChange={handlePaymentMethod}
                />
                <span className="text-gray-700">PhonePe</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="paytm"
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  onChange={handlePaymentMethod}
                />
                <span className="text-gray-700">Paytm</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  onChange={handlePaymentMethod}
                />
                <span className="text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
