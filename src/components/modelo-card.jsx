import { useInView } from "../hooks/useInView";
import checkIcon from "../assets/icons/check.svg";

export default function ModeloCard({ modelo, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col justify-center items-center w-full max-w-[391px] gap-[20px] reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      {/* cuadro */}
      <div className="flex flex-col w-full h-[226px] justify-start items-center p-[20px] gap-[4px] rounded-[20px] bg-cream/10 border border-cream">
        {/* Titulo y subtitulo */}
        <div className="flex flex-col items-center gap-[2px]">
          <h3 className="subtitle text-center font-abhaya uppercase text-cream-second">
            {modelo.title}
          </h3>
          <h3 className="text-center parrafo-bold font-bold tracking-tight  text-cream-second">
            {modelo.subtitle}
          </h3>
        </div>

        {/* Image */}
        <img
          src={modelo.icon}
          alt={`Ícono de ${modelo.title}`}
          className="h-[66px]"
        />

        {/* Ventaja */}
        <div className="w-full h-full flex-col min-[440px]:flex-row justify-center lg:justify-start items-center flex gap-[12px]">
          <img src={checkIcon} alt="Ícono check" className="size-[20px]" />

          <p className="paragraph font-light text-cream">{modelo.pro}</p>
        </div>
      </div>

      <button
        className={`w-fit px-[20px] pt-[11px] pb-[12px] rounded-full boton font-semibold drop-shadow-md drop-shadow-black/25 ${modelo.id === "nave" ? "bg-orange text-cream" : "bg-cream text-blue"}`}
      >
        {modelo.id === "nave"
          ? "Ver disponibilidad de Naves BTS en renta o venta"
          : "Quiero comprar un Macrolote"}
      </button>
    </div>
  );
}
