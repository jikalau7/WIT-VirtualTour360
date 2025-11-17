import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll ke atas dulu setiap kali halaman berubah
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Jika ada hash (misal: /about#section1)
    if (hash) {
      // Delay sedikit supaya elemen sudah sempat dirender
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 1500); // delay 1.2 detik
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollTop;
