import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faVolumeHigh,
  faVolumeXmark,
  faClose,
  faPause,
  faArrowsSpin
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.main.png";
import atas from "../assets/atas-1.jpg";
import bawah from "../assets/bawah-1.jpg";

const VirtualTour = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {


    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // === Toggle mute dari ikon speaker ===
  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => console.log("Autoplay dicegah"));
    } else {
      audioRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  };


  // === Popup awal untuk mengaktifkan musik ===
  const handleEnableSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => console.log("Gagal play:", err));
    }
    setIsMuted(false);
    setShowPopup(false);
  };

// ✅ Buka card (hanya satu aktif, dan kunci navigasi lainnya)
function showCard(type) {
  const panoCard = document.getElementById("card-panorama");
  const locationCard = document.getElementById("card-location");

  // Tutup semua dulu
  panoCard.style.display = "none";
  locationCard.style.display = "none";

  // Nonaktifkan semua navigasi sementara
  document.querySelectorAll("button, a").forEach((el) => {
    if (!el.closest(`#card-${type}`)) {
      el.style.pointerEvents = "none";
      el.style.opacity = "0.5";
    }
  });

  // Tampilkan card sesuai type
  const targetCard = document.getElementById(`card-${type}`);
  targetCard.style.display = "block";
}

