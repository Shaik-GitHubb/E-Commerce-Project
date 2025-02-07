import React from 'react'
import { createContext,useContext,useState } from 'react'

const AddressContext = createContext();

export const AddressProvider = ({children}) => {

    const [address, setAddress] = useState([]);

    const addAddress = (newAddress) => {
        setAddress([...address, newAddress]);
    };

  return (
   <AddressContext.Provider value={{address,addAddress}}>
    {children}
   </AddressContext.Provider>
  )
}

export const useAddress = () => useContext(AddressContext);