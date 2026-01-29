import { useState } from "react";
import FaqCard from "../components/FAQCard";
import faqIcon from "../assets/icons/faq.svg";

const faqs = [
  {
    question: "Apakah perusahaan Anda memiliki kebijakan anti-diskriminasi?",
    answer:
      "Kami memiliki kebijakan anti-diskriminasi yang menjamin kesetaraan kesempatan bagi semua individu tanpa memandang latar belakang atau identitas.",
  },
  {
    question:
      "Bagaimana perusahaan Anda mendukung pengembangan infrastruktur digital?",
    answer:
      "Kami mendukung pengembangan infrastruktur digital dalam proyek-proyek konstruksi untuk meningkatkan efisiensi dan produktivitas.",
  },
  {
    question:
      "Bagaimana cara memastikan efisiensi dan penghematan biaya dalam proyek konstruksi?",
    answer:
      "Kami menerapkan strategi manajemen yang efisien dan menggunakan teknologi terkini untuk memastikan efisiensi dan penghematan biaya dalam setiap proyek.",
  },
  {
    question:
      "Apakah perusahaan Anda menerima proyek di luar kota atau luar negeri?",
    answer:
      "Ya, kami menerima proyek di luar kota maupun luar negeri sesuai dengan kesepakatan kerjasama dan kemampuan kami.",
  },
  {
    question:
      "Apakah perusahaan Anda memiliki proyek-proyek unggulan yang dapat dijadikan contoh?",
    answer:
      "Kami memiliki sejumlah proyek unggulan seperti pembangunan gedung perkantoran modern, pembangunan jembatan penting, dan pengembangan infrastruktur yang berhasil diselesaikan.",
  },
  {
    question:
      "Bagaimana perusahaan Anda memastikan kepatuhan terhadap regulasi keselamatan kerja?",
    answer:
      "Kami memiliki tim keselamatan kerja yang berkomitmen untuk memastikan kepatuhan terhadap semua regulasi keselamatan kerja yang berlaku.",
  },
  {
    question:
      "Bagaimana perusahaan Anda memastikan kualitas material yang digunakan dalam proyek?",
    answer:
      "Kami hanya menggunakan material berkualitas tinggi dan bekerja sama dengan pemasok terpercaya untuk memastikan kualitas material yang digunakan dalam setiap proyek.",
  },
  {
    question:
      "Bagaimana cara menghubungi tim layanan pelanggan jika ada pertanyaan?",
    answer:
      "Anda dapat menghubungi tim layanan pelanggan kami melalui email atau nomor telepon yang tersedia di website.",
  },
  {
    question:
      "Apakah perusahaan Anda memiliki kebijakan untuk mematuhi regulasi konstruksi?",
    answer:
      "Kami tunduk pada semua regulasi dan standar keselamatan konstruksi yang berlaku, dan memastikan setiap proyek kami memenuhi persyaratan hukum dan peraturan.",
  },
  {
    question:
      "Apakah perusahaan Anda memberikan dukungan pada pengembangan masyarakat lokal?",
    answer:
      "Kami memberikan dukungan pada pengembangan masyarakat lokal melalui program CSR dan kemitraan dengan pihak-pihak terkait.",
  },
  {
    question:
      "Bagaimana perusahaan Anda menangani proyek dengan tenggat waktu yang ketat?",
    answer:
      "Kami memiliki pengalaman dalam menangani proyek dengan tenggat waktu yang ketat dan memiliki strategi manajemen yang efektif untuk memenuhi tenggat waktu yang ditetapkan.",
  },
  {
    question:
      "Bagaimana perusahaan Anda mengukur keberhasilan proyek konstruksi?",
    answer:
      "Kami mengukur keberhasilan proyek konstruksi berdasarkan kualitas hasil pekerjaan, kepuasan pelanggan, serta kepatuhan terhadap tenggat waktu dan anggaran.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section id="faq" className="w-full py-60 xl:py-120 text-bw8">
      <div className="px-25 xl:px-120">

        {/* HEADER (FULL WIDTH) */}
        <div className="items-center text-center">
            {/* Label */}
            <div className="flex gap-5 justify-center items-center">
            <img src={faqIcon} alt="FAQ" className="h-[14px] xl:h-25 text-primary" />
            <span className="text-s3 xl:text-h8">
                FAQ
            </span>
            </div>

            {/* Title */}
            <h1 className="text-h8 xl:text-h4 mt-15">
            Pertanyaan yang Sering Diajukan
            </h1>
        </div>

        {/* List */}
        <div className="mt-25 xl:mt-45 space-y-15">
          {visibleFaqs.map((item, i) => (
            <FaqCard
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Footer Link */}
        {!showAll && faqs.length > 6 && (
          <div className="mt-25 xl:mt-45 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="text-blue text-s2 xl:text-h7 hover:text-blue/70 hover:cursor-pointer transition"
            >
              Lihat Selengkapnya
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
