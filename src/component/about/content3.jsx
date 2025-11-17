import React from "react";
import {Link} from "react-router-dom";

const Content3 = () => {
  return (
    <div>
      {/* === SECTION 3: Penjelasan Rinci untuk 3 Point === */}
      <section id="guide" className="w-full bg-[#f9fafb] py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto" data-aos="fade-down">
          {/* TITLE */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e11d48] mb-12 text-center">
            Benefit Virtual Tour
          </h3>

          {/* GRID CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-red-600 text-white text-lg">
                  ⭐
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Increasing Company Attractiveness
                </h4>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Virtual tour memungkinkan calon klien, mitra, atau pengunjung
                melihat langsung lingkungan kerja, fasilitas, dan budaya perusahaan
                secara visual dan interaktif. Dengan tampilan profesional dan pengalaman
                360°, kesan pertama menjadi lebih kuat — menambah kredibilitas brand dan
                meningkatkan minat pengunjung untuk mengenal lebih jauh.
              </p>

              <p className="text-gray-600 text-xs sm:text-sm">
                Contoh implementasi: galeri fasilitas, ruang meeting, atau area kerja
                yang bisa dijelajahi pengguna secara interaktif.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-red-600 text-white text-lg">
                  📈
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Increasing Transparency and Trust
                </h4>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Dengan virtual tour, organisasi dapat menampilkan fasilitas, proses kerja,
                atau area layanan secara terbuka tanpa harus mengundang orang ke lokasi fisik.
                Transparansi ini meningkatkan kepercayaan calon pelanggan atau mitra karena
                mereka bisa melihat standar dan kondisi secara langsung.
              </p>

              <p className="text-gray-600 text-xs sm:text-sm">
                Dapat dimanfaatkan untuk audit visual, onboarding, atau presentasi bagi investor.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-red-600 text-white text-lg">
                  🚀
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Supporting Recruitment
                </h4>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Virtual tour sangat efektif dalam proses rekrutmen. Calon pelamar dapat
                menjelajahi kantor, melihat suasana kerja, dan mengenal budaya perusahaan
                tanpa harus datang langsung. Hal ini membantu mereka memahami lingkungan kerja
                sejak awal dan menurunkan tingkat ketidakcocokan di tahap akhir.
              </p>

              <p className="text-gray-600 text-xs sm:text-sm">
                Biasanya digunakan untuk menampilkan area kerja tim, fasilitas karyawan,
                dan testimoni singkat dari staf.
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12 text-center">
            <Link
              to="/virtual-tour"
              className="inline-block bg-[#e11d48] hover:bg-[#f43f5e] text-white text-base sm:text-lg font-semibold py-3 px-8 sm:px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Take 360° VR Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content3;
