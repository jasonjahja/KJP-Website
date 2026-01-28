import Button from "./Button";

function Footer() {
  return (
    <footer id="footer" className="w-full bg-secondary px-120 py-60 max-w-[1440px]">
        {/* TOP */}
        <div className="flex flex-col gap-60 text-bw1 md:flex-row md:gap-0 md:justify-between">
          {/* LEFT — Company Info */}
          <div className="space-y-60">

            {/* LOGO */}
            <div className="space-y-10">
              <a href="#hero" className="flex items-center"> 
                <img 
                src="..\src\assets\logo.svg" 
                alt="KJP Logo" 
                className="h-[54px] w-auto"
                />
              </a>
              <p className="text-[#46C097] text-h6">
                PT. Kencana Jaya Persada
              </p>
            </div>

            {/* INFO */}
            <div className="space-y-15 text-b3">
              <p>NIB: 9120*****0363</p>
              <p>Berdiri sejak 2012</p>
              <p>
                Alamat: Jln. Dharma Bakti no. 20 <br />
                Sigunggung – Pekanbaru, Riau
              </p>
              <p>Terdaftar resmi di Indonesia</p>
            </div>
          </div>

          {/* MIDDLE — Informasi */}
          <div className="space-y-25">
            <h3 className="text-h6">Informasi</h3>
            <nav className="flex flex-col gap-25 text-b3">
                <a
                    href="#hero"
                    className="hover:text-primary transition"
                >
                    Beranda
                </a>

                <a
                    href="#about"
                    className="hover:text-primary transition"
                >
                    Tentang
                </a>

                <a
                    href="#services"
                    className="hover:text-primary transition"
                >
                    Layanan
                </a>

                <a
                    href="#testimonials"
                    className="hover:text-primary transition"
                >
                    Testimoni
                </a>

                <a
                    href="#faq"
                    className="hover:text-primary transition"
                >
                    FAQ
                </a>

                <a
                    href="#location"
                    className="hover:text-primary transition"
                >
                    Lokasi
                </a>
            </nav>
          </div>

          {/* RIGHT — Contact */}
          <div className="space-y-25">
            <h3 className="text-h6">Hubungi Kami</h3>

            <div className="space-y-15 mb-20 text-b3">
              <p className="flex items-center gap-10">
                <span className="text-h8">Telepon</span>
                <span>(0761) 563829</span>
              </p>

              <p className="flex items-center gap-10">
                <span className="text-h8">Faks</span>
                <span>(0761) 563827</span>
              </p>

              <p className="flex items-center gap-10">
                <span className="text-h8">Email</span>
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
            px="px-45"
            py="py-15"
            text="text-h7"
            >
                Konsultasi Proyek
            </Button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-60 mb-15 h-[1px] bg-bw5" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-b5 text-bw5">
          <p>
            © 2012–2026 PT Kencana Jaya Persada. Seluruh hak cipta dilindungi.
          </p>

          <a
            href="/COMPANY PROFILE 2022_260121_235038.pdf"
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