import Image from "next/image";
import Link from "next/link";

export function HomeAbout() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Columna de Imagen */}
        <div className="w-full">
          <Image
            src="/images/retrato-yessi.jpg"
            alt="Retrato del fotógrafo"
            width={600}
            height={750}
            className="rounded-lg shadow-xl object-cover aspect-4/5 w-full"
          />
        </div>

        {/* Columna de Texto */}
        <div className="text-lg text-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hola, soy Yessi
          </h2>
          <p className="mb-6">
            Soy un fotógrafo apasionado por contar historias. Mi objetivo es
            capturar la esencia de cada momento, creando recuerdos auténticos y
            atemporales que perduren para siempre.
          </p>
          <Link
            href="/about"
            className="font-bold text-gray-900 text-lg hover:underline"
          >
            Conoce mi historia &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
