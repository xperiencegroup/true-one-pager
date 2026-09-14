import { useTranslation } from "react-i18next";
import xperienceDesarrollo from "../../assets/xperience/desarrollado-por-experience.svg";

// navigation
import { navLinks } from "../../const/navigation";

// socials
import { socials, contactInfo } from "../../const/socials";
import returnIcon from "../../assets/icons/return.svg";

export default function Footer() {
  const { t } = useTranslation("footer");
  const { t: tNav } = useTranslation("nav");

  return (
    <div className="relative flex justify-center items-center w-full bg-black">
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-[1164px] gap-[20px] pt-[40px] pb-[70px] border-x border-orange">
          {/* Logo */}
          <h4 className="title font-abhaya text-white">{t("title")}</h4>

          {/* Navegación */}
          <nav className="w-full max-sm:flex-col max-w-[1164px] flex flex-wrap justify-around items-center">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-[16px] pt-[11px] pb-[12px] boton text-cream hover:text-naranja transition-colors"
              >
                {tNav(item.labelKey)}
              </a>
            ))}
          </nav>

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
                {item.labelKey
                  ? `${t(item.labelKey)} ${item.value}`
                  : item.label}
              </a>
            ))}
          </div>

          {/* Desarrollado por */}
          <img
            src={xperienceDesarrollo}
            alt={t("credit")}
            className="w-[118px]"
          />
        </div>
      </div>

      {/* Redes sociales */}
      <div className="absolute flex justify-between items-end w-[316px] h-[52px] bottom-0">
        {socials.map((social) => {
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
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

      {/* botón regresar */}
      <div className="absolute z-50 left-0 bottom-0">
        <a
          href="#hero"
          className="flex size-[52px] justify-center items-center rounded-t-[32.5px] bg-orange"
        >
          <img
            src={returnIcon}
            alt={`Ícono de Whatsapp`}
            className="size-[25.5px] rotate-90"
          />
        </a>
      </div>
    </div>
  );
}
