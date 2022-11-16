import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
import Divide1 from "../images/divide1.png"
import Divide2 from "../images/divide2.png"
import Divide3 from "../images/divide3.png"
import MetaImg from "../images/metaImage.png"
import Ratingicon from "../images/RatingIcon.png"


const Home = () => {
  return (
    <div className=" mt-14 ">
      <Navbar />
      <div className="mx-5 md:mx-[100px] mt-[125px] md:gap-[100px] md:flex">
        <div className=" flex-1 ">
          <h1 className="text-[56px] tracking-tighter font-bold mb-12 ">
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
          <div className="w-full mb-20 md:mb-0">
            <input
              className=" w-[60%] border border-[#A3A3A3] p-[10px]  "
              type="text"
              placeholder="Search for location "
            />
            <button className=" w-[40%] bg-[#A02279] text-white p-[10px] ">
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-2 flex-1 ">
          <div className="mt-[92px]">
            <img
              src={Frame1}
              alt=""
              className=" mb-2 w-[234px] h-[176px] rounded-2xl "
            />
            <img
              src={Frame2}
              alt=""
              className=" w-[234px] h-[176px] rounded-2xl "
            />
          </div>
          <div>
            <img
              src={Frame3}
              alt=""
              className=" mb-2 w-[234px] h-[176px] rounded-2xl "
            />
            <img
              src={Frame4}
              alt=""
              className=" w-[234px] h-[176px] rounded-2xl "
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[70px] mt-[67px] flex justify-around gap-4 items-center bg-[#A02279] ">
        <p><img src={Divide1} alt="" /></p>
        <p><img src={Divide2} alt="" /></p>
        <p><img src={Divide3} alt="" /></p>
      </div>
      <div className="mx-5 md:mx-[100px]">
        <h1 className="text-center text-5xl font-bold mt-14 mb-11 ">
          Inspiration for your next adventure
        </h1>
        
        <div className=" flex gap-6 text-xs flex-wrap mb-6">
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">cl
            <img
              src={Frame5}
              alt=""
              className=" rounded-2xl h-[265px]"
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
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame6}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame3}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame2}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          
          
          
        </div>
        <div className=" flex gap-6 text-xs flex-wrap">
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame7}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame8}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame9}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[372px] border px-4 pt-4 rounded-2xl ">
            <img
              src={Frame10}
              alt=""
              className=" rounded-2xl h-[265px]"
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
              <div className="flex gap-2 text-2xl text-[#A02279] mb-4 font-extrabold">
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
                <p><img src={Ratingicon} alt="" /></p>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
      <div className="bg-[#A02279] mt-[35px] py-[100px] ">
        <div className="mx-5 md:mx-[100px] gap-6 md:gap-0 flex justify-between flex-wrap ">
            <div className="basis-4/12 mt-[86px] flex-grow">
              <h1 className="font-bold text-5xl text-white mb-[35px] ">MetaFrame NFTs</h1>
              <p className="text-lg text-white mb-[57px]">
                Discover our NFT gift cards collection. Loyal customers gets amazing
                gift cards which are traded as NFTs. These NFTs gives our cutomer
                access to loads of our exclusive services.
              </p>
              <button className="text-[#A02279] bg-white px-[10px] py-[10px] text-base rounded-lg ">Learn more</button>
            </div>
            <div className="basis-8/12 flex justify-center flex-grow">
                <img src={MetaImg} alt="" className="w-[650px] h-[500px] " />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
