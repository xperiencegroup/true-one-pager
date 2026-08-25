import cuadroIcon from "../../assets/icons/cuadro.svg";
import almacenIcon from "../../assets/icons/almacen.svg";
import medidaIcon from "../../assets/icons/medida.svg";
import carreteraIcon from "../../assets/icons/carretera.svg";

// Background image
import bgImage from "../../assets/images/especificaciones-background.jpg";
import { useInView } from "../../hooks/useInView";
import EspecificacionCard from "../../components/especificacion-card";

const ESPECIFICACIONES = [
  {
    id: "hectareas",
    title: "de Parque\n Industrial\n Clase A",
    subtitle: "15 hectáreas",
    paragraph:
      "Infraestructura de Primer Nivel para operaciones que exigen más.",
    icon: cuadroIcon,
    alt: "cuadro de hectáreas",
  },
  {
    id: "naves",
    title: "Naves BTS",
    subtitle: "de 75,000\n - 750,000 ft²",
    paragraph:
      "Espacios construídos a la medida de tu operación, listos para crecer contiigo.",
    icon: almacenIcon,
    alt: "almacen",
  },
  {
    id: "macrolotes",
    title: "Macrolotes",
    subtitle: "de 10,000\n - 150,000 m²",
    paragraph:
      "Terrenos Industriales listos para desarrollar proyectos de gran escala.",
    icon: medidaIcon,
    alt: "mediciones",
  },
  {
    id: "carretera",
    title: "Frente directo a la",
    subtitle: "Autopista Monterrey-Nuevo Laredo\n (Carretera 85)",
    paragraph: "La arteria logística más importante del norte del país.",
    icon: carreteraIcon,
    alt: "carretera",
  },
];

export default function Especificaciones() {
  const [titleRef, titleVisible] = useInView();

  return (
    <div
      id="propuesta-de-valor"
      className="relative flex flex-col justify-center items-center w-full h-fit px-[30px] lg:px-0 py-[44px] gap-[26px] sm:gap-[40px] bg-brown/80"
    >
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

      <h2
        ref={titleRef}
        className={`max-sm:max-w-[260px] title text-center font-abhaya uppercase reveal ${titleVisible ? "is-visible" : ""}`}
      >
        Todo lo que tu operación <br /> necesita, en un solo lugar.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] sm:gap-[40px] xl:gap-[23px]">
        {ESPECIFICACIONES.map((especificacion, index) => {
          return (
            <EspecificacionCard especificacion={especificacion} index={index} />
          );
        })}
      </div>
    </div>
  );
}
