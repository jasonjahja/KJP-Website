import locIcon from "../assets/icons/location.svg";

export default function Location() {
  return (
    <section id="location" className="w-full bg-bw3 text-bw8 p-120">
      
      {/* HEADER (FULL WIDTH) */}
      <div className="items-center text-center max-w-[1440px]">
        {/* Label */}
        <div className="flex gap-5 justify-center">
          <img src={locIcon} alt="Lokasi" className="h-25 text-primary" />
          <span className="text-h8">
            Lokasi
          </span>
        </div>

        {/* Title */}
        <h1 className="text-h4 mt-15">
          Lokasi Kantor Kami
        </h1>
      </div>

      {/* Cards */}
      <div className="mt-45 w-full h-[450px] overflow-hidden shadow-card">
        <iframe
          title="Lokasi PT Kencana Persada Nusantara"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31917.152834186993!2d101.43550100000002!3d0.535435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac7510fd5bdb%3A0x3c96dddfd794b931!2sPT.%20KENCANA%20PERSADA%20NUSANTARA!5e0!3m2!1sid!2sus!4v1769591975198!5m2!1sid!2sus"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}