import backgroundImage from "../../assets/images/hero-background.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";
import trueCream from "../../assets/logos/true-cream.svg";

const buttons = [
  {
    id: "propuesta-de-valor",
    label: "Propuesta de Valor",
  },
  {
    id: "naves-macrolotes",
    label: "Naves y Macrolotes",
  },
  {
    id: "ubicacion",
    label: "Ubicación",
  },
  {
    id: "pi-true-cf",
    label: "¿Por qué PI True CF?",
  },
  {
    id: "true-developments",
    label: "True Developments",
  },
  {
    id: "contacto",
    label: "Contacto",
  },
];

export default function Hero() {
  return (
    <div className="relative flex justify-center w-full h-lvh">
      {/* Overlay */}
      <div className="absolute z-10 inset-0 w-full h-full bg-[#191F35]/80" />

      {/* Image */}
      <div className="absolute z-5 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={backgroundImage}
            alt="Render de True Developments Ciénega de Flores"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Fake Navbar */}
      <div className="absolute z-10 top-0 w-full h-[83px] bg-blue" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1164px] h-full border-x-1 border-cream">
        {/* Navbar */}
        <div className="relative flex w-full justify-center bg-blue">
          {/* Botón Logo True */}
          <img
            src={trueCream}
            alt="Logo de True Developments"
            className="absolute w-[21px] h-[30px] -left-[40px] top-1/2 -translate-y-1/2"
          />

          <div className="flex w-full h-[83px] justify-around items-center">
            {buttons.map((button, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex justify-center items-center h-[43px] px-[16px] pt-[11px] pb-[12px] text-[16px] font-medium text-cream"
                >
                  {button.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col w-full gap-[36px] px-[30px] pt-[22vh]">
          {/* Logo */}
          <div className="relative w-[335px] h-[60px]">
            <img
              src={trueLogoCream}
              alt="Logo de True Developments"
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            {/* Titulo */}
            <h1 className="text-[48px] font-abhaya leading-none uppercase">
              Diseñado para <br /> operar con certeza.
            </h1>

            {/* Description */}
            <p className="w-[431px] text-[20px] leading-[125%]">
              Naves industriales a la medida y macrolotes industriales en renta
              y venta.
              <br /> <br />
              <b>Parque Industrial Clase A</b> de 15 hectáreas sobre la
              Autopista Monterrey Nuevo Laredo (Carretera Federal 85), en{" "}
              <b>Ciénega de Flores,</b> NL.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-[44px]">
            <button className="text-[16px] px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-orange hover:cursor-pointer">
              Quiero rentar o comprar una Nave Industrial a la medida
            </button>

            <button className="text-[16px] px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-cream text-blue hover:cursor-pointer">
              Quiero comprar un Macrolote Industrial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
