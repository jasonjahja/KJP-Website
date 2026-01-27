import Button from "./Button";

function Navbar() {
  return (
    <header className="w-full h-82 bg-bw01 border-b border-bw03 shadow-navbar">
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
          <a href="#hero" className="text-b4 text-bw08 hover:text-primary transition">
            Beranda
          </a>
          <a href="#about" className="text-b4 text-bw08 hover:text-primary transition">
            Tentang
          </a>
          <a href="#services" className="text-b4 text-bw08 hover:text-primary transition">
            Layanan
          </a>
          <a href="#faq" className="text-b4 text-bw08 hover:text-primary transition">
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
