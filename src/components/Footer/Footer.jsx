import React from "react";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://www.instagram.com/__relievescape__/?hl=en",
    icon: <AiFillInstagram className=" w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Book an Appointment",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Privacy & Policy",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container px-10">
        <div
          className="flex justify-between flex-col
        md:flex-row flex-wrap gap-[30px]"
        >
          <div>
            <p
              className="text-orange-950 text-[26px] leading-7  font-[600] font-bold	"
              style={{ fontFamily: "cursive" }}
            >
              Relievescape
            </p>
            <p
              className="text-base leading-7 font-normal
            text-textColor mt-4"
            >
              Copyright {year}
            </p>

            <div className="flex gap-2 mt-4">
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    to={link.path}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-solid
                    border-[#181a1e] rounded-full justify-center group
                    hover:bg-orange-950 hover:border-none hover:text-white 
                    flex items-center"
                  >
                    {link.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2
              className="text-xl leading-[30px] font-normal
              mb-6 text-headingColor"
            >
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-base leading-7 font-normal
                      text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-xl leading-[30px] font-normal
              mb-6 text-headingColor"
            >
              I Want To:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-base leading-7 font-normal
                      text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-xl leading-[30px] font-normal
              mb-6 text-headingColor"
            >
              Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-base leading-7 font-normal
                      text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
