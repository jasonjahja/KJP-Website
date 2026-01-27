import { useEffect, useState } from "react";
import Button from "./Button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={`
        fixed top-0 left-0 w-full h-82 z-[1000]
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-bw1 border-b border-bw3 shadow-navbar text-bw8"
            : "bg-transparent border-transparent shadow-none text-bw1"
        }
      `}
    >
      <div className="h-full mx-120 flex items-center justify-between">
        
        {/* Left: Logo */}
        <a href="#hero" className="flex items-center"> 
            <img 
              src="..\src\assets\logo.svg" 
              alt="KJP Logo" 
              className="h-[36px] w-auto"
            />
        </a>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-45">
          <a href="#hero" className="text-b4 hover:text-primary transition">
            Beranda
          </a>
          <a href="#about" className="text-b4 hover:text-primary transition">
            Tentang
          </a>
          <a href="#services" className="text-b4 hover:text-primary transition">
            Layanan
          </a>
          <a href="#faq" className="text-b4 hover:text-primary transition">
            FAQ
          </a>
          <Button variant="primary">
            Konsultasi Proyek
          </Button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;
