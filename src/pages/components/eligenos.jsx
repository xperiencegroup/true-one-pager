import bgImage from "../../assets/images/eligenos-background.jpg";

import edificioIcon from "../../assets/icons/almacen-naranja.svg";
import aguaIcon from "../../assets/icons/cuadro-naranja.svg";
import soporteIcon from "../../assets/icons/soporte.svg";
import { useInView } from "../../hooks/useInView";
import { Trans, useTranslation } from "react-i18next";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

const RAZONES = [
  { key: "item1", icon: edificioIcon },
  { key: "item2", icon: aguaIcon },
  { key: "item3", icon: soporteIcon },
];

export default function Eligenos() {
  const [leftPanel, leftPanelIsVisible] = useInView();
  const [rightPanel, rightPanelIsVisible] = useInView();
  const { t } = useTranslation("eligenos");
  const { t: tHero } = useTranslation("hero");

  return (
    <>
      <div className="relative flex justify-center w-full min-h-svh">
        {/* Image */}
        <div className="absolute -z-10 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src={bgImage}
              alt="Imagen de fondo"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute z-0 w-full h-full bg-blue-overlay/89" />

        {/*  Content */}
        <div className="relative flex flex-col w-full items-center justify-center max-w-[1240px] h-full py-[50px] sm:py-[60px] px-[44px] sm:px-[70px] gap-[8px] sm:gap-[20px] lg:gap-[20px] xl:gap-[20px]">
          {/* Left panel */}
          <div
            ref={leftPanel}
            className={`w-full flex flex-col justify-start gap-[8px] sm:gap-[20px] reveal-left ${leftPanelIsVisible ? "is-visible" : ""}`}
          >
            <h3 className="title font-abhaya uppercase">
              {t("headline1")}
              <br />
              {t("headline2")}
            </h3>

            <h4 className="subtitle text-orange font-abhaya uppercase">
              {t("subhead1")} <br /> {t("subhead2")}
            </h4>

            {/* Linea decorativa */}
            <div>
              <div className="divider-orange" />
            </div>

            <p className="paragraph">
              {t("p1")}
              <br />
              <br />
              {t("p2")}
              <br />
              <br />
              {t("p3")}
            </p>
          </div>

          {/* Right panel */}
          <div
            ref={rightPanel}
            className={`w-full flex flex-col gap-[8px] sm:gap-[20px] reveal-right ${rightPanelIsVisible ? "is-visible" : ""}`}
          >
            {/* Title */}
            <div className="flex flex-col gap-[14px]">
              <h3 className="w-full subtitle font-abhaya uppercase">
                {t("flex.title")}
              </h3>

              <p className="font-abhaya subtitle uppercase text-white">
                {t("flex.description1")}
                <br />
                {t("flex.description2")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-[10px] sm:gap-[30px]">
              {RAZONES.map((razon, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row sm:flex-col w-full max-w-[346px] h-fit sm:h-[152px] sm:justify-center items-center p-[20px] gap-[15px] border-2 rounded-[17px] border-orange bg-white/10 backdrop-blur-sm"
                  >
                    <img
                      src={razon.icon}
                      alt="Ícono correspondiente"
                      className="h-[25px] sm:h-[40px]"
                    />
                    <h4 className="max-w-[318px] paragraph-bold sm:text-center font-bold">
                      {t(`flex.${razon.key}`)}
                    </h4>
                  </div>
                );
              })}
            </div>

            <div className="flex w-full flex-col lg:flex-row justify-between items-center pt-[5px] gap-[20px]">
              {/* Botones */}
              <a
                href="#naves"
                onClick={() =>
                  track(TRACK.home.eligenos.cta, { target: "naves" })
                }
                className="w-full max-w-[400px] boton font-medium text-cream px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-orange"
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
                className="w-full max-w-[400px] boton font-medium text-blue px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-cream"
              >
                {tHero("cta.land")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
