import { useState } from "react";
import trueLogo from "../../assets/logos/true-cream.svg";
import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import phone from "../../assets/icons/phone.svg";
import link from "../../assets/icons/link.svg";

import banner from "../../assets/images/banner-contacto.jpg";
import { useInView } from "../../hooks/useInView";

const contactInfo = [
  {
    id: "whatsapp",
    icon: whatsapp,
    label: "+52 (81) 8464 0002",
    buttonText: "Enviar WhatsApp",
    href: "https://wa.me/528184640002",
  },
  {
    id: "oficina",
    icon: phone,
    label: "+52 (81) 1356 1142",
    buttonText: "Llamar a Oficina",
    href: "tel:+528113561142",
  },
  {
    id: "correo",
    icon: mail,
    label: "info@truedevelopments.mx",
    buttonText: "Enviar Correo",
    href: "mailto:info@truedevelopments.mx",
  },
  {
    id: "web",
    icon: link,
    label: "www.truedevelopments.mx",
    buttonText: "Visitar Sitio Web",
    href: "https://www.truedevelopments.mx",
  },
];

const initialFormState = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  buscando: "",
  superficie: "",
  mensaje: "",
};

export default function HablemosDeTuProyecto() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass =
    "w-full h-[60px] md:h-[80px] pl-[20px] pr-[15px] rounded-[15px] border border-white/80 bg-blue paragraph text-white font-light placeholder:text-white outline-none focus:border-naranja transition-colors";

  const textareaClass =
    "w-full min-h-[150px] sm:min-h-[80px] pr-[20px] pl-[10px] py-[10px] rounded-[15px] border border-white/80 bg-blue paragraph text-white font-light placeholder:text-white outline-none focus:border-naranja transition-colors resize-none";

  // Animaciones
  const [contentRef, isContentVisible] = useInView();
  const [headerRef, isHeaderVisible] = useInView();
  const [cardRef, isCardVisible] = useInView();
  const [formRef, isFormVisible] = useInView();
  return (
    <div
      id="contacto"
      className="flex flex-col w-full justify-center items-center bg-blue-overlay"
    >
      {/* medio banner */}
      <div className="relative w-full h-svh md:h-[50svh] px-[44px] sm:px-[90px] py-[50px] sm:py-[60px]">
        {/* image y overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* image */}
            <img
              src={banner}
              alt="Imagen de fondo"
              className="absolute w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute w-full h-full bg-linear-30 from-blue-overlay via-blue-overlay via-50% via-blue-overlay/80 to-blue-overlay/20" />
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative flex flex-col w-full h-full justify-center items-center gap-[20px]"
        >
          <h2
            className={`title text-center font-abhaya uppercase reveal ${isContentVisible ? "is-visible" : ""}`}
          >
            Diseñado para operar con certeza.
          </h2>

          <p
            style={{ transitionDelay: "100ms" }}
            className={`max-w-[1110px] paragraph font-light text-center reveal ${isContentVisible ? "is-visible" : ""}`}
          >
            Explora cada configuración en nuestra{" "}
            <b className="font-bold">plataforma interactiva:</b>
            <br />
            visualiza los macrolotes, recorre las naves, compara superficies y
            encuentra el espacio ideal para tu operación desde cualquier
            dispositivo.
          </p>

          <button
            style={{ transitionDelay: "200ms" }}
            className={`boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream reveal ${isContentVisible ? "is-visible" : ""}`}
          >
            Ver Plataforma Interactiva
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1150px] gap-[15px] px-[44px] py-[60px] sm:p-[60px]">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col flex-col-reverse lg:flex-row justify-between items-center gap-[15px] md:gap-[20px] lg:gap-[40px] reveal ${isHeaderVisible ? "is-visible" : ""}`}
        >
          <div className="flex flex-col w-full gap-[15px] md:gap-[20px]">
            <h2 className="font-abhaya title text-white uppercase">
              Hablemos de tu proyecto.
            </h2>
            <p className="paragraph font-light text-white">
              <span className="font-semibold text-white">
                Cuéntanos qué necesita tu operación:
              </span>{" "}
              superficie, especificaciones, tiempos y te respondemos con
              opciones concretas: disponibilidad, planos y números.
            </p>
          </div>
          {/* Logo */}
          <div className="shrink-0 h-full flex items-center justify-center">
            <img
              src={trueLogo}
              alt="Logo de True"
              className="w-[26px] sm:w-[74px] sm:h-[106px]"
            />
          </div>
        </div>

        {/* Card de contacto */}
        <div
          ref={cardRef}
          className={`flex flex-col gap-[10px] sm:gap-[10px] p-[15px] md:p-[20px] rounded-[20px] bg-white/10 reveal-scale ${isCardVisible ? "is-visible" : ""}`}
        >
          <h3 className="font-abhaya max-md:text-center subtitle text-white uppercase">
            Ricardo Villarreal
          </h3>
          <p className="font-semibold max-md:text-center paragraph text-white">
            Socio, True Developments
          </p>

          {/* Datos de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[20px] md:gap-y-[30px] gap-x-[80px] lg:gap-[14px]">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-[12px] md:gap-[20px]"
              >
                <div className="flex items-center justify-center h-[60px] gap-[10px] px-[16px] py-[5px]  sm:py-[12px] rounded-[10px] border border-white bg-blue">
                  <img src={item.icon} alt="" className="h-[20px]" />
                  <span className="font-inter boton text-white/90 truncate">
                    {item.label}
                  </span>
                </div>

                {/* botón */}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center flex w-fit items-center justify-center px-[16px] py-[11px] rounded-full boton font-semibold bg-cream text-blue"
                >
                  {item.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex flex-col gap-[10px] md:gap-[30px] lg:gap-[50px] reveal ${isFormVisible ? "is-visible" : ""}`}
        >
          {/* Nombre completo / Empresa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[30px] lg:gap-[17px]">
            <div className="flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange("nombre")}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Empresa
              </label>
              <input
                type="text"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange("empresa")}
                className={inputClass}
              />
            </div>
          </div>

          {/* Correo / Teléfono */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[30px] lg:gap-[17px]">
            <div className="flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange("email")}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="Número"
                value={formData.telefono}
                onChange={handleChange("telefono")}
                className={inputClass}
              />
            </div>
          </div>

          {/* Qué estás buscando */}
          <div className="flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              ¿Qué estás buscando?
            </label>
            <input
              type="text"
              placeholder="Comprar o rentar una nave industrial a la medida / Comprar un macrolote industrial"
              value={formData.buscando}
              onChange={handleChange("buscando")}
              className={inputClass}
            />
          </div>

          {/* Superficie aproximada */}
          <div className="flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              Superficie aproximada
            </label>
            <input
              type="text"
              placeholder={`200,000 - 780,000 sq ft / 3 - 15 ha"`}
              value={formData.superficie}
              onChange={handleChange("superficie")}
              className={inputClass}
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              Mensaje (opcional)
            </label>
            <textarea
              placeholder="Cuéntanos sobre tu proyecto, las necesidades de tu operación y la fecha en que requieres el espacio"
              value={formData.mensaje}
              onChange={handleChange("mensaje")}
              rows={3}
              className={textareaClass}
            />
          </div>

          {/* Botón de enviar */}
          <button className="sm:self-end lg:self-center lg:w-full lg:max-w-[565px] boton font-medium px-[20px] pt-[12px] pb-[11px] rounded-[30px] text-cream bg-orange">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
