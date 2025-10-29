import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="bg-gray-900 text-white py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para crear algo increíble?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Me encantaría escuchar tu idea, ya sea una boda, una sesión de
          retratos o un proyecto comercial. Hablemos.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-gray-900 font-bold py-3 px-10 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Contáctame
        </Link>
      </div>
    </section>
  );
}
