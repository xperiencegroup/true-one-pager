import { useTranslation } from "react-i18next";
import { GalleryCarrousel } from "../../components/carousel/embla-carousel-autoplay";

import cuadroIcon from "../../assets/icons/cuadro.svg";
import almacenIcon from "../../assets/icons/almacen.svg";
import medidaIcon from "../../assets/icons/medida.svg";
import carreteraIcon from "../../assets/icons/carretera.svg";

// Background image
import bgImage from "../../assets/images/especificaciones-background.jpg";
import { useInView } from "../../hooks/useInView";
import EspecificacionCard from "../../components/especificacion-card";

// Imagenes horizontales
import fh1 from "../../assets/images/carousel/v2/still-1.png";
import fh2 from "../../assets/images/carousel/v2/still-2.png";
import fh3 from "../../assets/images/carousel/v2/still-3.png";
import fh4 from "../../assets/images/carousel/v2/still-4.png";
import fh5 from "../../assets/images/carousel/v2/still-5.png";
import fh6 from "../../assets/images/carousel/v2/still-6.png";

// Imagenes verticales
import fv1 from "../../assets/images/carousel/v2/still-1-v.png";
import fv2 from "../../assets/images/carousel/v2/still-2-v.png";
import fv3 from "../../assets/images/carousel/v2/still-3-v.png";
import fv4 from "../../assets/images/carousel/v2/still-4-v.png";
import fv5 from "../../assets/images/carousel/v2/still-5-v.png";
import fv6 from "../../assets/images/carousel/v2/still-6-v.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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

const carouselHorizontalImages = [fh1, fh2, fh3, fh4, fh5, fh6];
const carouselVerticalImages = [fv1, fv2, fv3, fv4, fv5, fv6];

export default function Especificaciones() {
  const [titleRef, titleVisible] = useInView();
  const { t } = useTranslation("especificaciones");

  const isSmUp = useMediaQuery("(min-width: 640px)");
  const images = isSmUp ? carouselHorizontalImages : carouselVerticalImages;

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
        <GalleryCarrousel images={images} />
      </div>
    </section>
  );
}
