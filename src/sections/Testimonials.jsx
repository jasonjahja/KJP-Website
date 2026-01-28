import { useRef, useState, useEffect } from "react";
import testiIcon from "../assets/icons/testimonial.svg";
import star from "../assets/icons/star.svg";
import chevronL from "../assets/icons/chevron_left.svg";
import chevronR from "../assets/icons/chevron_right.svg";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    rating: 5,
    text:
      "Sangat puas dengan hasil pekerjaan dari perusahaan ini. Semua pekerjaan dilakukan dengan teliti dan berkualitas tinggi. Terima kasih!",
    name: "Mira Handayani",
    date: "10/10/2023 23:50",
  },
  {
    rating: 5,
    text:
      "Sangat senang dengan pengerjaan yang cepat dan efisien dari perusahaan ini. Mereka mampu menyelesaikan proyek dengan sangat baik tanpa mengorbankan kualitas. Sangat direkomendasikan!",
    name: "Faisal Rahman",
    date: "03/02/2021 12:59",
  },
  {
    rating: 5,
    text:
      "Perusahaan ini adalah pilihan terbaik untuk setiap proyek konstruksi. Mereka memiliki tim yang handal dan mampu memberikan solusi terbaik untuk setiap masalah yang muncul. Sangat direkomendasikan!",
    name: "Dian Pratiwi",
    date: "05/30/2023 00:42",
  },
  {
    rating: 5,
    text:
      "Sangat terkesan dengan kerja yang dilakukan perusahaan ini. Semua pekerjaan dilakukan dengan teliti dan berkualitas tinggi. Sangat direkomendasikan!",
    name: "Putra Jaya",
    date: "03/27/2024 05:28",
  },
  {
    rating: 5,
    text:
      "Mereka menyelesaikan proyek renovasi rumah saya dengan sangat cepat dan efisien. Hasilnya sangat memuaskan. Saya akan merekomendasikan perusahaan ini kepada teman-teman saya.",
    name: "Anita",
    date: "01/11/2024 00:21",
  },
];

export default function Testimonial() {

  const VISIBLE = 3;
  const BASE = testimonials.length;
  const START_INDEX = BASE;

  const [index, setIndex] = useState(START_INDEX);

  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (viewportRef.current) {
      setViewportWidth(viewportRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARD_WIDTH = 650;
  const GAP = 25;
  const STEP = CARD_WIDTH + GAP;

  const offset =
    viewportWidth === 0
      ? 0
      : index * STEP - viewportWidth / 2 + CARD_WIDTH / 2;

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    const BASE = testimonials.length;

    if (index < BASE) {
      setIndex((prev) => prev + BASE);
    } else if (index >= BASE * 2) {
      setIndex((prev) => prev - BASE);
    }
  }, [index]);

  return (
    <section id="testimoni" className="w-full py-120 text-bw8">
        
        {/* HEADER (FULL WIDTH) */}
        <div className="mx-120">
            
            {/* Label */}
            <div className="flex items-center gap-5">
            <img src={testiIcon} alt="Testimonial" className="h-25 text-primary" />
            <span className="text-h8 text-bw8">
                Testimoni
            </span>
            </div>

            {/* Title */}
            <h1 className="text-h4 mt-15">
                Pengalaman Klien Bekerja Sama dengan Kami
            </h1>

            <p className="mt-15 text-b2">
                Bukti nyata kualitas layanan kami dari sudut pandang klien yang telah bekerja sama.
            </p>
        </div>

        {/* Carousel Section */}
        <div className="relative mt-60">

            {/* Track viewport */}
            <div
              ref={viewportRef}
              className="overflow-hidden"
            >
              <div
                className="flex gap-25 items-stretch transition-transform duration-300"
                style={{
                  transform: `translateX(-${offset}px)`,
                }}
              >
                {loopedTestimonials.map((item, i) => (
                  <div key={i} className="flex pb-15">
                    <TestimonialCard
                      key={i}
                      {...item}
                      current={(i % testimonials.length) + 1}
                      total={testimonials.length}
                    />
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Bottom Row: Summary + Arrows */}
        <div className="mx-120 mt-45 flex items-center justify-between">

            {/* Summary */}
            <div className="flex flex-col gap-5">

              {/* Row 1: stars + label */}
              <div className="flex items-center gap-10">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-30" />
                  ))}
                </div>

                <div className="text-h5 text-primary">Sempurna</div>
              </div>

              {/* Row 2: description */}
              <div className="text-b1">
                <span className="text-h6 text-primary">5.0 </span> <span>dari 5 berdasarkan 5 ulasan</span>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-30">
                <button
                  onClick={prev}
                  className="w-30 shrink-0 flex items-center justify-center hover:cursor-pointer"
                >
                  <img src={chevronL} alt="prev" className="w-30"/>
                </button>

                <button
                  onClick={next}
                  className="w-30 shrink-0 flex items-center justify-center hover:cursor-pointer"
                >
                <img src={chevronR} alt="next" className="w-30"/>
                </button>
            </div>

        </div>
    </section>
  );
}
