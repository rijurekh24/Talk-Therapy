import React, { useContext, useEffect, useRef } from "react";
import noPhoto from "../../assets/images/no-photo.jpg";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import Logo from "../../assets/images/Screenshot 2024-01-26 004549.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className="header flex items-center bg-orange-100	h-20"
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              className="w-10 mr-2"
              alt=""
              style={{ mixBlendMode: "darken" }}
            />
            <div>
              <p className="text-orange-950 text-[26px] leading-7 font-serif font-[600] font-bold	">
                Talk Therapy
              </p>
            </div>
          </div>
          {/* ####### Menu ######## */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.3rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-orange-950 text-[18px] leading-7 font-[600] font-bold	"
                        : "text-textColor text-[18px] leading-7 font-[500] hover:text-orange-950 font-bold	"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "users/profile/me"
                  }`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <figure className="w-[50px] h-[50px] rounded-full">
                      <img
                        src={user?.photo || noPhoto}
                        alt="Logo"
                        className="w-full h-full rounded-full"
                      />
                    </figure>
                    <p className="ml-2">{user?.name}</p>
                  </div>
                  {/* <h2>{user?.name}</h2> */}
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className="bg-orange-950 py-2 px-6 text-white
                    font-[600] h-[44px] flex items-center justify-center
                    rounded-[50px]"
                >
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
