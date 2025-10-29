import Image from "next/image";
import Link from "next/link";

// --- CONFIGURACIÓN DE FOTOS ---
const fotosBoda = [
  { src: "/portfolio/bodas/boda-01.jpeg", alt: "Descripción de la foto 1" },
  { src: "/portfolio/bodas/boda-02.jpeg", alt: "Descripción de la foto 2" },
  { src: "/portfolio/bodas/boda-03.jpeg", alt: "Descripción de la foto 3" },
  { src: "/portfolio/bodas/boda-04.jpeg", alt: "Descripción de la foto 4" },
  { src: "/portfolio/bodas/boda-05.jpeg", alt: "Descripción de la foto 5" },
  { src: "/portfolio/bodas/boda-01.jpeg", alt: "Descripción de la foto 1" },
  { src: "/portfolio/bodas/boda-02.jpeg", alt: "Descripción de la foto 2" },
  { src: "/portfolio/bodas/boda-03.jpeg", alt: "Descripción de la foto 3" },
];
// ------------------------------

export default function GaleriaBodasPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* --- Encabezado --- */}
      <div className="text-left mb-16">
        <Link
          href="/portfolio"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          &larr; Volver a galerías
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
          Paisajes
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mt-4">
          Capturando el amor, la alegría y los momentos inolvidables de tu gran
          día.
        </p>
      </div>

      {/* --- Grid de Fotos --- */}
      {/*
        Columnas:
        - Móvil: 2 columnas (grid-cols-2)
        - Tablet: 3 columnas (md:grid-cols-3)
        - Desktop: 4 columnas (lg:grid-cols-4)
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {fotosBoda.map((foto) => (
          <div
            key={foto.src}
            className="w-full aspect-3/4 relative overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-20 md:mt-28">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">
          ¿Te gusta lo que ves?
        </h3>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          Permíteme ser parte de tu historia y capturar tus propios momentos.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-gray-900 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Contáctame
        </Link>
      </div>
    </main>
  );
}
