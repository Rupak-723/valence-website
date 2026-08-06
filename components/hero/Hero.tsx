import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] overflow-hidden bg-slate-950">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/Chem2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/40" />

      {/* Content */}

      <div className="relative z-10">
        <HeroContent />
      </div>

    </section>
  );
}