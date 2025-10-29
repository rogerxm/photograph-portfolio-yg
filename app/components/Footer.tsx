import Link from "next/link";
import { Instagram } from "lucide-react";

const navLinks = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Servicios", href: "/services" },
  { nombre: "Portafolio", href: "/portfolio" },
  { nombre: "Sobre Mí", href: "/about" },
  { nombre: "Contacto", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Contenedor principal del footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo o Nombre */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Yessica García
            </Link>
          </div>

          {/* Enlaces de Navegación */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.nombre}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.nombre}
              </Link>
            ))}
          </nav>

          {/* Enlaces a Redes Sociales */}
          <div className="flex space-x-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Yessica García Fotografía. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
