function Button({
  children,
  variant = "primary",
  px = "px-30",
  py = "py-10",
  text = "text-s1",
}) {
  const base =
    "shadow-button transition focus:outline-none hover:cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-bw1 hover:bg-primary/90",

    secondary:
      "border-[3px] border-primary text-primary bg-transparent hover:bg-primary hover:text-bw1",
  };

  return (
    <button
      className={`
        ${base}
        ${px}
        ${py}
        ${text}
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
