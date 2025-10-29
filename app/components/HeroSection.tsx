import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center text-white">
      <Image
        src="/images/hero.jpg"
        alt="Una modelo posando en una sesión de retratos de Yessica García"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Capa de Contenido */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Yessica García Fotografía
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
          Retratos, eventos y producto — cada imagen cuenta una historia.
        </p>

        {/* Llamadas a la Acción (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Ver Portafolio
          </Link>
          <Link
            href="/contacto"
            className="inline-block bg-transparent text-white font-bold py-3 px-8 rounded-lg text-lg border-2 border-white hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
          >
            Contáctame
          </Link>
        </div>
      </div>
    </section>
  );
};
