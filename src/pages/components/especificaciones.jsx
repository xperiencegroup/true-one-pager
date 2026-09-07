import { GalleryCarrousel } from "../../components/carousel/embla-carousel-autoplay";

import cuadroIcon from "../../assets/icons/cuadro.svg";
import almacenIcon from "../../assets/icons/almacen.svg";
import medidaIcon from "../../assets/icons/medida.svg";
import carreteraIcon from "../../assets/icons/carretera.svg";

// Background image
import bgImage from "../../assets/images/especificaciones-background.jpg";
import { useInView } from "../../hooks/useInView";
import EspecificacionCard from "../../components/especificacion-card";

// imagenes
import foto1 from "../../assets/images/carousel/foto1.jpg";
import foto6 from "../../assets/images/carousel/foto6.jpg";
import foto7 from "../../assets/images/carousel/foto7.jpg";
import foto8 from "../../assets/images/carousel/foto8.jpg";
import foto9 from "../../assets/images/carousel/foto9.jpg";

const ESPECIFICACIONES = [
  {
    id: "hectareas",
    title: (
      <>
        de Parque <br />
        Industrial <span className="whitespace-nowrap">Clase A</span>
      </>
    ),

    subtitle: "15 hectáreas",
    paragraph:
      "Infraestructura de Primer Nivel para operaciones que exigen más.",
    icon: cuadroIcon,
    alt: "cuadro de hectáreas",
  },
  {
    id: "naves",
    title: "Naves BTS",
    subtitle: "de 75,000 - 750,000 ft²",
    paragraph:
      "Espacios construídos a la medida de tu operación, listos para crecer contiigo.",
    icon: almacenIcon,
    alt: "almacen",
  },
  {
    id: "macrolotes",
    title: "Macrolotes",
    subtitle: "de 10,000 - 150,000 m²",
    paragraph:
      "Terrenos Industriales listos para desarrollar proyectos de gran escala.",
    icon: medidaIcon,
    alt: "mediciones",
  },
  {
    id: "carretera",
    title: "Frente directo a la",
    subtitle: "Autopista Mty-Nuevo Laredo\n (Carretera 85)",
    paragraph: "La arteria logística más importante del norte del país.",
    icon: carreteraIcon,
    alt: "carretera",
  },
];

const carouselImages = [foto1, foto6, foto7, foto8, foto9];

export default function Especificaciones() {
  const [titleRef, titleVisible] = useInView();

  return (
    <section
      id="propuesta-de-valor"
      className="flex flex-col h-fit min-[1170px]:h-svh"
    >
      <div className="relative flex min-h-svh min-[1170px]:flex-1 flex-col justify-center items-center w-full px-[30px] lg:px-0 py-[44px] gap-[26px] sm:gap-[20px] bg-brown/80">
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
          Todo lo que tu operación necesita, en un solo lugar.
        </h2>

        <div className="grid grid-cols-2 min-[1170px]:grid-cols-4 gap-[15px] min-[680px]:gap-[20px] xl:gap-[23px]">
          {ESPECIFICACIONES.map((especificacion, index) => {
            return (
              <EspecificacionCard
                key={especificacion.id}
                especificacion={especificacion}
                index={index}
              />
            );
          })}
        </div>
      </div>

      <div className="relative h-svh md:h-[50svh] min-[1170px]:flex-1 shrink-0 w-full justify-center items-center overflow-hidden">
        <GalleryCarrousel images={carouselImages} />
      </div>
    </section>
  );
}
