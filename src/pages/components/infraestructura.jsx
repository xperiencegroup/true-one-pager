import infraBanner from "../../assets/images/infra-banner.jpg";

// icons
import electricidad from "../../assets/icons/electricidad.svg";
import agua from "../../assets/icons/agua.svg";
import fibra from "../../assets/icons/fibra.svg";
import drenaje from "../../assets/icons/drenaje.svg";
import { useInView } from "../../hooks/useInView";
import InfraestructuraItem from "../../components/infraestructura-item";
import { useTranslation } from "react-i18next";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

import bannerImage from "../../assets/images/infra-background.jpg";

const infraestructuraData = [
  { id: "electrico", key: "spec1", icon: electricidad },
  { id: "gas-fibra", key: "spec3", icon: fibra },
  { id: "agua", key: "spec2", icon: agua },
  { id: "drenaje", key: "spec4", icon: drenaje },
];

const qualityItems = ["item1", "item2", "item3", "item4", "item5", "item6"];

export default function Infraestructura() {
  const [leftColumnRef, isLeftColumnVisible] = useInView();
  const [cuadroIzqRef, isCuadroIzqVisible] = useInView();
  const [cuadroDerRef, isCuadroDerVisible] = useInView();

  const { t } = useTranslation("infra");

  return (
    <>
      {/* Content */}
      <div
        id="infraestructure"
        className="flex flex-col w-full min-h-svh justify-center items-center px-[20px] sm:px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-blue-overlay"
      >
        <div className="flex flex-1 flex-col w-full max-w-[1100px] justify-start pt-[50px] pb-[30px] sm:pt-[60px] gap-[30px]">
          {/* texts */}
          <div
            ref={leftColumnRef}
            className={`w-full max-w-[660px] flex flex-col gap-[20px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            <h2 className="headline font-abhaya leading-none uppercase">
              <span className="text-white">
                {t("title2")} <br /> {t("title3")}
              </span>
            </h2>

            {/* divider */}
            <div className="w-full max-w-[568px]">
              <div className="divider-orange-full" />
            </div>

            <p className="paragraph font-light leading-[120%]">
              <span className="font-medium">{t("p0")}</span>
              <br />
              <br />
              {t("p1")}
              <br />
              <br />
              {t("p2")}
              <br />
              <br />
              {t("p3")}
            </p>
          </div>

          {/* Datos relevantes */}
          <div className="w-full grid grid-cols-1 min-[380px]:grid-cols-2 gap-[20px]">
            {infraestructuraData.map((item, index) => (
              <InfraestructuraItem
                key={item.id}
                item={item}
                delay={index * 120}
              />
            ))}
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="relative w-full min-h-[50svh]">
        <img
          src={bannerImage}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Flexibilidad y calidad */}
      <div className="relative flex flex-col items-center w-full bg-blue-overlay">
        {/* cuadros */}
        <div className="flex flex-1 w-full max-w-[1280px] min-h-svh justify-center items-center py-[20px] px-[20px] sm:px-[44px] md:px-[60px]">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-[22px]">
            {/* cuadro izquierdo */}
            <div
              ref={cuadroIzqRef}
              className={`flex flex-col w-full lg:w-[539px] lg:min-h-[500px] xl:h-[589px] px-[20px] py-[30px] sm:p-[30px] gap-[20px] rounded-[20px] border-solid border-[1px] border-cream bg-cream/10 reveal-scale ${isCuadroIzqVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                <h3 className="heading max-sm:text-center font-abhaya text-orange uppercase">
                  {t("flex.kicker")}
                </h3>
              </div>
              {/* Linea decoration */}
              <div className="w-full max-w-[332px]">
                <div className="divider-orange-full" />
              </div>

              <h4 className="paragraph font-bold max-sm:text-center leading-[120%] text-cream">
                {t("flex.title")}
              </h4>

              <p className="paragraph font-light leading-[110%] whitespace-pre-line">
                {t("flex.p1")}
                <br />
                <br />
                {t("flex.p2")}
                <br />
                <br />
                {t("flex.p3")}
                <br />
                <br />
                <span className="font-bold">{t("flex.p4")}</span>
              </p>
            </div>

            {/* cuadro derecho */}
            <div
              ref={cuadroDerRef}
              style={{ transitionDelay: "150ms" }}
              className={`flex flex-col lg:w-[539px] lg:min-h-[500px] xl:h-[589px] px-[20px] py-[30px] sm:p-[30px] gap-[20px] rounded-[20px] border-solid border-[1px] border-cream bg-cream/10 reveal-scale ${isCuadroDerVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                <h3 className="heading font-abhaya text-orange uppercase">
                  {t("quality.kicker")}
                </h3>
              </div>
              {/* Linea decoration */}
              <div className="w-full max-w-[332px]">
                <div className="divider-orange-full" />
              </div>

              <h4 className="paragraph max-sm:text-center font-bold leading-[120%] text-cream whitespace-pre-line">
                {t("quality.title")}
              </h4>

              <p className="paragraph font-light leading-[110%]">
                {t("quality.lead")} <br />
              </p>
              <ul className="pl-8 paragraph font-light leading-[110%] list-disc">
                {qualityItems.map((item) => (
                  <li key={item}>{t(`quality.${item}`)}</li>
                ))}
              </ul>

              <p className="paragraph font-light leading-[110%]">
                {t("quality.p")}
              </p>
            </div>
          </div>
        </div>

        {/* imagen */}
        <div className="relative flex h-[50svh] w-full">
          <img
            src={infraBanner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
