import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Yessica García
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/about">Sobre mí</Link>
          </li>
          <li>
            <Link href="/portfolio">Portafolio</Link>
          </li>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
