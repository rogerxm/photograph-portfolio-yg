import { HeroSection } from "@/app/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Mi Trabajo</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Capturo momentos reales con un estilo natural y artístico.
          Especializado en retratos, eventos y sesiones de producto.
        </p>
      </section>
    </>
  );
}
