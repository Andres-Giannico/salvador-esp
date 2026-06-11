import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTripadvisor,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import { businessContact, formatRegisteredAddress } from "@/config/site";

const Footer = () => {
  const year = new Date().getFullYear();
  const email = businessContact.email;
  const [phone1, phone2] = businessContact.phones;
  const whatsappNumber = businessContact.whatsappNumber;

  const socialLinks = [
    { name: "Instagram", href: businessContact.social.instagram, icon: FaInstagram },
    { name: "Facebook", href: businessContact.social.facebook, icon: FaFacebookF },
    { name: "TripAdvisor", href: businessContact.social.tripadvisor, icon: FaTripadvisor },
    { name: "YouTube", href: businessContact.social.youtube, icon: FaYoutube },
    { name: "TikTok", href: businessContact.social.tiktok, icon: FaTiktok },
  ];

  return (
    <footer id="contact" className="relative">
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24 text-white"
          viewBox="0 0 1440 74"
          preserveAspectRatio="none"
        >
          <path
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="pt-20 pb-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-gray-200">
            <Link href="/" className="mb-6 md:mb-0">
              <Image
                src="/images/optimized/salvador-ibiza-footer-logo-alt.webp"
                alt="Salvador Ibiza"
                width={60}
                height={18}
                loading="lazy"
              />
            </Link>
            <div className="flex items-center space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition duration-300 hover:transform hover:scale-110 text-gray-600 hover:text-blue-500"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <div className="lg:pr-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Sobre nosotros</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vive Ibiza desde el mar con nuestras excursiones en barco premium:
                momentos inolvidables, aguas cristalinas y la magia del Mediterráneo.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
              >
                Sobre Salvador Ibiza
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Explora</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/boat-trips"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Excursiones en barco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/private-boat-trips"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Charters privados
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-events"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Eventos corporativos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/weddings"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Bodas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Galería
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Empresa</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Colaboradores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    ⟡ Aviso legal / condiciones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiMapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>
                    {formatRegisteredAddress()}
                  </span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiPhone className="w-4 h-4 text-blue-600" />
                  </div>
                  <a
                    href={`tel:${phone1.replace(/\s/g, "")}`}
                    className="hover:text-blue-600 transition duration-300"
                  >
                    {phone1}
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiPhone className="w-4 h-4 text-blue-600" />
                  </div>
                  <a
                    href={`tel:${phone2.replace(/\s/g, "")}`}
                    className="hover:text-blue-600 transition duration-300"
                  >
                    {phone2}
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiMail className="w-4 h-4 text-blue-600" />
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-blue-600 transition duration-300 break-all"
                  >
                    {email}
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-50 p-2 rounded-full mr-3">
                    <FaWhatsapp className="w-4 h-4 text-green-600" />
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition duration-300"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {year} <span className="font-medium">Salvador Ibiza</span>. Todos los
            derechos reservados.
          </p>
          <div className="flex space-x-8">
            <a
              href="#top"
              className="text-sm text-gray-500 hover:text-blue-600 transition duration-300"
            >
              Volver arriba
            </a>
            <span className="text-sm text-gray-500">Hecho con ❤️ desde MDQ e IBZ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
