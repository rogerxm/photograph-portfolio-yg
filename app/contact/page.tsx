import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react"; // Iconos

export default function ContactoPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* --- Contenido Principal (Grid) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* --- Columna de Información --- */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hablemos
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Estoy emocionado de escuchar sobre tu proyecto. Llena el
              formulario o contáctame directamente por email o redes sociales.
            </p>
          </div>

          {/* --- Información Directa --- */}
          <div className="space-y-6">
            <a
              href="mailto:tuemail@dominio.com" // <-- Reemplaza esto
              className="flex items-center gap-4 text-lg text-gray-800 hover:text-black transition-colors"
            >
              <Mail className="w-6 h-6 text-gray-600" />
              <span>yessicagarciacontact@gmail.com</span>
            </a>

            {/* Opcional: Teléfono */}
            {/*
            <a 
              href="tel:+123456789" 
              className="flex items-center gap-4 text-lg text-gray-800 hover:text-black transition-colors"
            >
              <Phone className="w-6 h-6 text-gray-600" />
              <span>+12 345 6789</span>
            </a>
            */}
          </div>

          {/* --- Redes Sociales --- */}
          <div className="flex space-x-6 pt-4">
            <Link
              href="https://www.instagram.com/yessigrc"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-7 h-7" />
              <span className="sr-only">Instagram</span>
            </Link>
            {/* Agrega más redes si es necesario */}
          </div>
        </div>

        {/* --- Columna de Formulario --- */}
        <form
          // Aquí conectarías tu servicio de backend.
          // Ej: action="/api/send" method="POST"
          className="space-y-6 bg-white p-8 rounded-lg shadow-xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tipo de servicio
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
            >
              <option>Selecciona un servicio</option>
              <option value="bodas">Boda</option>
              <option value="retratos">Retratos</option>
              <option value="paisajes">Paisajes (Comercial)</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
