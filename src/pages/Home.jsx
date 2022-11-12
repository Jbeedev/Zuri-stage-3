import bnb1 from "../images/bnb1.png";
import bnb2 from "../images/bnb2.png";
import bnb3 from "../images/bnb3.png";

const Home = () => {
  return (
    <div className=" mt-14 ">
      <nav className="mx-[100px] flex justify-between ">
        <div>
          <p>Metabnb</p>
        </div>
        <div>
          <ul className=" flex justify-between text-xl font-normal gap-12 ">
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
        </div>
        <p className="bg-[#A02279] py-[10px] text-center px-[14px] text-white text-base font-normal rounded-2xl">Connect wallet</p>
      </nav>
      <div className="mx-[100px] mt-[125px] gap-[100px] flex">
        <div className=" flex-1 ">
          <h1 className=" text-[56px] tracking-tighter font-bold mb-12 ">
            Rent a <span className=" text-[rgb(160,34,121)] ">place</span> away
            from
            <span className=" text-[#A02279] "> Home</span> in the{" "}
            <span className=" text-[#A02279] ">Metaverse</span>
          </h1>
          <p className="text-2xl font-normal mb-12">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="w-full">
            <input
              className=" w-[300px] border border-[#A3A3A3] p-[10px]  "
              type="text"
              placeholder="Search for location "
            />
            <button className=" w-[230px] bg-[#A02279] text-white p-[10px] ">
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-2 flex-1 ">
          <div className="mt-[92px]">
            <img
              src={bnb1}
              alt=""
              className=" mb-2 w-[234px] h-[176px] rounded-2xl "
            />
            <img
              src={bnb2}
              alt=""
              className=" w-[234px] h-[176px] rounded-2xl "
            />
          </div>
          <div>
            <img
              src={bnb3}
              alt=""
              className=" mb-2 w-[234px] h-[176px] rounded-2xl "
            />
            <img
              src={bnb1}
              alt=""
              className=" w-[234px] h-[176px] rounded-2xl "
            />
          </div>
        </div>
      </div>
      <div className=" h-[70px] mt-[67px] flex justify-around items-center bg-[#A02279] ">
        <p>dummy</p>
        <p>dummy</p>
        <p>dummy</p>
      </div>
      <div className="mx-[100px]">
        <h1 className="text-center text-5xl font-bold mt-14 mb-11 ">
          Inspiration for your next adventure
        </h1>
        <div className=" flex gap-6 text-xs mb-6 ">
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-6 text-xs ">
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
          <div className="border px-4 pt-4 rounded-2xl ">
            <img
              src={bnb1}
              alt=""
              className="w-[260px] h-[265px] rounded-2xl "
            />
            <div className="mt-4">
              <div className="flex justify-between mb-[10px]">
                <p>Desert king</p>
                <p className="font-bold">1MBT per night</p>
              </div>
              <div className="flex justify-between mb-[10px]">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <div className="flex gap-2 text-2xl text-[#A02279] font-extrabold">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#A02279] mt-[35px] py-[100px] ">
        <div className="mx-[100px] flex justify-between  ">
            <div className="basis-4/12">
              <h1 className="font-bold text-5xl text-white mb-[35px] ">Metabnb NFTs</h1>
              <p className="text-lg text-white mb-[57px]">
                Discover our NFT gift cards collection. Loyal customers gets amazing
                gift cards which are traded as NFTs. These NFTs gives our cutomer
                access to loads of our exclusive services.
              </p>
              <button className="text-[#A02279] bg-white px-[10px] py-[10px] text-base rounded-lg ">Learn more</button>
            </div>
            <div className="basis-8/12 flex justify-center">
                <img src={bnb3} alt="" className="w-[260px] h-[265px] " />
            </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="flex justify-between mx-[100px] pt-[63px] pb-[37px]">
            <div>
                <h1 className=" mb-[100px] ">Logo</h1>
                <div className="flex gap-3 mb-[55px]">
                    <p>F</p>
                    <p>I</p>
                    <p>T</p>
                </div>
                <p>C 2022 Metabnb</p>
            </div>
            
                <div>
                    <h1 className="text-lg font-bold mb-6">Community</h1>
                    <ul className="text-sm font-normal flex flex-col gap-4">
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6">Places</h1>
                    <ul className="text-sm font-normal flex flex-col gap-4">
                        <li>Castles</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6">About us</h1>
                    <ul className="text-sm font-normal flex flex-col gap-4">
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
