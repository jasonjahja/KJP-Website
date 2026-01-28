function ServiceCard({ image, title, description }) {
  return (
    <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 px-15 pb-15 text-bw1">
        <h3 className="text-s2 md:text-h8">
          {title}
        </h3>
        <p className="text-b6 md:text-b5 text-bw3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
