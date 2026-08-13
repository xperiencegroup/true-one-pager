import backgroundImage from "../../assets/images/hero-background.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";
import Navbar from "./navbar";

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
        <Navbar />

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

          <div className="flex flex-col gap-[30px]">
            {/* Titulo */}
            <h1 className="text-[48px] font-abhaya leading-none uppercase">
              True Ciénega <br /> Industrial Park
            </h1>

            {/* Subtitulo */}
            <h2 className="max-w-[780px] text-[32px] font-abhaya leading-none uppercase">
              Naves industriales a la medida y macrolotes industriales en venta
              y renta.
            </h2>

            {/* Description */}
            <p className="w-[900px] text-[20px] leading-[125%]">
              <b>Parque Industrial Clase A</b> de 15 hectáreas sobre la
              <br />
              Autopista Monterrey-Nuevo Laredo (Carretera Federal 85), en
              <b> Ciénega de Flores, NL.</b>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-[44px]">
            <button className="text-[16px] px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-orange hover:cursor-pointer">
              Quiero comprar o rentar una Nave Industrial a la medida
            </button>

            <button className="text-[16px] px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-cream text-blue hover:cursor-pointer">
              Ver disponibilidad de Macrolotes en venta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
