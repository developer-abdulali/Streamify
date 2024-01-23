import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/@TechCoderZone",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/developer-abdulali",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/abdulali12/",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLink01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Blog",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLink02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLink03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* quick links div start */}

          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-normal text-textColor mt-4">
              Copyright @ {year} developed by Developer Abdul Ali all right
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* quick links div end */}

          <div>
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-textColor">
              Quick Links
            </h2>
            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-normal text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* I want to div start */}

          <div>
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-textColor">
              I want to:
            </h2>
            <ul>
              {quickLink02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-normal text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* I want to div end */}

          {/* support div start */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-textColor">
              Support
            </h2>
            <ul>
              {quickLink03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-normal text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* support div end */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
