import { useInView } from "../../hooks/useInView";
import { usePopupStore } from "../../store/usePopupStore";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
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
    key: "whatsapp",
    label: "+52 (81) 8464 0002",
    href: "https://wa.me/528184640002",
  },
  {
    id: "oficina",
    icon: phone,
    key: "call",
    label: "+52 (81) 1356 1142",
    href: "tel:+528113561142",
  },
  {
    id: "correo",
    icon: mail,
    key: "email",
    label: "ricardo@truedevelopments.mx",
    href: "mailto:ricardo@truedevelopments.mx",
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

  const { t } = useTranslation("plataforma");
  const { t: tContact } = useTranslation("hablemos");

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

      await showToast(tContact("toast.success"), false);
      reset();
    } catch (error) {
      console.log(error);
      showToast(tContact("toast.error"), true);
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
            {t("title")}
          </h2>

          <p
            style={{ transitionDelay: "100ms" }}
            className={`max-w-[1110px] paragraph font-light text-center reveal ${isContentVisible ? "is-visible" : ""}`}
          >
            <Trans
              t={t}
              i18nKey="description"
              components={{
                strong: <strong className="font-bold" />,
                br: <br />,
              }}
            />
          </p>

          <button
            onClick={() => openPopup("click-and-xperience")}
            style={{ transitionDelay: "200ms" }}
            className={`boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream reveal ${isContentVisible ? "is-visible" : ""}`}
          >
            {t("cta")}
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1150px] gap-[15px] px-[44px] py-[60px] sm:p-[60px]">
        <div className="flex flex-col xl:flex-row justify-between w-full h-full gap-[20px] py-[60px]">
          {/* Header */}
          <div
            ref={headerRef}
            className={`max-xl:self-center flex w-full max-w-[620px] xl:max-w-[247px] flex-col flex-col-reverse lg:flex-row justify-between items-center gap-[15px] md:gap-[20px] lg:gap-[40px] reveal ${isHeaderVisible ? "is-visible" : ""}`}
          >
            <div className="flex flex-col w-full gap-[15px] md:gap-[20px] max-xl:text-center">
              <h2 className="font-abhaya title text-white uppercase">
                {tContact("title")}
              </h2>
              <p className="paragraph font-light text-white">
                <Trans
                  t={tContact}
                  i18nKey="description"
                  components={{
                    strong: <span className="font-semibold text-white" />,
                  }}
                />
              </p>
            </div>
          </div>

          {/* Card de contacto */}
          <div
            ref={cardRef}
            className={`max-xl:self-center flex flex-col xl:flex-row w-full max-xl:max-w-[611px] max-xl:text-center max-xl:items-center gap-[30px] xl:gap-[10px] py-[30px] px-[40px] xl:p-[20px] rounded-[20px] bg-white/10 reveal-scale ${isCardVisible ? "is-visible" : ""}`}
          >
            <div className="flex w-full max-w-[273px] flex-col justify-center gap-[8px] xl:gap-[25px]">
              <h2 className="title font-abhaya uppercase">
                {tContact("cardTitle")}
              </h2>
              <div className="max-xl:self-center w-full max-w-[238px] divider-orange-full" />
              <div className="flex flex-col gap-[5px]">
                <h3 className="font-abhaya max-md:text-center subtitle text-white uppercase">
                  {tContact("person.name")}
                </h3>
                <p className="font-semibold max-md:text-center paragraph-bold text-white">
                  {tContact("person.role")}
                </p>
              </div>
            </div>

            {/* Datos de contacto */}
            <div className="flex w-full flex-col justify-center gap-[15px]">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col min-[580px]:flex-row w-full min-[580px]:h-[41px] justify-between gap-[12px] md:gap-[20px]"
                >
                  <div className="flex flex-col min-[580px]:flex-row items-center justify-center gap-[10px]">
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
                    className="self-center flex w-full max-w-[175px] items-center justify-center px-[16px] py-[11px] rounded-full boton font-semibold bg-cream text-blue"
                  >
                    {tContact(item.key)}
                  </a>
                </div>
              ))}
            </div>
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
                {tContact("form.name.label")}
              </label>
              <div className="relative">
                <input
                  {...register("name", {
                    required: tContact("form.errors.nameRequired"),
                    minLength: {
                      value: 2,
                      message: tContact("form.errors.nameTooShort"),
                    },
                    pattern: {
                      value: /^[\p{L}\s]+$/u,
                      message: tContact("form.errors.nameInvalid"),
                    },
                  })}
                  type="text"
                  placeholder={tContact("form.name.placeholder")}
                  className={`${inputClass} ${errors.name ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.name?.message} />
              </div>
            </div>

            <div className="relative flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                {tContact("form.company.label")}
              </label>
              <div className="relative">
                <input
                  {...register("company", {
                    required: tContact("form.errors.companyRequired"),
                    minLength: {
                      value: 2,
                      message: tContact("form.errors.companyTooShort"),
                    },
                  })}
                  type="text"
                  placeholder={tContact("form.company.placeholder")}
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
                {tContact("form.email.label")}
              </label>
              <div className="relative">
                <input
                  {...register("email", {
                    required: tContact("form.errors.emailRequired"),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: tContact("form.errors.emailInvalid"),
                    },
                  })}
                  type="email"
                  placeholder={tContact("form.email.placeholder")}
                  className={`${inputClass} ${errors.email ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.email?.message} />
              </div>
            </div>

            <div className="relative flex flex-col gap-[10px]">
              <label className="font-inter font-bold paragraph text-white">
                {tContact("form.phone.label")}
              </label>
              <div className="relative">
                <input
                  {...register("phone", {
                    required: tContact("form.errors.phoneRequired"),
                    pattern: {
                      value: /^[0-9]{8,15}$/,
                      message: tContact("form.errors.phoneInvalid"),
                    },
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    },
                  })}
                  type="tel"
                  inputMode="numeric"
                  placeholder={tContact("form.phone.placeholder")}
                  className={`${inputClass} ${errors.phone ? "border-orange" : "border-white"}`}
                />
                <InputTooltipError message={errors.phone?.message} />
              </div>
            </div>
          </div>

          {/* Qué estás buscando */}
          <div className="relative flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              {tContact("form.interest.label")}
            </label>
            <div className="relative">
              <input
                {...register("searching", {
                  required: tContact("form.errors.interestRequired"),
                  maxLength: {
                    value: 150,
                    message: tContact("form.errors.maxLength150"),
                  },
                  pattern: {
                    value: /^[\p{L}\p{N}\s.,/()-]+$/u,
                    message: tContact("form.errors.invalidChars"),
                  },
                })}
                type="text"
                placeholder={tContact("form.interest.placeholder")}
                className={`${inputClass} ${errors.searching ? "border-orange" : "border-white"}`}
              />
              <InputTooltipError message={errors.searching?.message} />
            </div>
          </div>

          {/* Superficie aproximada */}
          <div className="relative flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              {tContact("form.area.label")}
            </label>
            <div className="relative">
              <input
                {...register("area", {
                  maxLength: {
                    value: 60,
                    message: tContact("form.errors.maxLength60"),
                  },
                  pattern: {
                    value: /^[\p{L}\p{N}\s.,/()-]+$/u,
                    message: tContact("form.errors.invalidChars"),
                  },
                })}
                type="text"
                placeholder={tContact("form.area.placeholder")}
                className={`${inputClass} ${errors.area ? "border-orange" : "border-white"}`}
              />
              <InputTooltipError message={errors.area?.message} />
            </div>
          </div>

          {/* Mensaje */}
          <div className="relative flex flex-col gap-[10px]">
            <label className="font-inter font-bold paragraph text-white">
              {tContact("form.message.label")}
            </label>
            <textarea
              {...register("message", {
                maxLength: {
                  value: 200,
                  message: tContact("form.errors.maxLength200"),
                },
                pattern: {
                  value: /^[\p{L}\p{N}\s.,/()¿?¡!:-]+$/u,
                  message: tContact("form.errors.invalidChars"),
                },
              })}
              placeholder={tContact("form.message.placeholder")}
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
            {isSubmitting
              ? tContact("form.submitting")
              : tContact("form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
