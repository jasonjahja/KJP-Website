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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div
          className="
            mx-25 max-w-[700px] text-bw1 mt-82
            md:mx-120
          "
        >
          {/* Title */}
          <h1 className="text-h7 md:text-h3">
            Solusi Konstruksi dan Logistik
            <br />
            Proyek Terpercaya
          </h1>

          {/* Description */}
          <p className="mt-15 text-b5 md:text-b1">
            PT Kencana Jaya Persada adalah perusahaan pelaksana konstruksi dan
            penyedia layanan logistik proyek yang melayani pembangunan gedung,
            infrastruktur sipil, serta suplai material tambang.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-30
              flex flex-col gap-15
              md:inline-grid md:grid-flow-col md:auto-cols-fr md:mt-45
            "
          >
            <Button
              variant="primary"
              px="px-45"
              py="py-10 md:py-15"
              text="text-s2 md:text-h7"
              href="#footer"
              className="w-full md:w-auto"
            >
              Konsultasi Proyek
            </Button>

            <Button
              variant="secondary"
              px="px-45"
              py="py-10 md:py-15"
              text="text-s2 md:text-h7"
              href="#services"
              className="w-full md:w-auto"
            >
              Lihat Layanan
            </Button>
          </div>

          {/* Stats */}
          <div
            className="
              mt-45
              mx-auto
              w-fit
              flex flex-col gap-5
              md:flex-row md:items-center md:gap-30
            "
          >
            <div className="flex items-end gap-10">
              <p className="text-h3 text-primary">13+</p>
              <p className="text-b3 md:text-b1">Tahun Pengalaman</p>
            </div>

            <div className="hidden md:block h-12 w-px bg-white/60" />

            <div className="flex items-end gap-10">
              <p className="text-h3 text-primary">50+</p>
              <p className="text-b3 md:text-b1">Tim Profesional</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
