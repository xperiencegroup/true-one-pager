import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import { socials, whatsappInfo } from "../../const/socials";
import { showToast } from "../toast/toast-custom";

import closeIcon from "../../assets/icons/close.svg";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import whatsappIcon from "../../assets/icons/social/whatsapp.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import popupImage from "../../assets/images/hero-background2.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";

const socialButtons = [
  { id: "whatsapp", icon: whatsappIcon, href: whatsappInfo.href },
  { id: "linkedin", icon: linkedinIcon, href: socials[1].href },
  { id: "instagram", icon: instagramIcon, href: socials[2].href },
];

const inputClass =
  "flex items-center gap-[20px] w-full h-[60px] px-[16px] rounded-[14px] border bg-transparent text-white placeholder:text-white/60 parrafos-bold font-medium outline-none focus:border-white transition-colors";

export default function PopupRegistro({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

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
            source: "True One Pager - Popup de Registro",
            data: data,
          }),
        },
      );
      await onClose();
      await showToast("Registro enviado correctamente", false);
      reset();
    } catch (error) {
      console.error(error);
      showToast("No se pudo enviar el formulario", true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex justify-center items-center bg-black/60 px-[20px]"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col lg:flex-row w-full max-w-[1280px] max-h-[90svh] overflow-hidden bg-blue"
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute z-10 top-[23px] right-[24px] flex items-center justify-center size-[36px] rounded-full bg-cream hover:opacity-90 hover:cursor-pointer"
              >
                <img src={closeIcon} alt="Cerrar" className="size-[18px]" />
              </button>

              {/* Columna izquierda - imagen */}
              <div className="relative hidden lg:flex w-full lg:w-1/2 shrink-0">
                <img
                  src={popupImage}
                  alt="Render True Ciénega Industrial Park"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-170 from-blue-overlay/60 to-blue-overlay" />

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
                    <p className="subtitle font-abhaya text-orange uppercase">
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
                    Descubre las opciones
                    <br />
                    disponibles para tu empresa
                  </h2>
                  <div className="w-full">
                    <div className="divider-orange-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <h3 className="subtitle font-abhaya text-white uppercase">
                    Registra tus datos
                  </h3>
                  <p className="paragraph font-light text-white/80">
                    Déjanos tus datos y uno de nuestros asesores se pondrá en
                    contacto contigo.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-[16px]"
                >
                  {/* Nombre */}
                  <div
                    className={`${inputClass} relative ${errors.name ? "border-orange" : "border-white"}`}
                  >
                    <img
                      src={userIcon}
                      alt=""
                      className="size-[18px] shrink-0"
                    />
                    <input
                      {...register("name", {
                        required: "El nombre es obligatorio",
                        minLength: {
                          value: 2,
                          message: "El nombre es muy corto",
                        },
                        pattern: {
                          value: /^[A-Za-zÀ-ÿ\s]+$/,
                          message: "Solo se permiten letras",
                        },
                      })}
                      type="text"
                      placeholder="Nombre completo"
                      className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white"
                    />
                    {errors.name && (
                      <div className="absolute -top-2 right-0 -translate-y-full z-10">
                        <div className="relative bg-orange text-white text-xs rounded-md px-3 py-1.5 whitespace-nowrap shadow-lg">
                          {errors.name.message}
                          {/* arrow */}
                          <div className="absolute left-4 -bottom-1 w-2 h-2 bg-orange rotate-45" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* email */}
                  <div
                    className={`${inputClass} relative ${errors.email ? "border-orange" : "border-white"}`}
                  >
                    <img
                      src={mailIcon}
                      alt=""
                      className="size-[18px] shrink-0"
                    />
                    <input
                      {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Correo electrónico inválido",
                        },
                      })}
                      type="email"
                      placeholder="Correo electrónico"
                      className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white"
                    />
                    {errors.email && (
                      <div className="absolute -top-2 right-0 -translate-y-full z-10">
                        <div className="relative bg-orange text-white text-xs rounded-md px-3 py-1.5 whitespace-nowrap shadow-lg">
                          {errors.email.message}
                          {/* arrow */}
                          <div className="absolute left-4 -bottom-1 w-2 h-2 bg-orange rotate-45" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* teléfono */}
                  <div
                    className={`${inputClass} relative ${errors.phone ? "border-orange" : "border-white"}`}
                  >
                    <img
                      src={phoneIcon}
                      alt=""
                      className="size-[18px] shrink-0"
                    />
                    <input
                      {...register("phone", {
                        required: "El teléfono es obligatorio",
                        pattern: {
                          value: /^[0-9]{8,15}$/,
                          message: "Debe tener entre 8 y 15 dígitos",
                        },
                        onChange: (e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            "",
                          );
                        },
                      })}
                      type="tel"
                      inputMode="numeric"
                      placeholder="Teléfono"
                      className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white"
                    />
                    {errors.phone && (
                      <div className="absolute -top-2 right-0 -translate-y-full z-10">
                        <div className="relative bg-orange text-white text-xs rounded-md px-3 py-1.5 whitespace-nowrap shadow-lg">
                          {errors.phone.message}
                          {/* arrow */}
                          <div className="absolute left-4 -bottom-1 w-2 h-2 bg-orange rotate-45" />
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full boton font-medium px-[20px] pt-[12px] pb-[11px] rounded-full text-cream bg-orange hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar información"}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
