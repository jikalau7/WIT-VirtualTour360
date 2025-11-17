import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Index from "../../../public/360-Tour-WIT Bandung";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black bg-[url("./assets/background.jpg")] bg-cover bg-center bg-no-repeat'>
      {/* Overlay gelap */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Konten utama */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-bold z-10 px-4 sm:px-6 md:px-10">
        {/* Judul */}
        <div
          data-aos="fade-down"
          className="relative flex justify-center items-center text-center mt-16 sm:mt-20 md:mt-24 overflow-hidden"
        >
          <div
            className="
              flex flex-wrap items-center justify-center gap-2
              whitespace-normal sm:whitespace-nowrap
              scale-[0.9] sm:scale-95 md:scale-100
              text-balance
            "
          >
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight"
            >
              WIT
            </h1>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="bg-red-600 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full mt-2 sm:mt-3 md:mt-5"
            ></div>
            <h1
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight"
            >
              Office Virtual Tour
            </h1>
          </div>
        </div>

        {/* Deskripsi panjang (tablet & desktop) */}
        <div className="hidden md:block text-white font-semibold text-center mt-8 md:mt-10 lg:mt-12 max-w-4xl leading-relaxed">
          <p
            className="text-lg md:text-xl mb-3"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Welcome to the virtual tour office WIT Indonesia
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            We are a Digital Transformation Culture Company with over 14 years of
            experience <br className="hidden lg:block" />
            in Business & IT Consulting. Through this tour, we invite you to explore our <br className="hidden lg:block" />
            workplace — a hub of innovation, collaboration, and digital
            transformation <br className="hidden lg:block" />
            alongside our valued clients and partners.
          </p>
        </div>

        {/* Teks pendek (mobile) */}
        <div className="md:hidden text-white text-center mt-6 px-4">
          <p
            data-aos="fade-down"
            data-aos-delay="400"
            className="text-base sm:text-lg font-semibold leading-relaxed"
          >
            Welcome to the virtual tour office WIT Indonesia
          </p>
        </div>

        {/* Tombol */}
        <div
          className="flex justify-center mt-8 md:mt-10"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <Link
            to="/virtual-tour"
            className="
              bg-red-600 text-white font-semibold text-base sm:text-lg
              px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl shadow-md
              hover:bg-red-700 hover:shadow-lg hover:translate-y-[-2px]
              transition-all duration-300 ease-in-out
            "
             
          >
            Take 360° VR Tour →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
