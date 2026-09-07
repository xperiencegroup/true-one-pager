import banner from "../../assets/images/banner-certeza.jpg";

import infraIcon from "../../assets/icons/industria.svg";
import pinIcon from "../../assets/icons/pin.svg";
import camionIcon from "../../assets/icons/camion.svg";
import verificadoIcon from "../../assets/icons/verificado.svg";

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
  return (
    <>
      {/* Medio banner */}
      <div
        id="true-cienega"
        className="flex flex-col w-full min-h-[60svh] justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-black"
      >
        {/* Header */}
        <div className="flex flex-col w-full max-w-[1120px] gap-[30px]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full max-w-[1120px]">
          {etapasData.map((etapa) => {
            return (
              <div
                key={etapa.id}
                className="flex flex-col min-h-[238px] justify-between items-center text-center gap-[15px] px-[15px] py-[20px] rounded-[40px] border border-cream/50 bg-cream/10"
              >
                <div className="flex flex-1 items-center justify-center size-[50px] rounded-full bg-black">
                  <img
                    src={etapa.icon}
                    alt="Ícono de la etapa"
                    className="size-[24px]"
                  />
                </div>

                <h4 className="flex-1 paragraph-bold font-bold text-white uppercase lg:max-w-[280px]">
                  {etapa.title}
                </h4>

                <p className="flex-1 paragraph max-lg:text-center font-light text-white">
                  {etapa.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Imagen medio banner */}
      <div className="relative w-full h-[40svh]">
        {/* overlay */}
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-black/30 to-black" />

        <img
          src={banner}
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>
    </>
  );
}
