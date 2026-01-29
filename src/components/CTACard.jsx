import CTABg from "../assets/images/cta-bg.webp";
import CTABgSm from "../assets/images/cta-bg-sm.webp";
import ulBorder from "../assets/images/u-l-border.webp";
import brBorder from "../assets/images/b-r-border.webp";
import ulBorderSm from "../assets/images/u-l-border-sm.webp";
import brBorderSm from "../assets/images/b-r-border-sm.webp";
import Button from "./Button";

function CTACard() {
  return (
    <div className="relative mx-25 xl:mx-120 w-full overflow-hidden bg-bw1 shadow-card border border-bw5">
      
      {/* Background image */}
      {/* Mobile background */}
      <img
        src={CTABgSm}
        alt="CTA Background Mobile"
        className="absolute inset-0 h-full w-full object-cover opacity-20 xl:hidden"
      />

      {/* Desktop background */}
      <img
        src={CTABg}
        alt="CTA Background Desktop"
        className="absolute inset-0 h-full w-full object-cover opacity-20 hidden xl:block"
      />

      {/* Decorative Borders */}
        <div className="absolute inset-0">
        
        {/* Top Left Border */}
        <img
            src={ulBorder}
            alt=""
            className="
            absolute left-15 top-15
            hidden xl:block
            "
        />
        <img
            src={ulBorderSm}
            alt=""
            className="
            absolute left-10 top-10
            block xl:hidden
            "
        />

        {/* Bottom Right Border */}
        <img
            src={brBorder}
            alt=""
            className="
            absolute right-15 bottom-15
            hidden xl:block
            "
        />
        <img
            src={brBorderSm}
            alt=""
            className="
            absolute right-10 bottom-10
            block xl:hidden
            "
        />
        </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-25 px-15 xl:px-20 py-30 xl:py-60 text-center">
        <h2 className="text-s1 xl:text-h4 text-bw8">
          Punya kebutuhan proyek tertentu? Kami siap membantu.
        </h2>

        <Button
        variant="primary"
        px="px-30 xl:px-45"
        py="py-10 xl:py-15"
        text="text-s2 xl:text-h7"
        href="#footer"
        >
            Konsultasi Proyek
        </Button>
      </div>
    </div>
  );
}

export default CTACard;
