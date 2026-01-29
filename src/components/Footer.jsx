import Button from "./Button";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer id="footer" className="w-full bg-secondary px-25 xl:px-120 py-60 max-w-[1440px]">
        {/* TOP */}
        <div className="flex flex-col gap-60 text-bw1 xl:flex-row xl:gap-0 xl:justify-between">
          {/* LEFT — Company Info */}
          <div className="space-y-25 xl:space-y-60">

            {/* LOGO */}
            <div className="space-y-10">
              <a href="#hero" className="flex items-center"> 
                <img 
                src={logo}
                alt="KJP Logo" 
                className="h-[42px] xl:h-[54px] w-auto"
                />
              </a>
              <p className="text-[#46C097] text-h8 xl:text-h6">
                PT. Kencana Jaya Persada
              </p>
            </div>

            {/* INFO */}
            <div className="space-y-15 text-b5 xl:text-b3 max-w-[325px]">
              <p>NIB: 9120*****0363</p>
              <p>Berdiri sejak 2012</p>
              <p>
                Alamat: Jln. Dharma Bakti no. 20
                Sigunggung – Pekanbaru, Riau
              </p>
              <p>Terdaftar resmi di Indonesia</p>
            </div>
          </div>

          {/* MIDDLE — Informasi */}
          <div className="space-y-25">
            <h3 className="text-h8 xl:text-h6">Informasi</h3>

            <nav
              className="
                grid grid-cols-2 gap-x-30 gap-y-25
                xl:grid-cols-1
                text-b5 xl:text-b3
              "
            >
              <a href="#hero" className="hover:text-primary transition">
                Overview
              </a>

              <a href="#about" className="hover:text-primary transition">
                Tentang
              </a>

              <a href="#services" className="hover:text-primary transition">
                Layanan
              </a>

              <a href="#testimonials" className="hover:text-primary transition">
                Testimoni
              </a>

              <a href="#faq" className="hover:text-primary transition">
                FAQ
              </a>

              <a href="#location" className="hover:text-primary transition">
                Lokasi
              </a>
            </nav>
          </div>

          {/* RIGHT — Contact */}
          <div className="space-y-25">
            <h3 className="text-h8 xl:text-h6">Hubungi Kami</h3>

            <div className="space-y-15 mb-25 xl:mb-45 text-b5 xl:text-b3">
              <p className="flex items-center gap-10">
                <span className="text-s2 xl:text-h8">Telepon</span>
                <span>(0761) 563829</span>
              </p>

              <p className="flex items-center gap-10">
                <span className="text-s2 xl:text-h8">Faks</span>
                <span>(0761) 563827</span>
              </p>

              <p className="flex items-center gap-10">
                <span className="text-s2 xl:text-h8">Email</span>
                <a
                    href="mailto:willy@kencanamakmur.com"
                    className="underline hover:text-primary transition"
                >
                    willy@kencanamakmur.com
                </a>
              </p>
            </div>

            <Button
            variant="primary"
            px="px-30 xl:px-45"
            py="py-10 xl:py-15"
            text="text-s2 xl:text-h7"
            href="#footer"
            >
                Konsultasi Proyek
            </Button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-60 mb-15 h-[1px] bg-bw5" />

        {/* BOTTOM */}
        <div className="flex flex-col xl:flex-row gap-15 xl:gap-0 justify-between items-center text-b6 xl:text-b5 text-bw5">
          <p>
            © 2012–2026 PT Kencana Jaya Persada. Seluruh hak cipta dilindungi.
          </p>

          <a
            href="/company-profile-2022.pdf"
            className="underline hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profil Perusahaan (PDF)
          </a>
        </div>

    </footer>
  );
}

export default Footer