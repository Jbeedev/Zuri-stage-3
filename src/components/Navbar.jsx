import Logo from "../images/Logobnb.png"


const Navbar = () => {
  return (
    <div>
      <nav className="mx-[100px] flex justify-between ">
        <div>
          <img src={Logo} alt="company logo" />
        </div>
        <div>
          <ul className=" flex justify-between text-xl font-normal gap-12 ">
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
        </div>
        <p className="bg-[#A02279] py-[10px] text-center px-[14px] text-white text-base font-normal rounded-2xl">
          Connect wallet
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
