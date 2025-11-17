import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.main.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 bg-black/40 text-white backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-3 md:py-4">
        <Link to="/">
        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain cursor-pointer"
        />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12 text-base xl:text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-red-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-red-400 transition-colors"
            >
              About Project
            </Link>
          </li>
          <li>
            <Link
              to="/virtual-tour"
              className="hover:text-red-400 transition-colors"
            >
              Virtual Tour
            </Link>
          </li>
        </ul>

        {/* DESKTOP RIGHT TEXT */}
        <p className="hidden lg:block text-2xl xl:text-3xl font-bold hover:text-red-400 transition-colors whitespace-nowrap">
          #MakeITHappen
        </p>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden p-2 focus:outline-none z-[60]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden bg-black/80 backdrop-blur-md absolute top-full right-0 w-full sm:w-2/3 md:w-1/2 flex flex-col items-center gap-6 py-6 text-lg sm:text-xl font-semibold 
        transition-all duration-500 ease-in-out origin-top-right transform ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className="hover:text-red-400"
        >
          About Project
        </Link>
        <Link
          to="/virtual-tour"
          onClick={() => setOpen(false)}
          className="hover:text-red-400"
        >
          Virtual Tour
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
