import rentaBTS from "../../assets/icons/renta-bts.svg";
import rentaMacrolote from "../../assets/icons/renta-macrolote.svg";
import backgroundImage from "../../assets/images/operar-certeza-background2.jpg";

import { usePopupStore } from "../../store/usePopupStore";
import { useInView } from "../../hooks/useInView";
import ModeloCard from "../../components/modelo-card";
import { Trans, useTranslation } from "react-i18next";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

const modelos = [
  { id: "nave", key: "optionA", icon: rentaBTS },
  { id: "macrolote", key: "optionB", icon: rentaMacrolote },
];

export default function Modelos() {
  const openPopup = usePopupStore((state) => state.openPopup);
  const [ref, isVisible] = useInView();
  const [leftColumnRef, isLeftColumnVisible] = useInView();

  const { t } = useTranslation("plataforma");
  const { t: tModel } = useTranslation("modelos");
  return (
    <>
      {/* Diseñado para operar con certeza */}
      <div
        ref={ref}
        className="relative w-full h-svh sm:h-[50svh] px-[44px] sm:px-[90px] py-[50px] sm:py-[60px]"
      >
        {/* image y overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* image */}
            <img
              src={backgroundImage}
              alt="Imagen de fondo"
              className="absolute w-full h-full object-cover object-[0%_28%]"
            />

            {/* overlay */}
            <div className="absolute w-full h-full bg-blue-overlay/80" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col w-full h-full justify-center items-center gap-[20px]">
          <h2
            className={`title text-center font-abhaya uppercase reveal ${isVisible ? "is-visible" : ""}`}
          >
            {t("title")}
          </h2>

          <p
            className={`max-w-[1110px] paragraph font-light text-center reveal ${isVisible ? "is-visible" : ""}`}
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
            onClick={() => {
              track(TRACK.home.popup.clickAndXperience.open, {
                source: "designed-for-certainty",
              });
              openPopup("click-and-xperience");
            }}
            className={`boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream reveal ${isVisible ? "is-visible" : ""}`}
          >
            {t("cta")}
          </button>
        </div>
      </div>

      {/* Elige como quieres crecer */}
      <div
        id="naves-macrolotes"
        className="flex flex-col justify-center items-center w-full min-h-[50svh] xl:h-[50svh] px-[44px] py-[50px] sm:py-[60px] sm:px-[70px] lg:px-[20px] xl:px-[78px] gap-[33px] bg-brown"
      >
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1100px] h-fit gap-[20px] lg:gap-[40px] lg:gap-[16px]">
          {/* Primera columna */}
          <div
            ref={leftColumnRef}
            className={`flex flex-col w-full lg:max-w-[265px] h-full gap-[10px] lg:gap-[20px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            {/* title */}
            <h2 className="title lg:max-w-[265px] max-lg:text-center font-abhaya uppercase">
              <Trans
                t={tModel}
                i18nKey="title"
                components={{ br: <br className="max-lg:hidden" /> }}
              />
            </h2>

            <div className="max-lg:self-center w-full max-w-[265px] lg:w-full">
              <div className="divider-white"></div>
            </div>

            {/* Descripción */}
            <div className="flex flex-col">
              <p className="paragraph max-lg:text-center font-light text-white">
                {tModel("line1")}
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                {tModel("line2")}
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                {tModel("line3")}
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                {tModel("line4")}
              </p>
            </div>

            <p className="max-lg:self-center lg:max-w-[254px] max-lg:text-center subtitle font-abhaya uppercase text-cream-second">
              {tModel("subtitle")}
            </p>
          </div>

          {/* Modelos */}
          <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-[40px] lg:gap-[20px] xl:gap-[24px]">
            {modelos.map((modelo, index) => {
              return (
                <ModeloCard
                  key={modelo.id}
                  modelo={modelo}
                  delay={index * 150}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
