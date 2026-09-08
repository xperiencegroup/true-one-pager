import { useInView } from "../../hooks/useInView";
import { usePopupStore } from "../../store/usePopupStore";
import { useForm } from "react-hook-form";
import { InputTooltipError } from "../../components/tooltip/InputTooltipError";
import { showToast } from "../../components/toast/toast-custom";

import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import phone from "../../assets/icons/phone.svg";

import banner from "../../assets/images/banner-contacto.jpg";

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
];

export default function HablemosDeTuProyecto() {
  const openPopup = usePopupStore((state) => state.openPopup);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch(
        "https://true-one-pager-backend.vercel.app/api/v1/form/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source: "True One Pager - Formulario Contacto",
            data: data,
          }),
        },
      );

      await showToast("Registro enviado correctamente", false);
      reset();
    } catch (error) {
      console.log(error);
      showToast("No se pudo enviar el formulario", true);
    }
  };

  const inputClass =
    "w-full h-[60px] md:h-[80px] pl-[20px] pr-[15px] rounded-[15px] border bg-blue paragraph text-white font-light placeholder:text-white outline-none focus:border-naranja transition-colors";

  const textareaClass =
    "w-full min-h-[150px] sm:min-h-[80px] pr-[20px] pl-[10px] py-[10px] rounded-[15px] border bg-blue paragraph text-white font-light placeholder:text-white outline-none focus:border-naranja transition-colors resize-none";

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
            onClick={() => openPopup("click-and-xperience")}
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
        </div>

        {/* Card de contacto */}
        <div
          ref={cardRef}
          className={`flex flex-col gap-[10px] sm:gap-[10px] p-[15px] md:p-[20px] rounded-[20px] bg-white/10 reveal-scale ${isCardVisible ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-[5px]">
            <h3 className="font-abhaya max-md:text-center subtitle text-white uppercase">
              Ricardo Villarreal -
            </h3>
            <p className="font-semibold max-md:text-center paragraph-bold text-white">
              Socio, True Developments
            </p>
          </div>

          {/* Datos de contacto */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-[20px] md:gap-y-[30px] gap-x-[80px] lg:gap-[14px]">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-full max-w-[240px] gap-[12px] md:gap-[20px]"
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
          onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-col gap-[10px] md:gap-[30px] lg:gap-[50px] reveal ${isFormVisible ? "is-visible" : ""}`}
        >
          {/* Nombre completo / Empresa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[30px] lg:gap-[17px]">
            <div className="relative flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Nombre completo
              </label>
              <div className="relative">
                <input
                  {...register("name", {
                    required: "El nombre es obligatorio",
                    minLength: { value: 2, message: "El nombre es muy corto" },
                    pattern: {
                      value: /^[\p{L}\s]+$/u,
                      message: "Solo se permiten letras",
                    },
                  })}
                  type="text"
                  placeholder="Nombre"
                  className={`${inputClass} ${errors.name ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.name?.message} />
              </div>
            </div>

            <div className="relative flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Empresa
              </label>
              <div className="relative">
                <input
                  {...register("company", {
                    required: "La empresa es obligatoria",
                    minLength: {
                      value: 2,
                      message: "El nombre de la empresa es muy corto",
                    },
                  })}
                  type="text"
                  placeholder="Empresa"
                  className={`${inputClass} ${errors.company ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.company?.message} />
              </div>
            </div>
          </div>

          {/* Correo / Teléfono */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[30px] lg:gap-[17px]">
            <div className="relative flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Correo electrónico inválido",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className={`${inputClass} ${errors.email ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.email?.message} />
              </div>
            </div>

            <div className="relative flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                Teléfono
              </label>
              <div className="relative">
                <input
                  {...register("phone", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[0-9]{8,15}$/,
                      message: "Debe tener entre 8 y 15 dígitos",
                    },
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    },
                  })}
                  type="tel"
                  inputMode="numeric"
                  placeholder="Número"
                  className={`${inputClass} ${errors.phone ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.phone?.message} />
              </div>
            </div>
          </div>

          {/* Qué estás buscando */}
          <div className="relative flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              ¿Qué estás buscando?
            </label>
            <div className="relative">
              <input
                {...register("searching", {
                  required: "Cuéntanos qué estás buscando",
                  maxLength: {
                    value: 150,
                    message: "Máximo 150 caracteres",
                  },
                  pattern: {
                    value: /^[\p{L}\p{N}\s.,/()-]+$/u,
                    message: "Contiene caracteres no permitidos",
                  },
                })}
                type="text"
                placeholder="Comprar o rentar una nave industrial a la medida / Comprar un macrolote industrial"
                className={`${inputClass} ${errors.searching ? "border-orange" : "border-white"}`}
              />
              <InputTooltipError message={errors.searching?.message} />
            </div>
          </div>

          {/* Superficie aproximada */}
          <div className="relative flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              Superficie aproximada
            </label>
            <div className="relative">
              <input
                {...register("area", {
                  maxLength: {
                    value: 60,
                    message: "Máximo 60 caracteres",
                  },
                  pattern: {
                    value: /^[\p{L}\p{N}\s.,/()-]+$/u,
                    message: "Contiene caracteres no permitidos",
                  },
                })}
                type="text"
                placeholder={`200,000 - 780,000 sq ft / 3 - 15 ha"`}
                className={`${inputClass} ${errors.area ? "border-orange" : "border-white"}`}
              />
              <InputTooltipError message={errors.area?.message} />
            </div>
          </div>

          {/* Mensaje */}
          <div className="relative flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              Mensaje (opcional)
            </label>
            <textarea
              {...register("message", {
                maxLength: {
                  value: 200,
                  message: "Máximo 200 caracteres",
                },
                pattern: {
                  value: /^[\p{L}\p{N}\s.,/()¿?¡!:-]+$/u,
                  message: "Contiene caracteres no permitidos",
                },
              })}
              placeholder="Cuéntanos sobre tu proyecto, las necesidades de tu operación y la fecha en que requieres el espacio"
              rows={3}
              className={`${textareaClass} ${errors.message ? "border-orange" : "border-white"}`}
            />
            <InputTooltipError message={errors.message?.message} />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="sm:self-end lg:self-center lg:w-full lg:max-w-[565px] boton font-medium px-[20px] pt-[12px] pb-[11px] rounded-[30px] text-cream bg-orange"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}
