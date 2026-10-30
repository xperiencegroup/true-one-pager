import { useInView } from "../../hooks/useInView";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { InputTooltipError } from "../../components/tooltip/InputTooltipError";
import { showToast } from "../../components/toast/toast-custom";

import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import phone from "../../assets/icons/phone.svg";

import banner from "../../assets/images/banner-contacto.jpg";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";
import { supabase } from "../../lib/supabase";
import { TABLE_ID } from "../../const/supabase";
import { CLICK_AND_XPERIENCE_URL } from "../../const/clickAndXperience";

const contactInfo = [
  {
    id: "whatsapp",
    icon: whatsapp,
    key: "whatsapp",
    label: "+52 (81) 8464 0002",
    href: "https://wa.me/528184640002",
  },
  {
    id: "tel-oficina",
    icon: phone,
    key: "call",
    label: "+52 (81) 1356 1142",
    href: "tel:+528113561142",
  },
  {
    id: "correo",
    icon: mail,
    key: "email",
    label: "info@truedevelopments.mx",
    href: "mailto:info@truedevelopments.mx",
  },
];

export default function HablemosDeTuProyecto() {
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
      const payload = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        searching: data.searching,
        area: data.area || null,
        message: data.message || null,
        source: "True One Pager - Formulario Contacto",
      };

      const { error } = await supabase.from(TABLE_ID).insert(payload);
      if (error) throw error;

      track(TRACK.home.contacto.formSubmit);
      await showToast(tContact("toast.success"), false);
      reset();
    } catch (error) {
      console.log(error);
      track(TRACK.home.contacto.formSubmitError);
      showToast(tContact("toast.error"), true);
    }
  };

  const inputClass =
    "w-full h-[60px] md:h-[60px] pl-[20px] pr-[15px] rounded-[15px] border bg-[#EFEFEF]/10 paragraph text-white font-light placeholder:text-[#EFEFEF]/30 outline-none focus:border-naranja transition-colors";

  const searchingAndAreaClass =
    "w-full h-[60px] md:h-[80px] pl-[20px] pr-[15px] rounded-[15px] border bg-[#EFEFEF]/10 paragraph text-white font-light placeholder:text-[#EFEFEF]/30 outline-none focus:border-naranja transition-colors";

  const textareaClass =
    "w-full min-h-[150px] pr-[20px] pl-[15px] pt-[30px] pb-[10px] rounded-[15px] border bg-[#EFEFEF]/10 paragraph text-white font-light placeholder:text-[#EFEFEF]/30 outline-none focus:border-naranja transition-colors resize-none";

  // Animaciones
  const [contentRef, isContentVisible] = useInView();
  const [headerRef, isHeaderVisible] = useInView();
  const [cardRef, isCardVisible] = useInView();
  const [formRef, isFormVisible] = useInView();

  const handleGoToPlatformClick = () => {
    track(TRACK.home.popup.clickAndXperience.open, {
      source: "designed-for-certainty-second-banner",
    });
    window.open(CLICK_AND_XPERIENCE_URL, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col w-full justify-center items-center bg-blue-overlay">
      {/* medio banner */}
      <div
        id="digital-model"
        className="relative w-full h-svh md:h-[50svh] px-[20px] sm:px-[44px] md:px-[90px] py-[50px] sm:py-[60px]"
      >
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
            onClick={handleGoToPlatformClick}
            style={{ transitionDelay: "200ms" }}
            className={`boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream reveal ${isContentVisible ? "is-visible" : ""}`}
          >
            {t("cta")}
          </button>
        </div>
      </div>

      {/* contacto */}
      <div
        id="contact"
        className="relative flex justify-center w-full px-[20px] sm:px-[44px] md:px-[90px]"
      >
        <div className="flex flex-col w-full max-w-[1150px] gap-[15px] py-[60px]">
          {/* Header */}
          <div className="flex w-full max-w-[1100px] min-h-[250px]">
            <div
              ref={headerRef}
              className={`max-xl:self-center flex w-full max-w-[520px] flex-col flex-col-reverse lg:flex-row justify-between items-center gap-[15px] md:gap-[20px] lg:gap-[40px] reveal ${isHeaderVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col w-full gap-[15px] md:gap-[20px]">
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
          </div>

          {/* card and form */}
          <div className="flex flex-col lg:flex-row w-full max-w-[1100px] lg:h-[746px] justify-between items-center gap-[10px]">
            {/* card */}
            <div
              ref={cardRef}
              className={`shrink-0 flex flex-col w-full lg:max-w-[330px] xl:max-w-[353px] lg:h-[682px] justify-between max-lg:items-center px-[20px] md:px-[40px] py-[30px] lg:px-[20px] xl:px-[30px] lg:py-[50px] max-lg:gap-[10px] rounded-[20px] bg-cream/10 ${isCardVisible ? "is-visible" : ""}`}
            >
              {/* contacto */}
              <h2 className="headline font-abhaya uppercase">
                {tContact("cardTitle")}
              </h2>

              {/* divider */}
              <div className="max-xl:self-center w-full max-w-[238px] divider-orange-full" />

              {/* socio */}
              <h3 className="font-abhaya max-md:text-center heading text-white uppercase">
                {tContact("person.name")}
              </h3>
              <p className="max-md:text-center paragraph text-white">
                {tContact("person.role")}
              </p>

              {/* datos */}
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="flex max-[540px]:flex-col flex-row lg:flex-col justify-between lg:justify-start w-full pt-[10px] lg:pt-0 max-[540px]:gap-[15px] lg:gap-[30px]"
                >
                  <div className="max-[540px]:self-center flex items-center gap-[10px]">
                    <img src={item.icon} alt="" className="h-[20px]" />
                    <span className="font-inter paragraph text-white truncate">
                      {item.id === "whatsapp" && (
                        <span>{tContact("cel")} </span>
                      )}
                      {item.id === "tel-oficina" && (
                        <span>{tContact("office")} </span>
                      )}
                      {item.label}
                    </span>
                  </div>

                  {/* botón */}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      track(TRACK.home.contacto.contactMethodClick, {
                        item_id: item.id,
                      })
                    }
                    className="max-[540px]:self-center flex w-full max-w-[190px] items-center justify-center px-[16px] py-[11px] rounded-full boton font-semibold bg-cream text-blue"
                  >
                    {tContact(item.key)}
                  </a>
                </div>
              ))}
            </div>

            {/* form */}
            <div className="w-full max-w-[713px] h-fit lg:h-[682px]">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className={`flex flex-col h-full gap-[7px] reveal ${isFormVisible ? "is-visible" : ""}`}
              >
                {/* Nombre completo / Empresa */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] xl:gap-[17px]">
                  <div className="relative flex flex-col gap-[10px]">
                    <label className="font-inter font-bold paragraph text-white uppercase">
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
                        className={`${inputClass} ${errors.name ? "border-orange" : "border-white"}`}
                      />
                      <InputTooltipError message={errors.name?.message} />
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-[10px]">
                    <label className="font-inter font-bold paragraph text-whit uppercase">
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
                        className={`${inputClass} ${errors.company ? "border-orange" : "border-white"}`}
                      />
                      <InputTooltipError message={errors.company?.message} />
                    </div>
                  </div>
                </div>

                {/* Correo / Teléfono */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] xl:gap-[17px]">
                  <div className="relative flex flex-col gap-[10px]">
                    <label className="font-inter font-bold paragraph text-white uppercase">
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
                        className={`${inputClass} ${errors.email ? "border-orange" : "border-white"}`}
                      />
                      <InputTooltipError message={errors.email?.message} />
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-[10px]">
                    <label className="font-inter font-bold paragraph text-white uppercase">
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
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              "",
                            );
                          },
                        })}
                        type="tel"
                        inputMode="numeric"
                        className={`${inputClass} ${errors.phone ? "border-orange" : "border-white"}`}
                      />
                      <InputTooltipError message={errors.phone?.message} />
                    </div>
                  </div>
                </div>

                {/* Qué estás buscando */}
                <div className="relative flex flex-col gap-[10px]">
                  <label className="font-inter font-bold paragraph text-white uppercase">
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
                      className={`${searchingAndAreaClass} ${errors.searching ? "border-orange" : "border-white"}`}
                    />
                    <InputTooltipError message={errors.searching?.message} />
                  </div>
                </div>

                {/* Superficie aproximada */}
                <div className="relative flex flex-col gap-[10px]">
                  <label className="font-inter font-bold paragraph text-white uppercase">
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
                      className={`${searchingAndAreaClass} ${errors.area ? "border-orange" : "border-white"}`}
                    />
                    <InputTooltipError message={errors.area?.message} />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="relative flex flex-col gap-[10px]">
                  <label className="font-inter font-bold paragraph text-white uppercase">
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
                  className="sm:self-end lg:self-center lg:w-full boton font-medium px-[20px] pt-[12px] pb-[11px] rounded-[30px] text-cream bg-orange"
                >
                  {isSubmitting
                    ? tContact("form.submitting")
                    : tContact("form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
