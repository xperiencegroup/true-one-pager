import rentaBTS from "../../assets/icons/renta-bts.svg";
import rentaMacrolote from "../../assets/icons/renta-macrolote.svg";
import backgroundImage from "../../assets/images/operar-certeza-background.jpg";

import checkIcon from "../../assets/icons/check.svg";

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
    subtitle: "TERRENO INDUSTRIAL \n PARA DESARROLLAR",
    icon: rentaMacrolote,
    pro: "Compra tu terreno y construye a tu ritmo",
    button: "Ver disponibilidad de Macrolotes en venta",
  },
];

export default function Modelos() {
  return (
    <>
      {/* Diseñado para operar con certeza */}
      <div className="relative w-full px-[90px] py-[60px]">
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
          <h2 className="max-w-[380px] lg:max-w-[500px] title text-center font-abhaya uppercase">
            Diseñado para operar con certeza.
          </h2>

          <p className="max-w-[1110px] paragraph font-light text-center">
            Explora cada configuración en nuestra{" "}
            <b className="font-bold">plataforma interactiva:</b>
            <br />
            visualiza los macrolotes, recorre las naves, compara superficies y
            encuentra el espacio ideal para tu operación desde cualquier
            dispositivo.
          </p>

          <button className="boton px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium text-blue bg-cream">
            Ver Click and Xperience
          </button>
        </div>
      </div>

      {/* Elige como quieres crecer */}
      <div
        id="naves-macrolotes"
        className="flex flex-col justify-center items-center w-full py-[60px] px-[70px] lg:px-[20px] xl:px-[78px] gap-[33px] bg-brown"
      >
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1100px] h-full gap-[40px] lg:gap-[16px]">
          {/* Primera columna */}
          <div className="flex flex-col w-full h-full max-w-[380px] gap-[20px]">
            {/* title */}
            <h2 className="title max-lg:text-center font-abhaya uppercase">
              Elige cómo <br /> quieres crecer.
            </h2>

            <div className="w-full">
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

            <p className="max-lg:self-center max-w-[254px] max-lg:text-center subtitle font-abhaya uppercase text-cream-second">
              La decisión depende de tu operación.
            </p>
          </div>

          {/* Modelos */}
          <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center gap-[40px] lg:gap-[8px] xl:gap-[16px]">
            {modelos.map((modelo, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col w-full justify-center items-center max-lg:gap-[40px]"
                >
                  {/* cuadro */}
                  <div className="flex flex-col w-full max-lg:max-w-[680px] max-lg:h-[255px] lg:size-[341px] justify-start items-center p-[20px] gap-[15px] rounded-[20px] bg-cream/10 border border-cream">
                    {/* Titulo y subtitulo */}
                    <div className="flex flex-col items-center gap-[7px]">
                      <h3 className="subtitle text-center font-abhaya uppercase text-cream-second">
                        {modelo.title}
                      </h3>
                      <h3 className="max-w-[250px] text-center data font-light whitespace-pre-line text-cream-second">
                        {modelo.subtitle}
                      </h3>
                    </div>

                    {/* Image */}
                    <img src={modelo.icon} alt={`Ícono de ${modelo.title}`} />

                    {/* Ventaja */}
                    <div className="w-full h-full justify-center lg:justify-start items-center flex gap-[12px]">
                      <img
                        src={checkIcon}
                        alt="Ícono check"
                        className="size-[20px]"
                      />

                      <p className="lg:max-w-[245px] paragraph font-light text-cream">
                        {modelo.pro}
                      </p>
                    </div>
                  </div>

                  {/* botón de disponibilidad*/}
                  <button
                    className={`lg:hidden w-fit px-[20px] pt-[11px] pb-[12px] rounded-full boton font-semibold drop-shadow-md drop-shadow-black/25 ${modelo.id === "nave" ? "bg-orange text-cream" : "bg-cream text-blue"}`}
                  >
                    {modelo.button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="max-lg:hidden flex justify-center items-center gap-[30px] w-full">
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
