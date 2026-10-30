import rentaBTS from "../../assets/icons/renta-bts.svg";
import rentaMacrolote from "../../assets/icons/renta-macrolote.svg";
import backgroundImage from "../../assets/images/operar-certeza-background2.jpg";

import { useInView } from "../../hooks/useInView";
import ModeloCard from "../../components/modelo-card";
import { Trans, useTranslation } from "react-i18next";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";
import { CLICK_AND_XPERIENCE_URL } from "../../const/clickAndXperience";

const modelos = [
  { id: "nave", key: "optionA", icon: rentaBTS },
  { id: "macrolote", key: "optionB", icon: rentaMacrolote },
];

export default function Modelos() {
  const [ref, isVisible] = useInView();
  const [leftColumnRef, isLeftColumnVisible] = useInView();

  const { t } = useTranslation("plataforma");
  const { t: tModel } = useTranslation("modelos");
  const { t: tHero } = useTranslation("hero");

  const handleGoToPlatformClick = () => {
    // no más popups, va directo al C&X
    track(TRACK.home.popup.clickAndXperience.open, {
      source: "designed-for-certainty",
    });

    window.open(CLICK_AND_XPERIENCE_URL, "_blank", "noopener,noreferrer");
  };
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
            className={`headline text-center font-abhaya uppercase reveal ${isVisible ? "is-visible" : ""}`}
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
            onClick={handleGoToPlatformClick}
            className={`whitespace-nowrap boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream reveal ${isVisible ? "is-visible" : ""}`}
          >
            {t("cta")}
          </button>
        </div>
      </div>

      {/* Elige como quieres crecer */}
      <div
        id="buildings"
        className="flex flex-col justify-center items-center w-full min-h-[100svh] xl:h-[50svh] px-[20px] sm:px-[44px] py-[50px] sm:py-[60px] sm:px-[70px] lg:px-[20px] xl:px-[78px] gap-[33px] bg-brown"
      >
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1100px] h-fit gap-[20px] lg:gap-[40px] lg:gap-[16px]">
          {/* Primera columna */}
          <div
            ref={leftColumnRef}
            className={`flex flex-col w-full lg:max-w-[265px] h-full gap-[10px] lg:gap-[30px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            {/* title */}
            <h2 className="headline lg:max-w-[265px] max-lg:text-center font-abhaya uppercase">
              <Trans
                t={tModel}
                i18nKey="title"
                components={{ br: <br className="max-lg:hidden" /> }}
              />
            </h2>

            <p className="max-lg:self-center lg:max-w-[254px] max-lg:text-center heading font-akzidenz font-bold uppercase text-cream-second">
              {tModel("subtitle")}
            </p>

            <div className="max-lg:self-center w-full max-w-[265px] lg:w-full">
              <div className="divider-white"></div>
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-[4px]">
              <p className="paragraph max-lg:text-center font-light text-white">
                <Trans
                  t={tModel}
                  i18nKey="line1"
                  components={{ strong: <strong className="font-medium" /> }}
                />
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                <Trans
                  t={tModel}
                  i18nKey="line2"
                  components={{ strong: <strong className="font-medium" /> }}
                />
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                <Trans
                  t={tModel}
                  i18nKey="line3"
                  components={{ strong: <strong className="font-medium" /> }}
                />
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                <Trans
                  t={tModel}
                  i18nKey="line4"
                  components={{ strong: <strong className="font-medium" /> }}
                />
              </p>
            </div>
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

        {/* description and buttons */}
        <div className="w-full max-w-[1100px]">
          <p className="paragraph text-cream">{tModel("description")}</p>
        </div>

        {/* cta buttons */}
        <div className="w-full max-w-[1100px] flex w-full flex-wrap flex-row justify-start items-center pt-[5px] gap-[14px] xl:gap-[44px]">
          {/* Botones */}
          <a
            href="#naves"
            onClick={() => track(TRACK.home.eligenos.cta, { target: "naves" })}
            className="w-fit boton font-medium text-blue px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-cream"
          >
            <Trans
              i18nKey="cta.building"
              t={tHero}
              components={{
                br: <br className="sm:hidden" />,
              }}
            />
          </a>

          <a
            href="#macrolotes"
            onClick={() =>
              track(TRACK.home.eligenos.cta, { target: "macrolotes" })
            }
            className="w-fit max-w-[400px] boton font-medium text-cream px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-orange"
          >
            {tHero("cta.land")}
          </a>

          <a
            href="#"
            onClick={() =>
              track(TRACK.home.eligenos.cta, { target: "maqueta" })
            }
            className="w-fit max-w-[400px] boton font-medium text-blue px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-cream"
          >
            {tHero("cta.explore")}
          </a>
        </div>
      </div>
    </>
  );
}