// ✅ Tutup card & aktifkan kembali semua navigasi
function closeCard(type) {
  const card = document.getElementById(`card-${type}`);
  if (card) card.style.display = "none";

  // Aktifkan kembali semua navigasi
  document.querySelectorAll("button, a").forEach((el) => {
    el.style.pointerEvents = "auto";
    el.style.opacity = "1";
  });
}


  // === Ganti panorama tanpa reload halaman ===
  function getLink(type) {
    const iframe = document.getElementById("tour-frame");
    if (!iframe) return;

    if (type === "1") {
      iframe.src = "/360-Tour-WIT-Bandung/first-floor/app-files/index.html";
    } else if (type === "2") {
      iframe.src = "/360-Tour-WIT-Bandung/second-floor/app-files/index.html";
    } else if (type === "3") {
      iframe.src = "/360-Tour-WIT-Bandung/index.html";
    }

    closeCard("panorama");
  }


  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* === AUDIO === */}
      <audio ref={audioRef} src="/music/virtualtour.mp3" loop muted />

      {/* === POPUP ENABLE SOUND === */}
      {showPopup && (
        <>
          {/* Overlay pengunci semua interaksi */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 pointer-events-auto"></div>

          {/* Popup utama */}
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-50 text-white text-center px-4">
            <p className="text-lg mb-4">
              🔈 Klik tombol di bawah untuk mengaktifkan musik
            </p>
            <button
              onClick={handleEnableSound}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-white font-semibold transition-all shadow-lg"
            >
              Enable Sound
            </button>
          </div>
        </>
      )}

      {/* === IFRAME Virtual Tour === */}
      <iframe
        id="tour-frame"
        src="/360-Tour-WIT-Bandung/index.html"
        className="w-full h-full border-none"
        title="Virtual Tour"
        allowFullScreen
      ></iframe>

      {/* === NAVBAR === */}
      <div className="absolute top-5 left-0 w-full flex justify-between items-center px-5 z-50">
        {/* === LOGO === */}
        <img
          src={logo}
          alt="WIT.ID Logo"
          className="h-10 w-auto object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* === HAMBURGER === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-red-600 hover:bg-red-700 transition-all p-3 rounded-xl shadow-lg flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="text-white text-xl transition-all duration-300"
          />
        </button>

        {/* === MENU === */}
        {menuOpen && (
          <div className="absolute right-5 top-16 bg-white text-red-600 rounded-xl p-4 shadow-xl flex flex-col gap-3 w-44 animate-fade-in">
            {/* HOME aktif selalu */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 hover:bg-red-600/20 transition-all rounded-lg py-2 px-3 text-left"
            >
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </button>


            <button
              onClick={() => {
                const iframe = document.getElementById("tour-frame");
                if (iframe) iframe.contentWindow.postMessage("toggleAutoRotate", "*");
                console.log("AUTO ROTATE dikirim ke iframe");
                setIsRotating(!isRotating);
              }}
              className="flex items-center gap-3 rounded-lg py-2 px-3 text-left hover:bg-red-600/20"
            >
              <FontAwesomeIcon icon={isRotating ?  faPause : faArrowsSpin } />
              <span>Auto Rotate</span>
            </button>


            <button
              disabled={showPopup}
              onClick={!showPopup ? toggleMute : undefined}
              className={`flex items-center gap-3 rounded-lg py-2 px-3 text-left transition-all ${
                showPopup
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600/20"
              }`}
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </button>
          </div>
        )}
      </div>

      {/* === Navigasi bawah === */}
      <div
        className={`absolute bottom-3 left-5 text-xl text-white flex gap-6 z-50 shadow-lg transition-all ${
          showPopup ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <a href="#" onClick={() => showCard("panorama")}>
          Panorama
        </a>
        <a href="#" onClick={() => showCard("location")}>
          Location
        </a>
      </div>

        {/* === Cards Info (Panorama + Location) === */}
        <div className="absolute bottom-16 left-4 md:left-8 z-50 space-y-4 md:items-start flex flex-col">
          {/* === Card Panorama === */}
          <div
            id="card-panorama"
            className={`
              card fixed bg-white text-black 
              p-5 md:p-6 rounded-2xl shadow-2xl
              w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%]
              backdrop-blur-sm transition-all duration-300
              bottom-6
              left-1/2 -translate-x-1/2
              sm:left-8 sm:translate-x-0
              z-[60]
              max-h-[80vh] overflow-y-auto
            `}
            style={{ display: "none" }}
          >
            <button
              onClick={() => closeCard("panorama")}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors z-[70]"
            >
              <FontAwesomeIcon icon={faClose} className="text-lg" />
            </button>

            <h3 className="font-bold text-xl mb-3 text-center md:text-left border-b pb-2 border-gray-200">
              Panorama List
            </h3>

            <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center md:items-start">
              {/* Lantai 1 */}
              <div className="flex flex-col items-center md:w-1/3">
                <a href="#" onClick={() => getLink("1")} className="w-full">
                  <img
                    src={bawah}
                    alt="Lantai 1"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-2 text-center text-sm md:text-base font-medium">
                    Lantai 1
                  </p>
                </a>
              </div>

              {/* Lantai 2 */}
              <div className="flex flex-col items-center md:w-1/3">
                <a href="#" onClick={() => getLink("2")} className="w-full">
                  <img
                    src={atas}
                    alt="Lantai 2"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-2 text-center text-sm md:text-base font-medium">
                    Lantai 2
                  </p>
                </a>
              </div>

              {/* Coffee Shop */}
              <div className="flex flex-col items-center md:w-1/3">
                <a href="#" onClick={() => getLink("3")} className="w-full">
                  <img
                    src={atas}
                    alt="Coffee Shop"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-2 text-center text-sm md:text-base font-medium">
                    Coffee Shop
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* === Card Location === */}
          <div
            id="card-location"
            className={`
              card fixed bg-white text-black 
              p-5 md:p-6 rounded-2xl shadow-2xl
              w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%]
              backdrop-blur-sm transition-all duration-300
              bottom-6
              left-1/2 -translate-x-1/2
              sm:left-8 sm:translate-x-0
              z-[60]
              max-h-[80vh] overflow-y-auto
            `}
            style={{ display: "none" }}
          >
            <button
              onClick={() => closeCard("location")}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors z-[70]"
            >
              <FontAwesomeIcon icon={faClose} className="text-lg" />
            </button>

            <h3 className="font-bold text-xl mb-3 text-center md:text-left border-b pb-2 border-gray-200">
              Location
            </h3>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Map */}
              <div className="flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.6798696972767!2d107.58252366003352!3d-6.886322057984581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6870f2957cb%3A0x5bdaf7433b63418a!2sWIT%20Indonesia!5e0!3m2!1sid!2sid!4v1758793937434!5m2!1sid!2sid"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Detail */}
              <div className="flex-1 text-center md:text-left">
                <p>Jl. Sukakarya II No.40, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40163</p>
                <p className="mt-2"><strong>Telepon:</strong> +62 22 123456</p>
                <p><strong>Jam Buka:</strong> 08:00 - 21:00</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default VirtualTour;
