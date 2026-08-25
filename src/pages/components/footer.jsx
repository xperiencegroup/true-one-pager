import trueLogo from "../../assets/logos/true-cienega.svg";
import link from "../../assets/icons/link.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";

import xperienceDesarrollo from "../../assets/xperience/desarrollado-por-experience.svg";

// socials
import facebookIcon from "../../assets/icons/social/facebook.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import whatsappIcon from "../../assets/icons/social/whatsapp.svg";

import returnIcon from "../../assets/icons/return.svg";

const navLinks = [
  { id: "propuesta", label: "Propuesta de Valor", href: "#propuesta-de-valor" },
  { id: "naves", label: "Naves y Macrolotes", href: "#naves-macrolotes" },
  { id: "ubicacion", label: "Ubicación", href: "#ubicacion" },
  { id: "por-que", label: "¿Por qué PI True CF?", href: "#true-cienega" },
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

const socials = [
  {
    id: "face",
    icon: facebookIcon,
    href: "",
  },
  {
    id: "linkedin",
    icon: linkedinIcon,
    href: "",
  },
  {
    id: "instagram",
    icon: instagramIcon,
    href: "",
  },
];

export default function Footer() {
  return (
    <div className="relative flex justify-center items-center w-full bg-black">
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-[1164px] gap-[20px] py-[90px] border-x border-orange">
          {/* Logo */}
          <img
            src={trueLogo}
            alt="Parque Industrial Ciénega de Flores"
            className="w-[240px] sm:max-w-[360px]"
          />

          {/* Navegación */}
          <nav className="w-full max-sm:flex-col max-w-[1164px] flex flex-wrap justify-around items-center">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-[16px] pt-[11px] pb-[12px] boton text-cream hover:text-naranja transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Sitio web CTA */}
          <p className="boton text-white font-medium text-center">
            Visita nuestro sitio web para conocer más:
          </p>

          {/* Datos de contacto */}
          <div className="flex max-sm:flex-col flex-wrap w-full max-w-[1124px] justify-around items-cente gap-[10px]">
            {contactInfo.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.id === "web" ? "_blank" : undefined}
                rel={item.id === "web" ? "noopener noreferrer" : undefined}
                className="flex items-center self-center gap-[10px] font-light data text-white"
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

      {/* Redes sociales */}
      <div className="absolute flex justify-between items-end w-[316px] h-[52px] bottom-0">
        {socials.map((social) => {
          return (
            <a
              key={social.id}
              className="flex size-[52px] justify-center items-center rounded-t-[32.5px] bg-orange"
            >
              <img
                src={social.icon}
                alt={`Ícono de ${social.id}`}
                className="size-[25.5px]"
              />
            </a>
          );
        })}
      </div>

      {/* botón whatsapp */}
      <div className="absolute z-50 left-0 sm:bottom-[52px]">
        <a className="flex size-[52px] justify-center items-center rounded-r-[32.5px] bg-orange">
          <img
            src={whatsappIcon}
            alt={`Ícono de Whatsapp`}
            className="size-[25.5px]"
          />
        </a>
      </div>

      {/* botón regresar */}
      <div className="absolute z-50 right-0 top-0">
        <a
          href="#hero"
          className="flex size-[52px] justify-center items-center rounded-b-[32.5px] bg-orange"
        >
          <img
            src={returnIcon}
            alt={`Ícono de Whatsapp`}
            className="size-[25.5px]"
          />
        </a>
      </div>
    </div>
  );
}
