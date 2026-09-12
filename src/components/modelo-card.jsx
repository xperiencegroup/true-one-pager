import { useInView } from "../hooks/useInView";
import checkIcon from "../assets/icons/check.svg";
import { useTranslation } from "react-i18next";

export default function ModeloCard({ modelo, delay }) {
  const [ref, isVisible] = useInView();
  const { t: tModel } = useTranslation("modelos");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col justify-center items-center w-full max-w-[391px] gap-[20px] reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      {/* cuadro */}
      <div className="flex flex-col w-full h-[295px] justify-center items-center p-[20px] gap-[24px] rounded-[20px] bg-cream/10 border border-cream">
        {/* Titulo y subtitulo */}
        <div className="flex flex-col items-center gap-[2px]">
          <h3 className="subtitle text-center font-abhaya uppercase text-cream-second">
            {tModel(`${modelo.key}.kicker`)}
          </h3>
          <h3 className="text-center parrafo-bold font-bold tracking-tight  text-cream-second">
            {tModel(`${modelo.key}.title`)}
          </h3>
        </div>

        {/* Image */}
        <img
          src={modelo.icon}
          alt={tModel(`${modelo.key}.title`)}
          className="h-[66px]"
        />

        {/* Ventaja */}
        <div className="w-full h-[44px] flex-col min-[440px]:flex-row justify-center lg:justify-start items-center flex gap-[12px]">
          <img src={checkIcon} alt="Ícono check" className="size-[20px]" />

          <p className="paragraph font-light text-cream">
            {tModel(`${modelo.key}.text`)}
          </p>
        </div>
      </div>
    </div>
  );
}
