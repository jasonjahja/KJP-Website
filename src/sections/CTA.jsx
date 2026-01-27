import CTACard from "../components/CTACard";

export default function CTA() {
  return (
    <section className="relative w-full">
    {/* Background split (50 / 50 of CTA height) */}
    <div className="absolute inset-0 -z-10 flex flex-col">
        <div className="h-1/2 bg-bw3" />
    </div>

    {/* CTA content */}
    <div className="flex justify-center">
        <CTACard />
    </div>
    </section>
  );
}
