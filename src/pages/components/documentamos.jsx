import banner from "../../assets/images/banner-certeza.jpg";

import infraIcon from "../../assets/icons/industria.svg";
import pinIcon from "../../assets/icons/pin.svg";
import camionIcon from "../../assets/icons/camion.svg";
import verificadoIcon from "../../assets/icons/verificado.svg";
import { useInView } from "../../hooks/useInView";
import EtapaCard from "../../components/etapa-card";

const etapasData = [
  {
    id: "infraestructura",
    icon: infraIcon,
    title: "Infraestructura del parque industrial",
    description: "Vialidades, servicios, drenaje pluvial, alumbrado y accesos.",
  },
  {
    id: "urbanizacion",
    icon: pinIcon,
    title: "Urbanización de macrolotes",
    description: "Preparación, nivelación y conexión de cada macrolote.",
  },
  {
    id: "construccion",
    icon: camionIcon,
    title: "Construcción de naves",
    description: "Del desplante a la terminación de cada edificio.",
  },
  {
    id: "entrega",
    icon: verificadoIcon,
    title: "Entrega de espacios terminados",
    description: "Adecuaciones y Tenant Improvements para cada operación.",
  },
];

export default function Documentamos() {
  const [headerRef, isHeaderVisible] = useInView();
  return (
    <>
      {/* Medio banner */}
      <div
        id="true-cienega"
        className="flex flex-col w-full min-h-[60svh] justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-black"
      >
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col w-full max-w-[1120px] gap-[30px] reveal ${isHeaderVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-bangla title text-center font-abhaya text-white uppercase">
            La certeza se construye.
            <br />
            <span className="text-center text-orange">
              Aquí la estamos construyendo.
            </span>
          </h2>

          <p className="paragraph text-center text-white/80 max-w-[1100px]">
            Documentamos el avance del parque etapa por etapa. Consulta las
            actualizaciones de obra, fotografías del sitio y los hitos del
            desarrollo, con la transparencia que una decisión de esta escala
            merece.
          </p>
        </div>

        {/* Grid de etapas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[15px] gap-y-[10px] sm:gap-[20px] w-full max-w-[1120px]">
          {etapasData.map((etapa, index) => (
            <EtapaCard key={etapa.id} etapa={etapa} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Imagen medio banner */}
      <div className="relative w-full h-[40svh] overflow-hidden">
        {/* overlay */}
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-black/30 to-black" />

        <img
          src={banner}
          alt="Imagen de instalaciones de True"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </>
  );
}
