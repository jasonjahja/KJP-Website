function Button({
  children,
  variant = "primary",
  px = "px-30",
  py = "py-10",
  text = "text-s1",
  href,
  onClick,
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center shadow-button transition focus:outline-none hover:cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-bw1 hover:bg-primary/70",

    secondary:
      "border-[3px] border-primary text-primary bg-transparent hover:bg-primary/30",
  };

  const className = `
    ${base}
    ${px}
    ${py}
    ${text}
    ${variants[variant]}
  `;

  // 👉 kalau ada href, jadi <a>
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  // 👉 default <button>
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;