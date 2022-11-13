import React from "react";
import Wallet1 from "../images/wallet1.png";
import Wallet2 from "../images/wallet2.png";

const Wallet = () => {
  return (
    <div
      className="top-0 w-screen h-screen fixed "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className=" flex justify-center items-center ">
        <div className=" bg-white w-[600px] mt-[300px] rounded-2xl">
            <div className=" mx-8 my-8 flex justify-between ">
              <h1 className="text-2xl font-bold">Connect Wallet</h1>
              <p>X</p>
            </div>
            <hr className="mb-8" />
            <h3 className=" mx-8 text-base mb-4">Choose your preferred wallet:</h3>
            <div className="pb-8 mx-8">
              <div className="py-3 px-5 rounded-xl flex justify-between items-center border mb-4 ">
                <div className="flex gap-2 justify-center items-center">
                  <img src={Wallet1} alt="" />
                  <span>Metamask</span>
                </div>
                <p>M</p>
              </div>
              <div className=" py-3 px-5 rounded-xl flex justify-between items-center border">
                <div className="flex gap-2 justify-center items-center">
                  <img src={Wallet2} alt="" />
                  <span>WalletConnect</span>
                </div>
                <p>M</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
