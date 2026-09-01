import backgroundImage from "../../assets/images/hero-background.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div id="hero" className="relative flex justify-center w-full min-h-svh">
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
      <div className="navbar-enter absolute z-10 top-0 w-full h-[83px] bg-blue" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1164px] h-full">
        {/* Navbar */}
        <Navbar />

        {/* Texto */}
        <div className="flex flex-col w-full gap-[30px] sm:gap-[36px] px-[30px] pt-[90px] pb-[20px] min-[660px]:pt-[22vh]">
          {/* Logo */}
          <div className="relative w-full max-w-[298px] sm:w-[335px] h-[60px] animate-hero-1">
            <img
              src={trueLogoCream}
              alt="Logo de True Developments"
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>

          <div className="flex flex-col gap-[30px] animate-hero-2">
            {/* Titulo */}
            <h1 className=" title font-abhaya uppercase">
              True Ciénega <br /> Industrial Park
            </h1>

            {/* Subtitulo */}
            <h2 className="max-w-[780px] subtitle font-abhaya uppercase">
              Naves industriales a la medida y macrolotes industriales en venta
              y renta.
            </h2>

            {/* Description */}
            <p className="max-w-[680px] lg:max-w-[900px] text-[20px] font-light leading-[125%]">
              <b className="font-bold">Parque Industrial Clase A</b> de 15
              hectáreas sobre la
              <br />
              Autopista Monterrey-Nuevo Laredo (Carretera Federal 85), en
              <b className="font-bold"> Ciénega de Flores, NL.</b>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[20px] min-[400px]:gap-[40px] sm:gap-[44px] animate-hero-3">
            <button className="boton px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-orange hover:cursor-pointer">
              Quiero comprar o rentar <br className="sm:hidden" /> una Nave
              Industrial a la medida
            </button>

            <button className="boton px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-cream text-blue hover:cursor-pointer">
              Ver disponibilidad <br className="sm:hidden" /> de Macrolotes en
              venta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
