import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
const Content2 = () => {
    return (
        <div>
            {/* === SECTION 2: Dampak + Kekurangan === */}
            <section id="impact" className="w-full bg-white py-24 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                
                {/* DAMPAK */}
                <div data-aos="fade-down">
                    <h3 className="text-3xl font-bold text-[#e11d48] mb-4">
                        <FontAwesomeIcon icon={faMicrochip} className="text-red-600 text-xl sm:text-3xl sm:mr-2 sm:mt-1" />
                         Future Impact</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                    Teknologi virtual tour berpotensi besar menjadi media utama dalam promosi dan edukasi visual.
                    Dengan meningkatnya tren digital experience, pengguna akan semakin terbiasa berinteraksi
                    melalui dunia virtual yang imersif dan interaktif.
                    </p>
                </div>

                {/* KEKURANGAN */}
                <div data-aos="fade-down">
                    <h3 className="text-3xl font-bold text-[#e11d48] mb-4">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 text-xl sm:text-3xl sm:mr-2 sm:mt-1" />
                        Lack Of Virtual Tour</h3>
                    <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                    <li>Ketergantungan pada koneksi internet stabil.</li>
                    <li>Tidak dapat sepenuhnya menggantikan pengalaman fisik.</li>
                    <li>Kualitas visual tergantung pada perangkat pengguna.</li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Content2;