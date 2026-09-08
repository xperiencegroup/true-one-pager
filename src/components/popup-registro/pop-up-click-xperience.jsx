import { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.svg";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import whatsappIcon from "../../assets/icons/social/whatsapp.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import popupImage from "../../assets/images/popup-click.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";

const socialButtons = [
  { id: "whatsapp", icon: whatsappIcon, href: "https://wa.me/528184640002" },
  { id: "linkedin", icon: linkedinIcon, href: "#" },
  { id: "instagram", icon: instagramIcon, href: "#" },
];

const inputClass =
  "flex items-center gap-[20px] w-full h-[60px] px-[16px] rounded-[14px] border-[1px] border-white bg-white/10 text-white placeholder:text-white/60 font-inter text-[14px] outline-none focus:border-white transition-colors";

export default function PopupClickAndXperience({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  // Bloquear scroll del body mientras el popup está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: lógica de envío
    console.log(formData);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/60 px-[20px]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col lg:flex-row w-full max-w-[1280px] max-h-[90svh] overflow-hidden bg-brown"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute z-10 top-[23px] right-[24px] flex items-center justify-center size-[42px] rounded-full bg-cream hover:opacity-90 hover:cursor-pointer"
        >
          <img src={closeIcon} alt="Cerrar" className="size-[21px]" />
        </button>

        {/* Columna izquierda - imagen */}
        <div className="relative hidden lg:flex w-full lg:w-1/2 shrink-0">
          <img
            src={popupImage}
            alt="Render True Ciénega Industrial Park"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-170 from-brown/60 to-brown" />

          <div className="relative flex flex-col justify-end w-full h-full p-[60px] gap-[20px]">
            <img
              src={trueLogoCream}
              alt="Logo True Developments"
              className="w-[334px]"
            />

            <div className="flex flex-col gap-[6px]">
              <h3 className="title font-abhaya text-white uppercase">
                Conoce True Ciénega
                <br />
                Industrial Park
              </h3>
              <p className="subtitle font-abhaya text-white uppercase">
                Naves industriales a la medida
                <br />y macrolotes industriales
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha - formulario */}
        <div className="flex flex-col w-full lg:w-1/2 overflow-y-auto p-[30px] sm:p-[44px] gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="title font-abhaya text-white uppercase leading-[115%]">
              Ingresa a Nuestra <br />
              Plataforma Interactiva
            </h2>
            <div className="w-full">
              <div className="divider-orange-full" />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <h3 className="subtitle font-abhaya text-white uppercase">
              Deja tus datos
            </h3>
            <p className="paragraph font-light text-white/80">
              Registra tus datos y explora{" "}
              <span className="font-semibold">
                TRUE CIÉNEGA INDUSTRIAL PARK
              </span>{" "}
              de manera inmersiva
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
            <div className={inputClass}>
              <img
                src={userIcon}
                alt=""
                className="size-[18px] shrink-0 brightness-0 invert-100"
              />
              <input
                type="text"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange("nombre")}
                className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white"
              />
            </div>

            <div className={inputClass}>
              <img
                src={mailIcon}
                alt=""
                className="size-[18px] shrink-0 brightness-0 invert-100"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange("email")}
                className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white"
              />
            </div>

            <div className={inputClass}>
              <img
                src={phoneIcon}
                alt=""
                className="size-[18px] shrink-0 brightness-0 invert-100"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange("telefono")}
                className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full boton font-medium px-[20px] pt-[12px] pb-[11px] rounded-full text-blue bg-cream hover:opacity-90"
            >
              Ver Plataforma Interactiva
            </button>
          </form>

          {/* Redes sociales */}
          <div className="self-center flex w-full max-w-[375px] justify-between gap-[20px] pt-[10px]">
            {socialButtons.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-[49px] rounded-t-[32px] bg-orange hover:opacity-90"
              >
                <img
                  src={social.icon}
                  alt={`Ícono de ${social.id}`}
                  className="size-[25.5px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
