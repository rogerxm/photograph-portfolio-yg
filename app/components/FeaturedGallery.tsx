import Image from "next/image";
import Link from "next/link";

const featuredImages = [
  {
    src: "/portfolio/bodas/boda-destacada.jpeg",
    alt: "Foto de boda destacada",
  },
  {
    src: "/portfolio/retratos/retrato-destacado.jpeg",
    alt: "Foto de retrato destacada",
  },
  {
    src: "/portfolio/paisajes/paisaje-destacado.jpeg",
    alt: "Foto de paisaje destacada",
  },
];

export function FeaturedGallery() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Encabezado de la sección */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trabajos Destacados
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Una selección de mis proyectos favoritos que definen mi estilo.
        </p>
      </div>

      {/* Grid de Imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {featuredImages.map((img) => (
          <div
            key={img.src}
            className="w-full aspect-3/4 relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Botón para ver más */}
      <div className="text-center mt-16">
        <Link
          href="/portfolio"
          className="inline-block bg-transparent text-gray-900 font-bold py-3 px-10 rounded-lg text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
        >
          Ver Portafolio Completo
        </Link>
      </div>
    </section>
  );
}
