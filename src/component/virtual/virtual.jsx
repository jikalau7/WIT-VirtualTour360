import React from "react";
import "./typing.css";

const Virtual = () => {
  return (
    <div className="w-full min-h-full text-black flex justify-center items-center">
      <div className='relative w-full min-h-screen overflow-hidden bg-black bg-[url("./assets/background.jpg")] bg-cover bg-center bg-no-repeat'>
        {/* Overlay gelap */}
        <div className='absolute inset-0 bg-black/50'></div>

        {/* Konten utama */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-bold z-10 px-4 sm:px-6 md:px-10">
          
          {/* === Judul dengan efek mengetik berulang === */}
          <div className="relative flex justify-center items-center text-center mt-16 sm:mt-20 md:mt-24 overflow-hidden">
            <h1
              className="typing-line text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight flex items-center"
            >
              Welcome To WIT
              <span className="dot"></span>
              Office Virtual Tour
            </h1>
          </div>

          {/* Tombol */}
          <div className="flex justify-center mt-8 md:mt-10" data-aos="fade-down" data-aos-delay="600">
            <button
              className="bg-red-600 text-white font-semibold text-base sm:text-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl shadow-md hover:bg-red-700 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
            >
              Take 360° VR Tour →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
