import aboutIcon from "../assets/icons/about.svg";
import aboutImg from "../assets/images/about.webp";

export default function About() {
  return (
    <section className="w-full text-bw8">
      <div
        className="
          max-w-[1440px] mx-120 py-120
        "
      >
        {/* HEADER (FULL WIDTH) */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-5">
            <img src={aboutIcon} alt="Tentang Kami" className="h-25 text-primary" />
            <span className="text-h8 text-bw8">
              Tentang Kami
            </span>
          </div>

          {/* Title */}
          <h1 className="text-h4 mt-15">
            Berpengalaman Mendukung Proyek Sejak 2012
          </h1>
        </div>

        {/* CONTENT (TEXT LEFT – IMAGE RIGHT) */}
        <div className="flex flex-col md:flex-row gap-16 text-bw8 mt-30">
          
          {/* Left Text */}
          <div className="flex-2 max-w-[710px] space-y-6 text-b2">
            <p>
              PT Kencana Jaya Persada adalah perusahaan pelaksana konstruksi dan
              penyedia layanan logistik proyek yang berbasis di Pekanbaru.
            </p>

            <p>
              Kami melayani pembangunan gedung, pekerjaan sipil, infrastruktur
              jalan, serta penyediaan material tambang dan peralatan pendukung
              proyek.
            </p>

            <p>
              Dengan pengalaman sejak 2012, dukungan armada, dan tenaga kerja
              profesional, kami berkomitmen memberikan layanan yang andal,
              aman, dan tepat waktu untuk klien swasta, BUMN, dan instansi
              pemerintah.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-end">
            <img
              src={aboutImg}
              alt="Gedung Perusahaan"
              className="
                w-full max-w-[440px]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
