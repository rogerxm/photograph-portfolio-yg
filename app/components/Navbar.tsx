"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { nombre: "Servicios", href: "/services" },
  { nombre: "Portafolio", href: "/portfolio" },
  { nombre: "Sobre Mí", href: "/about" },
];

export const Navbar = () => {
  // Estado para controlar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hook para saber la ruta actual
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nombre */}
          <Link
            href="/"
            className="font-bold text-xl text-gray-900"
            onClick={() => setIsMenuOpen(false)} // Cierra el menú si se hace clic en el logo
          >
            Yessica García
          </Link>

          {/* Navegación de Escritorio (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.nombre}>
                    <Link
                      href={link.href}
                      // Estilo de enlace activo
                      className={`hover:text-gray-900 transition-colors ${
                        isActive ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {link.nombre}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* Botón de CTA (Llamada a la Acción) en Escritorio */}
            <Link
              href="/contact"
              className="bg-gray-900 text-white font-medium py-2 px-5 rounded-lg text-sm hover:bg-gray-700 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Botón de Menú Móvil (Hamburguesa) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div
        id="mobile-menu"
        className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.nombre}>
              <Link
                href={link.href}
                className="block text-lg font-medium text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
              >
                {link.nombre}
              </Link>
            </li>
          ))}
          {/* CTA en Móvil */}
          <li>
            <Link
              href="/contact"
              className="block text-lg font-bold text-white bg-gray-900 py-3 px-4 rounded-lg hover:bg-gray-700 mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
