import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRocket, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-16 w-full min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            About Project
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        {/* Project Description */}
        <div
          className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 mb-10 border-l-4 border-red-600"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            WIT Office Virtual Tour
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The virtual tour provides an interactive experience for visitors to explore WIT's offices digitally. With a 360° view and easy navigation, visitors can experience the facilities, workspaces, and atmosphere of the office as if they were there in person.
            This allows the company to showcase the work culture, professionalism, and innovation implemented at WIT without having to physically visit the office. <br />
            <br />
            Below are some of the benefits:
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="p-5 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FontAwesomeIcon icon={faStar} className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Increasing Company Attractiveness
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Pengunjung dapat melihat langsung lingkungan kerja dan fasilitas yang dimiliki perusahaan.
              </p>
              <button className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors duration-300">
                <Link to="/about#guide">
                  Learn more
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="p-5 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FontAwesomeIcon icon={faChartLine} className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Increasing Transparency and Trust
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Membantu calon karyawan memahami suasana kerja dan nilai-nilai perusahaan sebelum melamar.
              </p>
              <button className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors duration-300">
                <Link to="/about#guide">
                  Learn more
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="p-5 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FontAwesomeIcon icon={faRocket} className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Supporting Recruitment
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <button className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors duration-300">
                <Link to="/about#guide">
                  Learn more
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
