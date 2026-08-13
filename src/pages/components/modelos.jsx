import rentaBTS from "../../assets/icons/renta-bts.svg";
import rentaMacrolote from "../../assets/icons/renta-macrolote.svg";
import backgroundImage from "../../assets/images/operar-certeza-background.jpg";

import checkIcon from "../../assets/icons/check.svg";

const modelos = [
  {
    title: "Compra o renta",
    subtitle: "NAVE INDUSTRIAL A LA MEDIDA",
    icon: rentaBTS,
    pro: "Compra o Renta tu Nave BTS construida a la medida",
  },
  {
    title: "Compra macrolote",
    subtitle: "TERRENO INDUSTRIAL \n PARA DESARROLLAR",
    icon: rentaMacrolote,
    pro: "Compra tu terreno y construye a tu ritmo",
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
          <h2 className="max-w-[500px] text-[48px] text-center leading-none font-abhaya uppercase">
            Diseñado para operar con certeza.
          </h2>

          <p className="text-[25px] font-light text-center leading-[120%]">
            Explora cada configuración en nuestra{" "}
            <b className="font-bold">plataforma interactiva:</b>
            <br />
            visualiza los macrolotes, recorre las naves, compara superficies y
            encuentra el espacio ideal para tu operación desde cualquier
            dispositivo.
          </p>

          <button className="text-[16px] px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-medium leading-none text-cream bg-orange">
            Ver Click and Xperience
          </button>
        </div>
      </div>

      {/* Elige como quieres crecer */}
      <div className="flex flex-col justify-center items-center w-full py-[60px] px-[78px] gap-[33px] bg-brown">
        <div className="flex w-full max-w-[1100px] h-full gap-[56px]">
          {/* Primera columna */}
          <div className="flex flex-col w-full h-full max-w-[330px] gap-[20px]">
            {/* title */}
            <h2 className="text-[36px] font-abhaya leading-none uppercase">
              Elige cómo <br /> quieres crecer.
            </h2>

            <div className="w-full">
              <div className="divider-white"></div>
            </div>

            {/* Descripción */}
            <div className="flex flex-col">
              <p className="text-[20px] font-light leading-[150%] text-white">
                La misma ubicación,
              </p>
              <p className="text-[20px] font-light leading-[150%] text-white">
                la misma infraestructura,
              </p>
              <p className="text-[20px] font-light leading-[150%] text-white">
                la misma certeza.
              </p>
              <p className="text-[20px] font-light leading-[150%] text-white">
                Dos modelos.
              </p>
            </div>

            <p className="max-w-[254px] text-[32px] font-abhaya leading-none uppercase text-cream-second">
              La decisión depende de tu operación.
            </p>
          </div>

          {/* Modelos */}
          <div className="flex w-full h-full justify-center gap-[16px]">
            {modelos.map((modelo, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col w-[341px] h-[341px] justify-start items-center p-[20px] gap-[15px] rounded-[20px] bg-cream/10 border border-cream"
                >
                  {/* Titulo y subtitulo */}
                  <div className="flex flex-col items-center gap-[7px]">
                    <h3 className="text-[32px] text-center font-abhaya leading-none uppercase text-cream-second">
                      {modelo.title}
                    </h3>
                    <h3 className="max-w-[250px] text-center text-[18px] font-light whitespace-pre-line leading-[120%] text-cream-second">
                      {modelo.subtitle}
                    </h3>
                  </div>

                  {/* Image */}
                  <img src={modelo.icon} alt={`Ícono de ${modelo.title}`} />

                  {/* Ventaja */}
                  <div className="w-full h-full justify-start items-center flex gap-[12px]">
                    <img
                      src={checkIcon}
                      alt="Ícono check"
                      className="size-[20px]"
                    />

                    <p className="max-w-[245px] text-[25px] font-light text-cream leading-[120%]">
                      {modelo.pro}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="flex justify-center items-center gap-[30px] w-full">
          {/* Naves */}
          <button className="w-fit px-[20px] pt-[11px] pb-[12px] rounded-full text-[20px] font-semibold leading-none bg-orange text-cream drop-shadow-md drop-shadow-black/25">
            Ver disponibilidad de Naves BTS en renta o venta
          </button>

          {/* Macrolotes */}
          <button className="w-fit px-[20px] pt-[11px] pb-[12px] rounded-full text-[20px] font-semibold leading-none bg-cream text-blue drop-shadow-md drop-shadow-black/25">
            Ver disponibilidad de Macrolotes en venta
          </button>
        </div>
      </div>
    </>
  );
}
