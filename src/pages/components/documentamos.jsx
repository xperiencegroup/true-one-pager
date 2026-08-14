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
    <div className="flex flex-col w-full justify-center items-center px-[90px] py-[60px] gap-[30px] bg-black">
      {/* Header */}
      <div className="flex flex-col w-full max-w-[1120px] gap-[30px]">
        <h2 className="font-bangla text-[38px] font-abhaya leading-none text-white uppercase">
          La certeza se construye.
          <br />
          <span className="text-orange">Aquí la estamos construyendo.</span>
        </h2>

        <p className="text-[25px] leading-[120%] text-white/80 max-w-[1100px]">
          Documentamos el avance del parque etapa por etapa. <br /> Consulta las
          actualizaciones de obra, fotografías del sitio y los hitos del
          desarrollo, con la transparencia que una decisión de esta escala
          merece.
        </p>
      </div>

      {/* Grid de etapas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full max-w-[1120px]">
        {etapasData.map((etapa) => {
          return (
            <div
              key={etapa.id}
              className="flex flex-col justify-between items-center text-center gap-[15px] p-[30px] rounded-[40px] border border-cream/50 bg-cream/10"
            >
              <div className="flex items-center justify-center size-[92px] rounded-full bg-black">
                <img src={etapa.icon} alt="Ícono de la etapa" />
              </div>

              <h4 className="font-abhaya text-[32px] leading-none text-white uppercase max-w-[280px]">
                {etapa.title}
              </h4>

              <p className="text-[25px] leading-[120%] font-light text-white">
                {etapa.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
