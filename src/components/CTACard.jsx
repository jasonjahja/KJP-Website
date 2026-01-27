import CTABg from "../assets/images/cta-bg.webp";
import ulBorder from "../assets/images/u-l-border.webp";
import brBorder from "../assets/images/b-r-border.webp";
import ulBorderSm from "../assets/images/u-l-border-sm.webp";
import brBorderSm from "../assets/images/b-r-border-sm.webp";
import Button from "./Button";

function CTACard() {
  return (
    <div className="relative mx-120 w-full overflow-hidden bg-bw1 shadow-card border border-bw5">
      
      {/* Background image */}
      <img
        src={CTABg}
        alt="CTA Background"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      {/* Decorative Borders */}
        <div className="absolute inset-0">
        
        {/* Top Left Border */}
        <img
            src={ulBorder}
            alt=""
            className="
            absolute left-15 top-15
            hidden md:block
            "
        />
        <img
            src={ulBorderSm}
            alt=""
            className="
            absolute left-10 top-10
            block md:hidden
            "
        />

        {/* Bottom Right Border */}
        <img
            src={brBorder}
            alt=""
            className="
            absolute right-15 bottom-15
            hidden md:block
            "
        />
        <img
            src={brBorderSm}
            alt=""
            className="
            absolute right-10 bottom-10
            block md:hidden
            "
        />
        </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-25 px-20 py-60 text-center">
        <h2 className="text-h4 text-bw8">
          Punya kebutuhan proyek tertentu? Kami siap membantu.
        </h2>

        <Button
        variant="primary"
        px="px-45"
        py="py-15"
        text="text-h7"
        >
            Konsultasi proyek
        </Button>
      </div>
    </div>
  );
}

export default CTACard;
