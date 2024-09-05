import React from 'react'
import { BrowserProvider, Contract } from "ethers";

const Navbar = () => {
   const provider = new BrowserProvider(window.ethereum);

   async function connectToMetamask() {
     const signer = await provider.getSigner();
     console.log("address", signer);
   }
  return (
    <>
      <div className=" mt-[20px] mx-auto ml-11">
        <button
          className=" bg-green-600 text-white p-[12px] rounded hover:bg-green-500 shadow-xl shadow-gray-600 mr-2"
          onClick={connectToMetamask}
        >
          Login as Admin
        </button>
        <a
          href="/"
          className=" bg-green-600 text-white p-[15px] rounded hover:bg-green-500 shadow-xl shadow-gray-600 mr-2"
        >
          Home
        </a>
        <a
          href="/issuecertificate"
          className=" bg-green-600 text-white p-[15px] rounded hover:bg-green-500 shadow-gray-600 shadow-xl"
        >
          Issue Certificate
        </a>
      </div>
    </>
  );
}

export default Navbar