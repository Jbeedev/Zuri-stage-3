import Logo from "../images/Logobnb.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="mx-[100px] flex justify-between ">
        <div>
          <Link to="/"><img src={Logo} alt="company logo" /></Link>
        </div>
        <div>
          <ul className=" flex justify-between text-xl font-normal gap-12 ">
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
        </div>
        <p className="bg-[#A02279] py-[10px] text-center px-[14px] text-white text-base font-normal rounded-2xl">
          Connect wallet
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
