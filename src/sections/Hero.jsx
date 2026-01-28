import Button from "../components/Button";
import heroImg from "../assets/images/hero.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Black Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/75
          via-black/65
          to-black/50
        "
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-120 mt-82 max-w-[700px] text-bw1">
          
          <h1 className="text-h3">
            Solusi Konstruksi dan Logistik
            <br />
            Proyek Terpercaya
          </h1>

          <p className="mt-15 text-b1">
            PT Kencana Jaya Persada adalah perusahaan pelaksana konstruksi dan
            penyedia layanan logistik proyek yang melayani pembangunan gedung,
            infrastruktur sipil, serta suplai material tambang.
          </p>

          <div className="mt-45 inline-grid grid-flow-col auto-cols-fr gap-15">
            <Button
            variant="primary"
            px="px-45"
            py="py-15"
            text="text-h7"
            href="#footer"
            >
                Konsultasi Proyek
            </Button>
            <Button
            variant="secondary"
            px="px-45"
            py="py-15"
            text="text-h7"
            href="#services"
            >
                Lihat Layanan
            </Button>
            </div>


          {/* Stats */}
          <div className="mt-45 flex items-center gap-30">
            <div className="flex items-end gap-10">
                <p className="text-h3 text-primary">
                13+
                </p>

                <p className="text-b1">
                Tahun Pengalaman
                </p>
            </div>

            <div className="h-12 w-px bg-white/60" />

            <div className="flex items-end gap-10">
                <p className="text-h3 text-primary">
                50+
                </p>

                <p className="text-b1">
                Tim Profesional
                </p>
            </div>

            </div>


        </div>
      </div>
    </section>
  );
}
