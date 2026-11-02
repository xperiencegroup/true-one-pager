import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

export default function EtapaCard({ etapa, delay }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("documentamos");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`grid grid-rows-subgrid row-span-4 gap-y-[20px] w-full px-[10px] py-[20px] pt-[30px] pb-[40px] rounded-[20px] border-[1.5px] border-cream bg-cream/10 reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex self-center justify-self-center items-center justify-center size-[50px] rounded-full bg-black">
        <img src={etapa.icon} alt="Ícono de la etapa" className="size-[24px]" />
      </div>

      <h4 className="heading font-abhaya font-bold text-center text-white whitespace-pre-wrap uppercase">
        {t(`${etapa.key}.title`)}
      </h4>

      <p className="paragraph text-left font-light text-white">
        {t(`${etapa.key}.text`)}
      </p>

      <p className="paragraph text-left font-medium text-white pt-[10px] whitespace-pre-line">
        {t(`${etapa.key}.kicker`)}
      </p>
    </div>
  );
}
