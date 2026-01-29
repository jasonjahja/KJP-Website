import { useEffect, useState } from "react";
import Button from "./Button";

import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";
import logo from "../assets/logo.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full py-15 z-[999]
          border-b
          transition-[background-color,border-color,box-shadow,color]
          duration-300 ease-in-out
          ${
            scrolled
              ? "bg-bw1 border-bw5 shadow-navbar text-bw8"
              : "bg-transparent border-transparent shadow-none text-bw1"
          }
        `}
      >
        <div className="h-full mx-25 xl:mx-120 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="KJP Logo" className="h-[26px] xl:h-[36px] w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-45">
            <a href="#hero" className="text-b4 hover:text-primary transition">
              Overview
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
            <Button href="#footer">Konsultasi Proyek</Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden"
          >
            <img src={hamburgerIcon} alt="Menu" className="w-30" />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[999]
          bg-black/60 backdrop-blur-[5px]
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 right-0 z-[1000]
          h-screen w-[280px] bg-secondary
          p-25
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close */}
        <div className="flex justify-end mb-25">
          <button onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="Close" className="w-30" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-15 text-b4 text-bw1">
          <a href="#hero" className="p-10 w-full" onClick={() => setOpen(false)}>Overview</a>
          <a href="#about" className="p-10 w-full" onClick={() => setOpen(false)}>Tentang</a>
          <a href="#services" className="p-10 w-full" onClick={() => setOpen(false)}>Layanan</a>
          <a href="#faq" className="p-10 w-full" onClick={() => setOpen(false)}>FAQ</a>

          <div className="mt-15">
            <Button
              href="#footer"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Konsultasi Proyek
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
