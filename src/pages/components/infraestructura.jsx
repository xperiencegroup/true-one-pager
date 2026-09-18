import infraBanner from "../../assets/images/infra-banner.jpg";
import mapaInfra from "../../assets/images/mapa-infraestructura.jpg";
import mapaInfraVertical from "../../assets/images/mapa-infraestructura-vertical.jpg";
import cuadroNaranjaIcon from "../../assets/icons/cuadro-naranja.svg";
import almacenNaranjaIcon from "../../assets/icons/almacen-naranja.svg";

// icons
import electricidad from "../../assets/icons/electricidad.svg";
import agua from "../../assets/icons/agua.svg";
import fibra from "../../assets/icons/fibra.svg";
import drenaje from "../../assets/icons/drenaje.svg";
import { useInView } from "../../hooks/useInView";
import InfraestructuraItem from "../../components/infraestructura-item";
import { useTranslation } from "react-i18next";

const infraestructuraData = [
  { id: "electrico", key: "spec1", icon: electricidad },
  { id: "agua", key: "spec2", icon: agua },
  { id: "gas-fibra", key: "spec3", icon: fibra },
  { id: "drenaje", key: "spec4", icon: drenaje },
];

const qualityItems = ["item1", "item2", "item3", "item4"];

export default function Infraestructura() {
  const [leftColumnRef, isLeftColumnVisible] = useInView();
  const [mapRef, isMapVisible] = useInView();

  const [cuadroIzqRef, isCuadroIzqVisible] = useInView();
  const [cuadroDerRef, isCuadroDerVisible] = useInView();

  const { t } = useTranslation("infra");

  return (
    <>
      {/* Content */}
      <div
        id="ubicacion"
        className="flex flex-col w-full min-h-svh justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-blue-overlay"
      >
        <div className="flex flex-1 flex-col xl:flex-row w-full max-w-[1280px] justify-center gap-[30px]">
          {/* Columnda izquierda */}
          <div
            ref={leftColumnRef}
            className={`w-full max-w-[660px] flex flex-col gap-[20px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            <h2 className="title font-abhaya leading-none uppercase">
              {t("title1")} <br />{" "}
              <span className="text-orange">
                {t("title2")} <br /> {t("title3")}
              </span>
            </h2>

            {/* divider */}
            <div className="w-full max-w-[568px]">
              <div className="divider-orange-full" />
            </div>

            <p className="paragraph font-light leading-[120%]">
              {t("p1")}
              <br />
              <br />
              {t("p2")}
              <br />
              <br />
              {t("p3")}
            </p>

            {/* Datos relevantes */}
            <div className="flex flex-col gap-[20px]">
              {infraestructuraData.map((item, index) => (
                <InfraestructuraItem
                  key={item.id}
                  item={item}
                  delay={index * 120}
                />
              ))}
            </div>
          </div>
          {/* Columnda derecha */}
          <a
            ref={mapRef}
            href="https://www.google.com/maps/search/25.875744,+-100.226065?entry=tts&g_ep=EgoyMDI2MDcxMi4wIPu8ASoASAFQAw%3D%3D&skid=1999d13c-392c-4506-b789-b475f6c311d5"
            target="_blank"
            rel="noopener noreferrer"
            className={`self-center flex shrink-0 w-full h-[240px] sm:h-[430px] xl:w-[410px] xl:h-[715px] justify-center items-center rounded-[31px] bg-cream/15 border-solid border-[1px] p-[13px] border-cream/50 reveal-right ${isMapVisible ? "is-visible" : ""}`}
          >
            <div className="relative w-full h-full bg-blue rounded-[18px] overflow-hidden">
              <img
                src={mapaInfra}
                alt="Imagen ubicación"
                className="hidden xl:block absolute w-full h-full object-cover"
              />
              <img
                src={mapaInfraVertical}
                alt="Imagen ubicación"
                className="block xl:hidden absolute w-full h-full object-cover object-[50%_90%]"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Flexibilidad y calidad */}
      <div className="relative flex flex-col items-center w-full  min-h-svh bg-blue-overlay">
        <div className="flex flex-1 w-full max-w-[1280px] px-[44px] sm:px-[60px]">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-[22px]">
            {/* cuadro izquierdo */}
            <div
              ref={cuadroIzqRef}
              className={`flex flex-col w-full lg:w-[539px] lg:min-h-[442px] xl:h-[410px] px-[20px] py-[30px] sm:p-[30px] gap-[20px] rounded-[20px] border-solid border-[1px] border-cream bg-cream/10 reveal-scale ${isCuadroIzqVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                <img src={cuadroNaranjaIcon} alt="" className="size-[38px]" />
                <h3 className="subtitle max-sm:text-center font-abhaya text-orange uppercase">
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

              <p className="paragraph font-light leading-[110%]">
                {t("flex.p1")}
                <br />
                <br />
                {t("flex.p2")}
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
              className={`flex flex-col lg:w-[539px] lg:min-h-[442px] xl:h-[410px] px-[20px] py-[30px] sm:p-[30px] gap-[20px] rounded-[20px] border-solid border-[1px] border-cream bg-cream/10 reveal-scale ${isCuadroDerVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                <img src={almacenNaranjaIcon} alt="" className="size-[38px]" />
                <h3 className="subtitle font-abhaya text-orange uppercase">
                  {t("quality.kicker")}
                </h3>
              </div>
              {/* Linea decoration */}
              <div className="w-full max-w-[332px]">
                <div className="divider-orange-full" />
              </div>

              <h4 className="paragraph max-sm:text-center font-bold leading-[120%] text-cream">
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
        <div className="relative flex h-[50svh] w-full bg-red-500">
          {/* linear gradient */}
          <div className="absolute z-10 w-full h-full inset-0 bg-linear-to-t from-blue-overlay/0 to-blue-overlay" />
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
