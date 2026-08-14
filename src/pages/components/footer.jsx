import trueLogo from "../../assets/logos/true-cienega.svg";
import link from "../../assets/icons/link.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";

import xperienceDesarrollo from "../../assets/xperience/desarrollado-por-experience.svg";

const navLinks = [
  { id: "propuesta", label: "Propuesta de Valor", href: "#propuesta-de-valor" },
  { id: "naves", label: "Naves y Macrolotes", href: "#naves-y-macrolotes" },
  { id: "ubicacion", label: "Ubicación", href: "#ubicacion" },
  { id: "por-que", label: "¿Por qué PI True CF?", href: "#por-que-true-cf" },
  { id: "true-dev", label: "True Developments", href: "#true-developments" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

const contactInfo = [
  {
    id: "web",
    icon: link,
    label: "www.truedevelopments.mx",
    href: "https://www.truedevelopments.mx",
  },
  {
    id: "tel",
    icon: phone,
    label: "Tel. Oficina: +52 (81) 1356 1142",
    href: "tel:+528113561142",
  },
  {
    id: "mail",
    icon: mail,
    label: "info@truedevelopments.mx",
    href: "mailto:info@truedevelopments.mx",
  },
];

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full bg-black">
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-[1164px] gap-[20px] py-[90px] border-x border-orange">
          {/* Logo */}
          <img
            src={trueLogo}
            alt="Parque Industrial Ciénega de Flores"
            className="w-[360px]"
          />

          {/* Navegación */}
          <nav className="w-full max-w-[1164px] flex flex-wrap justify-around items-center">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-[16px] pt-[11px] pb-[12px] text-[16px] text-cream hover:text-naranja transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Sitio web CTA */}
          <p className="text-[16px] text-white font-semibold text-center">
            Visita nuestro sitio web para conocer más:
          </p>

          {/* Datos de contacto */}
          <div className="flex flex-wrap w-full max-w-[1124px] justify-around items-center">
            {contactInfo.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.id === "web" ? "_blank" : undefined}
                rel={item.id === "web" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-[10px] font-inter text-[18px] text-white"
              >
                <img src={item.icon} alt="" className="h-[15px]" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Desarrollado por */}
          <img
            src={xperienceDesarrollo}
            alt="Desarrollado por Xperience Group"
            className="w-[118px] pt-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
