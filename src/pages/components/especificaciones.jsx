import cuadroIcon from "../../assets/icons/cuadro.svg";
import almacenIcon from "../../assets/icons/almacen.svg";
import medidaIcon from "../../assets/icons/medida.svg";
import carreteraIcon from "../../assets/icons/carretera.svg";

// Background image
import bgImage from "../../assets/images/especificaciones-background.jpg";

const ESPECIFICACIONES = [
  {
    id: "hectareas",
    title: "15 hectáreas",
    subtitle: "de Parque Industrial Clase A",
    paragraph:
      "Infraestructura de Primer Nivel para operaciones que exigen más.",
    icon: cuadroIcon,
    alt: "cuadro de hectáreas",
  },
  {
    id: "naves",
    title: "6,970-69,680 m²",
    subtitle: "rango de Naves BTS",
    paragraph:
      "Espacios construídos a la medida de tu operación, listos para crecer contigo.",
    icon: almacenIcon,
    alt: "almacen",
  },
  {
    id: "macrolotes",
    title: "10,000 - 150,000 m2",
    subtitle: "rango de Macrolotes",
    paragraph:
      "Terrenos Industriales listos para desarrollar proyectos de gran escala.",
    icon: medidaIcon,
    alt: "mediciones",
  },
  {
    id: "carretera",
    title: "Carretera 85",
    subtitle: "frente directo, Corredor Monterrey -Laredo",
    paragraph:
      "Infraestructura de Primer Nivel para operaciones que exigen más.",
    icon: carreteraIcon,
    alt: "carretera",
  },
];

export default function Especificaciones() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[524px] py-[44px] gap-[40px] bg-brown/80">
      {/* Imagen de fondo */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={bgImage}
            alt="Imagen de fondo"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="text-[30px] font-abhaya">
        Todo lo que tu operación necesita, en un solo lugar.
      </h2>

      <div className="flex justify-between gap-[23px]">
        {ESPECIFICACIONES.map((especificacion, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-[273px] pt-[30px] gap-[27px] bg-dark-brown border-2 border-orange rounded-[20px]"
            >
              <div className="flex-1 flex flex-col justify-center items-center gap-[16px]">
                {/* Icon */}
                <div className="flex size-[92px] justify-center items-center bg-orange rounded-full">
                  <img
                    src={especificacion.icon}
                    alt={`Ícono de ${especificacion.alt}`}
                    className="size-[52px]"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col w-full text-center gap-[7px]">
                  <h3 className="text-[26px] font-bold tracking-tighter leading-[110%]">
                    {especificacion.title}
                  </h3>
                  <p className="text-[21px] px-[34px] leading-none font-abhaya">
                    {especificacion.subtitle}
                  </p>
                </div>
              </div>
              <p className="shrink-0 h-[90px] text-[15px] text-center px-[16px]">
                {especificacion.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
