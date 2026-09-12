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
import { useTranslation } from "react-i18next";

const ESPECIFICACIONES = [
  {
    id: "hectareas",
    key: "card1",
    icon: cuadroIcon,
  },
  {
    id: "naves",
    key: "card2",
    icon: almacenIcon,
  },
  {
    id: "macrolotes",
    key: "card3",
    icon: medidaIcon,
  },
  {
    id: "carretera",
    key: "card4",
    icon: carreteraIcon,
  },
];

const carouselImages = [foto1, foto6, foto7, foto8, foto9];

export default function Especificaciones() {
  const [titleRef, titleVisible] = useInView();
  const { t } = useTranslation("especificaciones");

  return (
    <section id="propuesta-de-valor" className="flex flex-col h-fit">
      <div className="relative flex min-h-[50svh] flex-col justify-center items-center w-full px-[30px] lg:px-0 py-[44px] gap-[26px] sm:gap-[20px] bg-brown/80">
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
          {t("title")}
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

      <div className="relative h-svh sm:h-[50svh] shrink-0 w-full justify-center items-center overflow-hidden">
        <GalleryCarrousel images={carouselImages} />
      </div>
    </section>
  );
}
