import banner from "../../assets/images/cargayandenes.jpg";

import infraIcon from "../../assets/icons/industria.svg";
import pinIcon from "../../assets/icons/pin.svg";
import camionIcon from "../../assets/icons/camion.svg";
import verificadoIcon from "../../assets/icons/verificado.svg";
import { useInView } from "../../hooks/useInView";
import EtapaCard from "../../components/etapa-card";
import { useTranslation } from "react-i18next";

const etapasData = [
  { id: "infraestructura", key: "phase1", icon: infraIcon },
  { id: "urbanizacion", key: "phase2", icon: pinIcon },
  { id: "construccion", key: "phase3", icon: camionIcon },
  { id: "entrega", key: "phase4", icon: verificadoIcon },
];
export default function Documentamos() {
  const [headerRef, isHeaderVisible] = useInView();
  const { t } = useTranslation("documentamos");
  return (
    <>
      {/* Medio banner */}
      <div
        id="true-cienega"
        className="flex flex-col w-full min-h-[100svh] justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-black"
      >
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col w-full max-w-[1120px] gap-[30px] reveal ${isHeaderVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-bangla headline text-center font-abhaya text-white uppercase">
            {t("progress.title1")}
            <br />
            <span className="text-center">{t("progress.title2")}</span>
          </h2>

          <p className="paragraph text-center text-white/80 max-w-[1100px]">
            {t("progress.description")}
          </p>
        </div>

        {/* Grid de etapas */}
        <div className="grid grid-cols-[repeat(2,minmax(0,300px))] xl:grid-cols-4 justify-center gap-x-[15px] gap-y-[15px] lg:gap-y-[10px] xl:gap-[20px] w-full max-w-[1120px]">
          {etapasData.map((etapa, index) => (
            <EtapaCard key={etapa.id} etapa={etapa} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Imagen medio banner */}
      <div className="relative w-full h-[40svh] overflow-hidden">
        <img
          src={banner}
          alt="Imagen de instalaciones de True"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </>
  );
}
