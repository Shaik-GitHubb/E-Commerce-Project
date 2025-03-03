// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Store/authContext";
// import { Bounce, toast } from "react-toastify";

// const Order = () => {

//     const navigate = useNavigate();
//     const [name,setName] = useState("");
//     const [phoneno,setPhoneno] = useState("");
//     const [pincode,setPincode] = useState("");
//     const [locality,setLocality] = useState("");
//     const [addres,setAddress] = useState("");
//     const [city,setCity] = useState("");
//     const [landmark,setLandmark] = useState("");
//     const {user}=useAuth();

//     const addAddress = async () => {
      
//       const newAddress = {
//         userid:user._id,
//         name:name,
//         phoneno:phoneno,
//         pincode:pincode,
//         locality:locality,
//         address:addres,
//         city:city,
//         landmark:landmark,
//       };

//       try{
//         const response = await axios.post("http://localhost:3000/address/post", newAddress,{withCredentials:true});

//         const data = await response?.data;
//         console.log("Response from server:", data);
//         if (response.status === 200) {
//           // alert(data.message);
//           toast.success(data.message, {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             transition: Bounce,
//           })
//           // navigate()
//         }
//       }catch(error){
//         console.log("Error Adding Address : ",error);
//       }

//     };

//     const goToHome = () => {
//       navigate("/");
//     }

//   return (
//     <>
      

//       <div className="flex justify-center p-6">
//         <div className="bg-blue-500 p-6 w-[30%] text-white text-center rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold">Fill Your Details</h1>
//           <p className="text-sm mt-1">To Get Your Items Delivered</p>
//         </div>

//         <div className="grid grid-cols-1 p-6 gap-4 w-[30%] bg-gray-100 shadow-md rounded-lg">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border rounded-md focus:outline-blue-500"
//             onChange={(e)=>setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             className="w-full p-3 border rounded-md focus:outline-blue-500"
//             onChange={(e)=>setPhoneno(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Pincode"
//             className="w-full p-3 border rounded-md focus:outline-blue-500"
//             onChange={(e)=>setPincode(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Locality"
//             className="w-full p-3 border rounded-md focus:outline-blue-500"
//             onChange={(e)=>setLocality(e.target.value)}
//           />
//           <textarea
//             placeholder="Address"
//             className="w-full p-3 border rounded-md focus:outline-blue-500 resize-none"
//             rows="3"
//             onChange={(e)=>setAddress(e.target.value)}
//           ></textarea>
//           <input
//             type="text"
//             placeholder="City/State/Town"
//             className="w-full p-3 border rounded-md focus:outline-blue-500"
//             onChange={(e)=>setCity(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Landmark (Optional)"
//             className="w-full p-3 border rounded-md focus:outline-blue-500"
//             onChange={(e)=>setLandmark(e.target.value)}
//           />
//           <button className="bg-orange-500 text-white p-3 font-semibold rounded-md hover:bg-orange-600 transition-all duration-300" onClick={addAddress}>
//             Add Address
//           </button>
//         </div>
//       </div>

      
//     </>
//   );
// };

// export default Order;



import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/authContext";
import { Bounce, toast } from "react-toastify";

const Order = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [addres, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const { user } = useAuth();

  const addAddress = async () => {
    const newAddress = {
      userid: user._id,
      name: name,
      phoneno: phoneno,
      pincode: pincode,
      locality: locality,
      address: addres,
      city: city,
      landmark: landmark,
    };

    try {
      const response = await axios.post("http://localhost:3000/address/post", newAddress, { withCredentials: true });
      const data = await response?.data;
      console.log("Response from server:", data);
      if (response.status === 200) {
        toast.success(data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate("/checkout");
      }
    } catch (error) {
      console.log("Error Adding Address : ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white text-center rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold">Fill Your Details</h1>
        <p className="text-sm mt-1 opacity-90">To Get Your Items Delivered</p>
      </div>
      
      <div className="mt-6 p-8 bg-white shadow-xl rounded-xl w-full max-w-lg border border-gray-200">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Mobile Number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" onChange={(e) => setPhoneno(e.target.value)} />
          <input type="text" placeholder="Pincode" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" onChange={(e) => setPincode(e.target.value)} />
          <input type="text" placeholder="Locality" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" onChange={(e) => setLocality(e.target.value)} />
          <textarea placeholder="Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 resize-none" rows="3" onChange={(e) => setAddress(e.target.value)}></textarea>
          <input type="text" placeholder="City/State/Town" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Landmark (Optional)" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" onChange={(e) => setLandmark(e.target.value)} />
          <button className="bg-orange-500 text-white p-3 font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md" onClick={addAddress}>
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
