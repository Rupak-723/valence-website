export default function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      className="w-full max-w-xl rounded-3xl border border-slate-700"
    >
      <source src="/videos/Chem2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}