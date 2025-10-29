import Image from "next/image";
import Link from "next/link";

// --- CONFIGURACIÓN DE LAS GALERÍAS ---
const galerias = [
  {
    nombre: "Bodas",
    href: "/portfolio/bodas",
    imagenSrc: "/portfolio/covers/bodas-cover.jpg",
  },
  {
    nombre: "Retratos",
    href: "/portfolio/retratos",
    imagenSrc: "/portfolio/covers/retratos-cover.jpg",
  },
  {
    nombre: "Paisajes",
    href: "/portfolio/paisajes",
    imagenSrc: "/portfolio/covers/paisajes-cover.jpg",
  },
];
// -------------------------------------

export default function PortfolioPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* --- Encabezado --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Explora Mi Trabajo
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Cada galería cuenta una historia diferente. Encuentra la tuya.
        </p>
      </div>

      {/* --- Grid de Galerías --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {galerias.map((galeria) => (
          <Link
            href={galeria.href}
            key={galeria.nombre}
            className="group relative block w-full aspect-3/4 overflow-hidden rounded-lg shadow-xl"
          >
            {/* Imagen de fondo con efecto zoom al pasar el cursor */}
            <Image
              src={galeria.imagenSrc}
              alt={`Ver galería de ${galeria.nombre}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* Overlay oscuro para legibilidad */}
            <div
              className="absolute inset-0 bg-linear-to-t
             from-black/70 via-black/40 to-transparent"
            />

            {/* Contenido de texto */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h2 className="text-3xl font-bold text-white">
                {galeria.nombre}
              </h2>
              <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                Ver galería →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
