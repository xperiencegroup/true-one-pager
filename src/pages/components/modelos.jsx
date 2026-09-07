import rentaBTS from "../../assets/icons/renta-bts.svg";
import rentaMacrolote from "../../assets/icons/renta-macrolote.svg";
import backgroundImage from "../../assets/images/operar-certeza-background2.jpg";

import { useInView } from "../../hooks/useInView";
import ModeloCard from "../../components/modelo-card";

const modelos = [
  {
    id: "nave",
    title: "Compra o renta",
    subtitle: "NAVE INDUSTRIAL A LA MEDIDA",
    icon: rentaBTS,
    pro: "Compra o Renta tu Nave BTS construida a la medida",
    button: "Ver disponibilidad de Naves BTS en renta o venta",
  },
  {
    id: "macrolote",
    title: "Compra macrolote",
    subtitle: "TERRENO INDUSTRIAL PARA DESARROLLAR",
    icon: rentaMacrolote,
    pro: "Compra tu terreno y construye a tu ritmo",
    button: "Ver disponibilidad de Macrolotes en venta",
  },
];

export default function Modelos() {
  const [ref, isVisible] = useInView();
  const [buttonsDesktopRef, isButtonsDesktopVisible] = useInView({
    threshold: 0.3,
  });

  const [leftColumnRef, isLeftColumnVisible] = useInView();
  return (
    <>
      {/* Diseñado para operar con certeza */}
      <div
        ref={ref}
        className="relative w-full h-svh sm:h-[50svh] px-[44px] sm:px-[90px] py-[50px] sm:py-[60px]"
      >
        {/* image y overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* image */}
            <img
              src={backgroundImage}
              alt="Imagen de fondo"
              className="absolute w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute w-full h-full bg-blue-overlay/80" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col w-full h-full justify-center items-center gap-[20px]">
          <h2
            className={`title text-center font-abhaya uppercase reveal ${isVisible ? "is-visible" : ""}`}
          >
            Diseñado para operar con certeza.
          </h2>

          <p
            className={`max-w-[1110px] paragraph font-light text-center reveal ${isVisible ? "is-visible" : ""}`}
          >
            Explora cada configuración en nuestra{" "}
            <b className="font-bold">plataforma interactiva:</b>
            <br />
            visualiza los macrolotes, recorre las naves, compara superficies y
            encuentra el espacio ideal para tu operación desde cualquier
            dispositivo.
          </p>

          <button
            className={`boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream reveal ${isVisible ? "is-visible" : ""}`}
          >
            Ver Plataforma Interactiva
          </button>
        </div>
      </div>

      {/* Elige como quieres crecer */}
      <div
        id="naves-macrolotes"
        className="flex flex-col justify-center items-center w-full min-h-svh xl:h-[50svh] px-[44px] py-[50px] sm:py-[60px] sm:px-[70px] lg:px-[20px] xl:px-[78px] gap-[33px] bg-brown"
      >
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1100px] h-fit gap-[20px] lg:gap-[40px] lg:gap-[16px]">
          {/* Primera columna */}
          <div
            ref={leftColumnRef}
            className={`flex flex-col w-full lg:max-w-[265px] h-full gap-[10px] lg:gap-[20px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            {/* title */}
            <h2 className="title lg:max-w-[265px] max-lg:text-center font-abhaya uppercase">
              Elige cómo <br className="max-lg:hidden" /> quieres crecer.
            </h2>

            <div className="max-lg:self-center w-full max-w-[265px] lg:w-full">
              <div className="divider-white"></div>
            </div>

            {/* Descripción */}
            <div className="flex flex-col">
              <p className="paragraph max-lg:text-center font-light text-white">
                La misma ubicación,
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                la misma infraestructura,
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                la misma certeza.
              </p>
              <p className="paragraph max-lg:text-center font-light text-white">
                Dos modelos.
              </p>
            </div>

            <p className="max-lg:self-center lg:max-w-[254px] max-lg:text-center subtitle font-abhaya uppercase text-cream-second">
              La decisión depende de tu operación.
            </p>
          </div>

          {/* Modelos */}
          <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-[40px] lg:gap-[8px] xl:gap-[16px]">
            {modelos.map((modelo, index) => {
              return (
                <ModeloCard
                  key={modelo.id}
                  modelo={modelo}
                  delay={index * 150}
                />
              );
            })}
          </div>
        </div>

        {/* Botones inferiores */}
        <div
          ref={buttonsDesktopRef}
          className={`hidden flex justify-center items-center gap-[30px] w-full reveal-fade ${isButtonsDesktopVisible ? "is-visible" : ""}`}
        >
          {/* Naves */}
          <button className="w-fit px-[20px] pt-[11px] pb-[12px] rounded-full boton font-semibold bg-orange text-cream drop-shadow-md drop-shadow-black/25">
            Ver disponibilidad de Naves BTS en renta o venta
          </button>

          {/* Macrolotes */}
          <button className="w-fit px-[20px] pt-[11px] pb-[12px] rounded-full boton font-semibold bg-cream text-blue drop-shadow-md drop-shadow-black/25">
            Ver disponibilidad de Macrolotes en venta
          </button>
        </div>
      </div>
    </>
  );
}
