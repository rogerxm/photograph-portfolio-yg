import Link from "next/link";
import { Heart, Camera, Briefcase, Check } from "lucide-react";

// --- CONFIGURACIÓN DE SERVICIOS ---
const servicios = [
  {
    nombre: "Fotografía de Bodas",
    icono: Heart,
    descripcion:
      "Inmortaliza el día más importante de tu vida con un reportaje completo, desde los preparativos hasta el baile.",
    hrefGaleria: "/portfolio/bodas",
    incluye: [
      "Sesión pre-boda",
      "Cobertura completa del evento (8-10 horas)",
      "Galería digital privada en alta resolución",
      "Entrega de 300-500 fotos editadas",
    ],
  },
  {
    nombre: "Sesiones de Retrato",
    icono: Camera,
    descripcion:
      "Ya sea para tu marca personal, familia o un momento especial, creamos retratos que capturan tu esencia.",
    hrefGaleria: "/portfolio/retratos",
    incluye: [
      "Sesión de 1-2 horas en locación o estudio",
      "Múltiples cambios de vestuario",
      "Galería digital privada",
      "Entrega de 25 fotos editadas profesionalmente",
    ],
  },
  {
    nombre: "Comercial y Producto",
    icono: Briefcase,
    descripcion:
      "Fotografía de alta calidad para tu negocio, e-commerce o marca, diseñada para vender y destacar.",
    hrefGaleria: "/portfolio/paisajes",
    incluye: [
      "Fotografía de producto (estudio o lifestyle)",
      "Imágenes para contenido de redes sociales",
      "Fotografía arquitectónica o de interiores",
      "Licencia de uso comercial",
    ],
  },
];
// -------------------------------------

export default function ServiciosPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* --- Encabezado --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Mis Servicios
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Ofrezco soluciones fotográficas profesionales adaptadas a tus
          necesidades, enfocadas en la calidad y la narrativa visual.
        </p>
      </div>

      {/* --- Grid de Servicios --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {servicios.map((servicio) => (
          <div
            key={servicio.nombre}
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col space-y-6"
          >
            {/* Icono y Título */}
            <div className="flex flex-col items-center text-center">
              <servicio.icono className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                {servicio.nombre}
              </h2>
            </div>

            <p className="text-gray-700 text-center grow">
              {servicio.descripcion}
            </p>

            {/* Lista de Inclusiones */}
            <ul className="space-y-3 pt-4">
              {servicio.incluye.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botones de Acción */}
            <div className="pt-6 space-y-4">
              <Link
                href="/contact"
                className="w-full text-center block bg-gray-900 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Solicitar Cotización
              </Link>
              <Link
                href={servicio.hrefGaleria}
                className="w-full text-center block text-gray-900 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Ver ejemplos &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
