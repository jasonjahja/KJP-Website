import star from "../assets/icons/star.svg";

function TestimonialCard({ rating, text, name, date, current, total }) {
  return (
    <div className="bg-bw01 border border-bw5 shadow-card p-15 xl:p-25 w-[325px] xl:w-[650px] h-full flex flex-col text-bw8">
      {/* Top Row: Stars (left) + Index (right) */}
      <div className="flex items-start justify-between">
        
        {/* Stars */}
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <img key={i} src={star} alt="star" className="w-[20px] xl:w-30" />
          ))}
        </div>

        {/* Index */}
        <div className="text-b6 xl:text-b3 text-bw6">
          {current}/{total}
        </div>
      </div>

      {/* Text */}
      <p className="mt-15 text-b6 xl:text-b2 flex-1">
        {text}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-30">
        <p className="text-s2 xl:text-h6">{name}</p>
        <p className="text-b6 xl:text-b3 text-bw6">{date}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
