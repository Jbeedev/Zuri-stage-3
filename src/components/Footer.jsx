import FooterLogo from "../images/footerLogo.png"
import Fb from "../images/IconFb.png"
import Insta from "../images/IconInsta.png"
import Twitter from "../images/IconTwitter.png"

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between mx-5 md:mx-[100px] pt-[63px] pb-[37px]">
        <div className="mb-6 md:mb-0">
          <img src={FooterLogo} alt="" className="mb-[96px]" />
          <div className="flex gap-3 mb-[55px]">
            <p>
              <img src={Fb} alt="" />
            </p>
            <p>
              <img src={Insta} alt="" />
            </p>
            <p>
              <img src={Twitter} alt="" />
            </p>
          </div>
          <p>C 2022 Metabnb</p>
        </div>

        <div className="mb-6 md:mb-0">
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
  );
};

export default Footer;
