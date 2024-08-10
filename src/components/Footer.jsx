import facebook from "../../src/assets/images/icon-facebook.svg";
import twitter from "../../src/assets/images/icon-twitter.svg";
import pinterest from "../../src/assets/images/icon-pinterest.svg";
import instagram from "../../src/assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="font-bold">
      <div className="bg-[url('../../src/assets/images/bg-boost-desktop.svg')] bg-purple-950 w-full h-52 flex justify-evenly items-center flex-col">
        <h1 className="text-white text-3xl">Boost your links today</h1>
        <button className="bg-teal-400 text-white w-40 h-10 px-5 py-1 rounded-full">
          Get Started
        </button>
      </div>
      <div className="flex justify-evenly bg-black text-white w-full h-56 p-10">
        <div>
          <h1>Shortly</h1>
        </div>
        <div className="flex justify-evenly w-3/4 font-light">
          <div>
            <h1>Features</h1>
            <h1>Link Shortening</h1>
            <h1>Branded Links</h1>
            <h1>Analytics</h1>
          </div>
          <div>
            <h1>Resources</h1>
            <h1>Blogs</h1>
            <h1>Developers</h1>
            <h1>Supports</h1>
          </div>
          <div>
            <h1>About</h1>
            <h1>Our Team</h1>
            <h1>Careers</h1>
            <h1>Contacts</h1>
          </div>
        </div>
        <div className="flex justify-between w-28">
          <img src={facebook} alt="Facebook" className="w-5 h-5" />
          <img src={twitter} alt="Twitter" className="w-5 h-5" />
          <img src={pinterest} alt="Pinterest" className="w-5 h-5" />
          <img src={instagram} alt="Instagram" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
