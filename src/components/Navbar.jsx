import Logo from "../images/Logobnb.png";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className=" mx-5 lg:mx-[100px] md:flex  justify-between ">
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

      {isOpen &&  <div className="mb-4 md:mb-0  md:hidden">
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

        <div className="mb-4 md:mb-0 hidden md:block">
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
        </div>
        <Link to="/accomondation">
          <p className="bg-[#A02279] py-[10px] text-center px-[14px] text-white text-base font-normal rounded-2xl">
            Connect wallet
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
