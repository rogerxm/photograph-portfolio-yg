import Link from "next/link";
import { Heart, Camera, Briefcase } from "lucide-react";

export function HomeServices() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ¿En qué te puedo ayudar?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-16">
          Servicios fotográficos diseñados para capturar tus momentos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Servicio 1 */}
          <div className="flex flex-col items-center">
            <Heart className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Bodas</h3>
            <p className="text-gray-700">
              Historias de amor contadas con emoción y naturalidad.
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="flex flex-col items-center">
            <Camera className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Retratos</h3>
            <p className="text-gray-700">
              Sesiones personales, familiares o profesionales.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="flex flex-col items-center">
            <Briefcase className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Comercial</h3>
            <p className="text-gray-700">
              Fotografía de producto, marca y contenido digital.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/servicios"
            className="inline-block bg-gray-900 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
