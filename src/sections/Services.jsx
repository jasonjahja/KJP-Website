import serviceIcon from "../assets/icons/service.svg";
import serviceImg1 from "../assets/images/services-1.webp";
import serviceImg2 from "../assets/images/services-2.webp";
import serviceImg3 from "../assets/images/services-3.webp";
import serviceImg4 from "../assets/images/services-4.webp";
import serviceImg5 from "../assets/images/services-5.webp";
import serviceImg6 from "../assets/images/services-6.webp";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="w-full bg-bw3 text-bw8">
      <div
        className="
          max-w-[1440px] mx-120 py-120
        "
      >
        {/* HEADER (FULL WIDTH) */}
        <div className="items-center text-center">
          {/* Label */}
          <div className="flex gap-5 justify-center">
            <img src={serviceIcon} alt="Layanan" className="h-25 text-primary" />
            <span className="text-h8">
              Layanan
            </span>
          </div>

          {/* Title */}
          <h1 className="text-h4 mt-15">
            Layanan Konstruksi, Logistik, dan Suplai Material Proyek
          </h1>

          <p className="mt-15 text-b2">
            Kami menangani berbagai kebutuhan proyek dengan dukungan tim profesional,
            armada operasional modern, dan proses kerja yang terstruktur untuk memastikan
            mutu pekerjaan yang tinggi.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-60 grid grid-cols-3 gap-15">
          <ServiceCard
            image={serviceImg1}
            title="Konstruksi Gedung"
            description="Pembangunan gedung komersial, fasilitas publik, dan bangunan pendukung proyek."
          />

          <ServiceCard
            image={serviceImg2}
            title="Infrastruktur Air & Drainase"
            description="Saluran air, drainase, dan infrastruktur air lainnya."
          />

          <ServiceCard
            image={serviceImg3}
            title="Konstruksi Jalan & Infrastruktur"
            description="Pekerjaan jalan, perkerasan, dan infrastruktur sipil pendukung kawasan."
          />

          <ServiceCard
            image={serviceImg4}
            title="Elektrikal Sipil"
            description="Instalasi elektrikal untuk proyek infrastruktur dan kawasan industri."
          />

          <ServiceCard
            image={serviceImg5}
            title="Jembatan & Terowongan"
            description="Pekerjaan jembatan, jalan layang, dan struktur sipil berat."
          />

          <ServiceCard
            image={serviceImg6}
            title="Logistik Proyek & Transportasi"
            description="Rental transportasi darat & air, logistik material, dan dukungan operasional proyek."
          />
        </div>
      </div>
    </section>
  );
}