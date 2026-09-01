import { useState } from "react";
import trueLogo from "../../assets/logos/true-cream.svg";
import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import phone from "../../assets/icons/phone.svg";
import link from "../../assets/icons/link.svg";

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
    "w-full h-[80px] pl-[20px] pr-[15px] rounded-[15px] border border-white/80 bg-blue paragraph text-white font-light placeholder:text-white outline-none focus:border-naranja transition-colors";

  const textareaClass =
    "w-full min-h-[170px] sm:min-h-[80px] pr-[20px] pl-[10px] py-[10px] rounded-[15px] border border-white/80 bg-blue paragraph text-white font-light placeholder:text-white outline-none focus:border-naranja transition-colors resize-none";

  return (
    <div
      id="contacto"
      className="flex flex-col w-full justify-center items-center px-[44px] py-[60px] sm:p-[60px] bg-blue-overlay"
    >
      <div className="flex flex-col w-full max-w-[1150px] gap-[30px]">
        {/* Header */}
        <div className="flex flex-col flex-col-reverse lg:flex-row justify-between items-center gap-[20px] lg:gap-[40px]">
          <div className="flex flex-col w-full gap-[20px]">
            <h2 className="font-abhaya title max-lg:text-center text-white uppercase">
              Hablemos de <br className="max-lg:hidden" />
              tu proyecto.
            </h2>
            <p className="paragraph max-lg:text-center font-light text-white">
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
              alt=""
              className="w-[34px] sm:w-[74px] sm:h-[106px]"
            />
          </div>
        </div>

        {/* Card de contacto */}
        <div className="flex flex-col gap-[30px] sm:gap-[20px] p-[30px] rounded-[20px] bg-white/10">
          <h3 className="font-abhaya subtitle text-white uppercase">
            Ricardo Villarreal
          </h3>
          <p className="font-semibold paragraph text-white">
            Socio, True Developments
          </p>

          {/* Datos de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[30px] gap-x-[80px] lg:gap-[14px]">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex flex-col gap-[20px]">
                <div className="flex items-center justify-center h-[60px] gap-[10px] px-[16px] py-[12px] rounded-[10px] border border-white bg-blue">
                  <img src={item.icon} alt="" className="h-[20px]" />
                  <span className="font-inter text-[14px] text-white/90 truncate">
                    {item.label}
                  </span>
                </div>

                {/* botón */}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center flex w-fit items-center justify-center px-[16px] py-[11px] rounded-full text-[16px] font-semibold bg-cream text-blue"
                >
                  {item.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[30px] lg:gap-[50px]"
        >
          {/* Nombre completo / Empresa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[17px]">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[17px]">
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
