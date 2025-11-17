import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import maskot from "../../assets/maskot.png"; // pastikan path sesuai
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const Contents = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f9fafb] text-gray-800 overflow-hidden">

      {/* === SECTION 1: Judul + Penjelasan + Tujuan + Maskot === */}
      <section
        id="intro"
        className="w-full min-h-screen flex items-center justify-center pt-20 md:pt-28 px-6 sm:px-10 lg:px-20"
      >
        {/* flex-col untuk layar kecil, xl:flex-row untuk layar besar */}
        <div className="w-full max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* === MASKOT === */}
          <div
            className="flex-1 flex justify-center items-center order-1 xl:order-2"
            data-aos="fade-down"
          >
            <div className="relative w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
              <div className="absolute inset-0 bg-[#e11d48]/10 blur-3xl rounded-full animate-pulse"></div>
              <img
                src={maskot}
                alt="Maskot Virtual Tour"
                className="relative w-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* === TEKS === */}
          <div
            className="flex-1 text-center xl:text-left order-2 xl:order-1"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-snug">
              About{" "}
              <span className="text-[#e11d48] drop-shadow-sm">
                Project Virtual Tour
              </span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Project ini merupakan representasi digital interaktif dari
              lingkungan nyata menggunakan teknologi{" "}
              <span className="text-[#e11d48] font-semibold">Virtual Tour 360°</span>.
              Tujuannya adalah memberikan pengalaman eksplorasi yang realistis
              dan mendalam kepada pengguna seolah mereka hadir langsung di lokasi tersebut.
            </p>

            {/* === TUJUAN === */}
            <div
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-l-4 border-red-600 text-left"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                <FontAwesomeIcon icon={faBullseye} className="text-red-600 text-xl sm:text-3xl sm:mr-2 sm:mt-1" />
                  Tujuan Virtual Tour
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Memberikan kemudahan akses terhadap informasi visual tanpa batas ruang
                dan waktu. Virtual Tour juga membantu promosi dan edukasi dengan cara
                yang menarik dan interaktif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contents;
