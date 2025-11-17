import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Kiri - Informasi Perusahaan */}
        <div>
          <h2 className="text-xl font-semibold mb-3">WIT Indonesia</h2>
          <p className="text-red-500 mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mr-2" /> 
            Email: business@witindonesia.com</p>
          <p className="text-sm">
            <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-2" />
             Kontak: +62 812-3456-7890 <br />
            <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2" />
            Alamat: Jl. Dipatiukur No. 45, Bandung, Jawa Barat, Indonesia
          </p>
        </div>

        {/* Tengah - Link Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Website Links</h3>
          <ul className="space-y-2">
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
        </div>

        {/* Kanan - Media Sosial */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.instagram.com/wit.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://id.linkedin.com/company/wit-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@wit.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkhLFh8eX8wj0C9qcbB6Z5g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Garis bawah + Hak Cipta */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} WIT Indonesia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
