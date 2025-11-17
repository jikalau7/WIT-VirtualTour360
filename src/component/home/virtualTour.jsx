import maskot from "../../assets/maskot.png"; // pastikan path sesuai
import { Link } from "react-router-dom";

const VirtualTour = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-[#f9fafb] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        
        {/* === TEKS KIRI === */}
        <div className="text-left flex-1" data-aos="fade-right">
          {/* Judul */}
          <div className="relative flex items-center font-bold overflow-hidden mb-6">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                WIT
              </h1>
              <div className="bg-red-600 w-3 h-3 lg:w-4 lg:h-4 rounded-full mt-2"></div>
              <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Office Virtual Tour
              </h1>
            </div>
          </div>

          {/* Sub Judul */}
          <div className="text-gray-900 mt-6 space-y-4">
            <h1 className="text-4xl font-semibold">What are you waiting for?</h1>
            <h1 className="text-2xl leading-snug">
              We have many teams to meet and <br />
              extraordinary sights to behold at our <br />
              office. Take WIT Virtual Office Tour now!
            </h1>
          </div>

          {/* === TOMBOL VR TOUR === */}
          <div className="mt-10">
            <Link to="/virtual-tour"

              className="
                bg-red-600 text-white font-semibold text-lg
                px-6 py-3 rounded-xl shadow-md
                hover:bg-red-700 hover:shadow-lg hover:translate-y-[-2px]
                transition-all duration-300 ease-in-out
              "
            >
              Take 360° VR Tour →
            </Link>
          </div>
        </div>

        {/* === MASKOT KANAN === */}
        <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left">
          <div className="absolute inset-0 bg-[#e11d48]/40 blur-3xl rounded-full animate-pulse"></div>
          <img
            src={maskot}
            alt="WIT Mascot"
            className="relative w-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
