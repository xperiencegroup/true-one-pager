import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { showToast } from "../toast/toast-custom";
import { socials, whatsappInfo } from "../../const/socials";

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
  { id: "whatsapp", icon: whatsappIcon, href: whatsappInfo.href },
  { id: "linkedin", icon: linkedinIcon, href: socials[1].href },
  { id: "instagram", icon: instagramIcon, href: socials[2].href },
];

const inputClass =
  "flex items-center gap-[20px] w-full h-[60px] px-[16px] rounded-[14px] border bg-white/10 text-white placeholder:text-white/60 font-inter text-[14px] outline-none focus:border-white transition-colors";

export default function PopupClickAndXperience({ isOpen, onClose }) {
  const { t } = useTranslation("modalPlataforma");
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
            source: "True One Pager - Popup de Click & Xperience",
            data: data,
          }),
        },
      );
      await onClose();
      await showToast(t("toast.success"), false);
      reset();
    } catch (error) {
      console.error(error);
      showToast(t("toast.error"), true);
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
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col lg:flex-row w-full max-w-[1280px] max-h-[90svh] overflow-hidden bg-brown"
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute z-10 top-[23px] right-[24px] flex items-center justify-center size-[36px] rounded-full bg-cream hover:opacity-90 hover:cursor-pointer"
              >
                <img src={closeIcon} alt={t("close")} className="size-[18px]" />
              </button>

              {/* Columna izquierda - imagen */}
              <div className="relative hidden lg:flex w-full lg:w-1/2 shrink-0">
                <img
                  src={popupImage}
                  alt={t("alt.render")}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-170 from-brown/60 to-brown" />

                <div className="relative flex flex-col justify-end w-full h-full p-[60px] gap-[20px]">
                  <img
                    src={trueLogoCream}
                    alt={t("alt.logo")}
                    className="w-[334px]"
                  />

                  <div className="flex flex-col gap-[6px]">
                    <h3 className="title font-abhaya text-white uppercase">
                      {t("intro.title")}
                      <br />
                      {t("intro.titleLine2")}
                    </h3>
                    <p className="subtitle font-abhaya text-white uppercase">
                      {t("intro.subtitle1")}
                      <br />
                      {t("intro.subtitle2")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna derecha - formulario */}
              <div className="flex flex-col w-full lg:w-1/2 overflow-y-auto p-[30px] sm:p-[44px] gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <h2 className="title font-abhaya text-white uppercase leading-[115%]">
                    {t("heading1")} <br />
                    {t("heading2")}
                  </h2>
                  <div className="w-full">
                    <div className="divider-orange-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <h3 className="subtitle font-abhaya text-white uppercase">
                    {t("formTitle")}
                  </h3>
                  <p className="paragraph font-light text-white/80">
                    <Trans
                      t={t}
                      i18nKey="description"
                      components={{
                        strong: <span className="font-semibold" />,
                      }}
                    />
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
                      className="size-[18px] shrink-0 brightness-0 invert-100"
                    />
                    <input
                      {...register("name", {
                        required: t("form.errors.nameRequired"),
                        minLength: {
                          value: 2,
                          message: t("form.errors.nameTooShort"),
                        },
                        pattern: {
                          value: /^[\p{L}\s]+$/u,
                          message: t("form.errors.nameInvalid"),
                        },
                      })}
                      type="text"
                      placeholder={t("form.name")}
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

                  {/* Email */}
                  <div
                    className={`${inputClass} relative ${errors.email ? "border-orange" : "border-white"}`}
                  >
                    <img
                      src={mailIcon}
                      alt=""
                      className="size-[18px] shrink-0 brightness-0 invert-100"
                    />
                    <input
                      {...register("email", {
                        required: t("form.errors.emailRequired"),
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: t("form.errors.emailInvalid"),
                        },
                      })}
                      type="email"
                      placeholder={t("form.email")}
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

                  {/* Phone */}
                  <div
                    className={`${inputClass} relative ${errors.phone ? "border-orange" : "border-white"}`}
                  >
                    <img
                      src={phoneIcon}
                      alt=""
                      className="size-[18px] shrink-0 brightness-0 invert-100"
                    />
                    <input
                      {...register("phone", {
                        required: t("form.errors.phoneRequired"),
                        pattern: {
                          value: /^[0-9]{8,15}$/,
                          message: t("form.errors.phoneInvalid"),
                        },
                        onChange: (e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            "",
                          );
                        },
                      })}
                      type="tel"
                      placeholder={t("form.phone")}
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
                    className="w-full boton font-medium px-[20px] pt-[12px] pb-[11px] rounded-full text-blue bg-cream hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("form.submitting") : t("form.submit")}
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
