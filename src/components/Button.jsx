function Button({ children, variant = "primary" }) {
  const base =
    "px-30 py-10 text-s1 shadow-button transition focus:outline-none hover:cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-bw01 hover:bg-primary/90 shadow-button",

    secondary:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-bw01 shadow-button",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
