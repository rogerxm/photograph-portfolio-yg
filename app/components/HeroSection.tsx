import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      <Image
        src="/images/hero.jpg"
        alt="Fotografía principal"
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Yessica García Fotografía</h1>
        <p className="text-lg max-w-xl mx-auto">
          Retratos, eventos y producto — cada imagen cuenta una historia.
        </p>
      </div>
    </section>
  );
};
