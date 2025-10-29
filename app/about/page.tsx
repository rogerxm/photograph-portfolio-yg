import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* --- Encabezado --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Mi Historia, Tu Fotografía
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Un poco sobre la persona detrás de la cámara y mi pasión por capturar
          momentos.
        </p>
      </div>

      {/* --- Contenido Principal (Foto + Texto) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Columna de Imagen */}
        <div className="w-full">
          <Image
            src="/images/retrato-yessi.jpg"
            alt="Retrato profesional de Yessi"
            width={600}
            height={750}
            className="rounded-lg shadow-xl object-cover aspect-4/5 w-full"
          />
        </div>

        {/* Columna de Texto */}
        <div className="text-lg text-gray-800 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Hola, soy Yessi
          </h2>
          <p>
            Soy una fotógrafa apasionada con sede en Puebla, México,
            especializada en retratos.
          </p>
          <p>
            Mi viaje en la fotografía comenzó hace 12 años, no solo como una
            profesión, sino como una forma de ver y conectar con el mundo. Me
            encanta encontrar la belleza en lo cotidiano y la emoción pura en
            los momentos que parecen fugaces.
          </p>
          <p>
            Mi filosofía es simple: crear imágenes auténticas y atemporales.
            Quiero que te sientas cómodo, te diviertas y, al final, tengas un
            recuerdo que puedas atesorar para siempre.
          </p>
          <p className="font-medium text-gray-900">
            No solo estoy aquí para tomar fotos; estoy aquí para contar tu
            historia.
          </p>
        </div>
      </div>

      <div className="text-center mt-20 md:mt-28">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">
          ¿Listo para crear algo increíble?
        </h3>
        <Link
          href="/contact"
          className="inline-block bg-gray-900 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Hablemos
        </Link>
      </div>
    </main>
  );
}
