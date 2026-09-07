import backgroundImage from "../../assets/images/hero-background2.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col justify-start items-center w-full min-h-svh lg:min-h-svh"
    >
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

      {/* line decoration */}
      <div className="hidden min-[660px]:flex pointer-events-none absolute justify-center z-80 top-0 w-full h-full px-[50px] lg:px-[60px]">
        <div className="w-full h-full max-w-[1160px] border-cream/50 border-x-[0.5px] bg-red-500/30]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1160px] h-full min-[660px]:px-[50px] lg:px-[60px] xl:px-0">
        {/* Texto */}
        <div className="flex flex-col w-full h-full gap-[30px] sm:gap-[90px] px-[44px] min-[660px]:px-[30px] pt-[90px] pb-[20px] min-[660px]:pt-[17vh]">
          {/* Logo */}
          <div className="relative w-full max-w-[267px] sm:w-[335px] h-[60px] animate-hero-1">
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
            <p className="max-w-[680px] lg:max-w-[1100px] text-[20px] font-light leading-[125%]">
              <strong className="font-bold">Parque Industrial Clase A </strong>
              de 15 hectáreas sobre la Autopista{" "}
              <span className="whitespace-nowrap">Monterrey-Nuevo Laredo</span>
              (Carretera Federal 85),{" "}
              <br className="max-[660px]:hidden lg:hidden min-[1130px]:block" />
              en{" "}
              <strong className="font-bold">
                Ciénega de Flores, Nuevo León.
              </strong>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[30px] min-[660px]:gap-[40px] sm:gap-[44px] animate-hero-3">
            <button className="boton px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-orange hover:cursor-pointer">
              Quiero comprar o rentar <br className="sm:hidden" /> una Nave
              Industrial a la medida
            </button>

            <button className="boton px-[20px] pt-[11px] pb-[12px] rounded-full font-medium bg-cream text-blue hover:cursor-pointer">
              Quiero comprar un Macrolote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
