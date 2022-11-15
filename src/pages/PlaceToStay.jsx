import Frame1 from "../images/Frame1.png";
import Frame3 from "../images/Frame3.png";
import Frame2 from "../images/Frame2.png";
import Frame4 from "../images/Frame4.png";
import Frame5 from "../images/Frame5.png";
import Frame6 from "../images/Frame6.png";
import Frame7 from "../images/Frame7.png";
import Frame8 from "../images/Frame8.png";
import Frame9 from "../images/Frame9.png";
import Frame10 from "../images/Frame10.png";
import Frame11 from "../images/Frame11.png";
import Frame12 from "../images/Frame12.png";
import Frame13 from "../images/Frame13.png";
import Frame14 from "../images/Frame14.png";
import Frame15 from "../images/Frame15.png";
import Wallet1 from "../images/wallet1.png";
import Wallet2 from "../images/wallet2.png";
import CancelIcon from "../images/cancel-icon.png";
import RightArrow from "../images/right-chevron.png";

import Ratingicon from "../images/RatingIcon.png";
import { Twirl as Hamburger } from "hamburger-react";

import Setting from "../images/setting.png";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Wallet from "../components/Wallet";
import { Link } from "react-router-dom";
import Logo from "../images/Logobnb.png";
import { useState } from "react";

const PlaceToStay = () => {
  const [walletClicked, setWalletClicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mt-14 ">
      {/* <Navbar > */}
      <div>
        <nav className=" mx-5 lg:mx-[100px]  md:flex justify-between ">
          <div className="mb-6 lg:mb-0 flex justify-between">
            <Link to="/">
              <img src={Logo} alt="company logo " />
            </Link>
            <div className=" md:hidden ">
            <Hamburger
              color="black"
              size="40"
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
          </div>
          {isOpen && <div className="mb-4 md:mb-0">
            <ul className=" flex justify-between text-xs font-semibold md:text-xl md:font-normal gap-12 ">
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/accomondation">
                <li>Place to stay</li>
              </Link>
              <Link>
                <li>NFTs</li>
              </Link>
              <Link>
                <li>Community</li>
              </Link>
            </ul>
          </div>}
          <p
            className="cursor-pointer bg-[#A02279] py-[10px] text-center px-[14px] text-white text-base font-normal rounded-2xl"
            onClick={() => setWalletClicked(!walletClicked)}
          >
            Connect wallet
          </p>
        </nav>
      </div>
      {/* </Navbar> */}

      <div className="mx-5 md:mx-[100px] mt-[125px] mb-[90px] flex justify-between flex-wrap">
        <ul className=" hidden md:flex p-0 m-0 md:selection:flex gap-12 text-xs md:text-xl font-normal">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <select className="md:hidden rounded-xl" name="" id="">
            <option value="">Select type</option>
            <option value="">Restaurant</option>
            <option value="">Cottage</option>
            <option value="">Castle</option>
            <option value="">Fantast</option>
            <option value="">Beach</option>
            <option value="">Carbins</option>
            <option value="">Off-grid</option>
            <option value="">Farm</option>
        </select>
        <div className="border flex justify-center gap-10 rounded-lg p-2">
          <p className="  rounded-lg ">Location</p>
          <img src={Setting} alt="" />
        </div>
      </div>

      <div className="mx-5 md:mx-[100px] mb-[92px]">
        <div className=" flex gap-6 text-xs mb-6 flex-wrap">
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame1} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame2} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame3} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame11} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-6 text-xs mb-6 ">
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame4} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame5} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame6} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame7} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-6 text-xs mb-6 ">
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame8} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame9} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame10} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame11} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-6 text-xs ">
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame12} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame13} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame14} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl w-[270px] h-[372px] ">
            <img src={Frame15} alt="" className=" rounded-2xl " />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
                <p>
                  <img src={Ratingicon} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {walletClicked && <Wallet />} */}

      {/* <Wallet> */}
      {walletClicked && (
        <div
          className="top-0 w-screen h-screen fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className=" flex justify-center items-center ">
            <div className=" bg-white w-[600px] mt-[250px] rounded-2xl">
              <div className=" mx-8 my-8 flex justify-between ">
                <h1 className="text-2xl font-bold">Connect Wallet</h1>
                <p
                  className="cursor-pointer"
                  onClick={() => setWalletClicked(false)}
                >
                  <img src={CancelIcon} alt="" />
                </p>
              </div>
              <hr className="mb-8" />
              <h3 className=" mx-8 text-base mb-4">
                Choose your preferred wallet:
              </h3>
              <div className="pb-8 mx-8">
                <div className="py-3 px-5 rounded-xl bg-gray-100 flex justify-between items-center border mb-4 ">
                  <div className="flex gap-2 justify-center items-center">
                    <img src={Wallet1} alt="" />
                    <span>Metamask</span>
                  </div>
                  <p>
                    <img src={RightArrow} alt="" />
                  </p>
                </div>
                <div className=" py-3 px-5 rounded-xl flex justify-between items-center border">
                  <div className="flex gap-2 justify-center items-center">
                    <img src={Wallet2} alt="" />
                    <span>WalletConnect</span>
                  </div>
                  <p>
                    <img src={RightArrow} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </Wallet> */}

      <Footer />
    </div>
  );
};

export default PlaceToStay;
