function Button({
  children,
  variant = "primary",
  px = "px-30",
  py = "py-10",
  text = "text-s1",
  href,
  onClick,
  type = "button",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center shadow-button transition focus:outline-none hover:cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-bw1 hover:bg-[#6CA4DB]",

    secondary:
      "border-[3px] border-primary text-primary bg-transparent hover:bg-primary/30",
  };

  const finalClassName = `
    ${base}
    ${px}
    ${py}
    ${text}
    ${variants[variant]}
    ${className}
  `;

  // 👉 kalau ada href, jadi <a>
  if (href) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.();        // tutup sidebar
      }}
      className={finalClassName}
    >
      {children}
    </a>
  );
}

  // 👉 default <button>
  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClassName}
    >
      {children}
    </button>
  );
}

export default Button;